
let firstMessage = document.querySelector('.horoscope');
let secondMessage = document.querySelector('.message');
let stars = document.querySelector('.stars');

/* QUOTES */

const allQuotes = {
  sadQuote: [
    "vous avez besoin d'un plaid et d'une boisson chaude.",
    'vous allez écoutez des titres de votre playlist préférée pour vous remonter le moral.',
    'vous allez appeler un proche pour vous confiez.',
  ],
  happyQuote: [
    'vous allez faire une rencontre inoubliable.',
    'vous allez passer une excellente journée.',
    "vous allez embellir la journée d'une personne proche.",
  ],
  angryQuote: [
    'vous allez retrouver le sourire en voyant un proche que vous aimez.',
    'vous allez vous défoulez en faisant du sport.',
    "vous allez attendre que l'orage passe puis retrouver le soleil.",
  ],
};

/* GET ASTRO SIGN */
        const zodiacSigns = [
  {
    name: 'Aries',
    nameFr: 'bélier',
    from: [21, 03],
    to: [20, 04],
  },
  {
    name: 'Taurus',
    nameFr: 'taureau',
    from: [21, 04],
    to: [21, 05],
  },
  {
    name: 'Gemini',
    nameFr: 'gémeaux',
    from: [22, 05],
    to: [21, 06],
  },
  {
    name: 'Cancer',
    nameFr: 'cancer',
    from: [22, 06],
    to: [23, 07],
  },
  {
    name: 'Leo',
    nameFr: 'lion',
    from: [24, 07],
    to: [23, 08],
  },
  {
    name: 'Virgo',
    nameFr: 'vierge',
    from: [24, 08],
    to: [23, 09],
  },
  {
    name: 'Libra',
    nameFr: 'balance',
    from: [24, 09],
    to: [23, 10],
  },
  {
    name: 'Scorpio',
    nameFr: 'scorpion',
    from: [24, 10],
    to: [22, 11],
  },
  {
    name: 'Sagittarius',
    nameFr: 'sagittaire',
    from: [23, 11],
    to: [21, 12],
  },
  {
    name: 'Capricorn',
    nameFr: 'capricorne',
    from: [22, 12],
    to: [20, 01],
  },
  {
    name: 'Aquarius',
    nameFr: 'verseau',
    from: [21, 01],
    to: [19, 02],
  },
  {
    name: 'Pisces',
    nameFr: 'poisson',
    from: [20, 02],
    to: [20, 03],
  },
];

/* CHECK IF USER INPUT IS VALID AND INSERT MESSAGE INTO CONTAINER*/

function validateName(name) {
    const regex = /^[a-zA-Z-]{1,15}$/;
    return regex.test(name);
}

function validateDate(dateString) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;
    return regex.test(dateString);
}


document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.btn-form-submit');
        form.addEventListener('click', (event) => {
        event.preventDefault();

        let userName = document.getElementById('userName').value;
        const usernameCap = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
        console.log(usernameCap);
        const isValidName = validateName(userName);
        if (!isValidName) {
            const errorMessageName = document.getElementById('errorMessageName');
            errorMessageName.textContent = 'Veuillez entrer des lettres uniquement.';
            return;
        }

        const errorMessageName = document.getElementById('errorMessageName');
        errorMessageName.textContent = '';

        let userBirthday = document.getElementById('userBirthday').value;
        const isValidDate = validateDate(userBirthday);
        if (!isValidDate) {
            const errorMessageDate = document.getElementById('errorMessageDate');
            errorMessageDate.textContent = 'Veuillez entrer une date de naissance valide (JJ/MM).';
            return;
        }

        const errorMessageDate = document.getElementById('errorMessageDate');
        errorMessageDate.textContent = '';
        
        const selectedMood = document.querySelector('input[name="mood"]:checked');
        if (!selectedMood) {
            const errorMessageMood = document.getElementById('errorMessageMood');
            errorMessageMood.textContent = 'Veuillez cocher une humeur.';
            return;
        }

        const errorMessageMood = document.getElementById('errorMessageMood');
        errorMessageMood.textContent = '';

        const GetRandomNumber = () => {
          return Math.floor(Math.random() * 3);
        };
        const randomIndex = GetRandomNumber();
      
        const getMood = () => {
            event.preventDefault();
            let chosenMood = document.querySelector('input[name="mood"]:checked').value;
            if (chosenMood === 'good-mood') {
                chosenMood = allQuotes.happyQuote[randomIndex];
                return chosenMood;
            }
            else if (chosenMood === 'so-so-mood') {
                chosenMood = allQuotes.sadQuote[randomIndex];
                return chosenMood;
            }
            else if (chosenMood === 'bad-mood') {
                chosenMood = allQuotes.angryQuote[randomIndex];
                return chosenMood;
            }
            else {
                console.log('Choisissez votre humeur');
            }
        };   

        const theQuote = getMood();
      
        const userBirthdate = document.querySelector('#userBirthday');
        const [day, month] = userBirthdate.value.trim().split('/');
        const result = getZodiacSign(day, month);
 
        function getZodiacSign(day, month) {
        const checkDate = [day, month];
        for (const sign of zodiacSigns) {
        const from = sign.from;
        const to = sign.to;
        if (
      (checkDate[1] == from[1] && checkDate[0] >= from[0]) ||
      (checkDate[1] == to[1] && checkDate[0] <= to[0]) ||
      (checkDate[1] > from[1] && checkDate[1] < to[1])
      ) {
      return sign;
      }
    }
  return null;
}

        let message = document.querySelector("#personalisedMessage");

        const userHoroscope = `${usernameCap}, votre signe astrologique est ${result.nameFr}. Vu votre humeur du jour, votre prédiction est ${theQuote}`;
      
        firstMessage.classList.add('none');
        stars.classList.add('none');
        secondMessage.classList.remove('none');
        secondMessage.classList.add('flex');
        message.innerHTML = userHoroscope;
    });
});
