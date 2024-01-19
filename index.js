/* GET RANDOM QUOTE IN AN ARRAY OF QUOTES */

const GetRandomNumber = () => {
    return Math.floor(Math.random() * 3)
};
const randomIndex = GetRandomNumber();
// console.log(randomIndex);

const allQuotes = {
    sadQuote: ["vous avez besoin d'un plaid et d'une boisson chaude.", "vous allez écoutez des titres de votre playlist préférée pour vous remonter le moral.", "vous allez appeler un proche pour vous confiez."],
    happyQuote: ["vous allez faire une rencontre inoubliable.", "vous allez passer une excellente journée.", "vous allez embellir la journée d'une personne proche."],
    angryQuote: ["vous allez retrouver le sourire en voyant un proche que vous aimez.", "vous allez vous défoulez en faisant du sport.", "vous allez attendre que l'orage passe puis retrouver le soleil."]
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.btn-form-submit');
    form.addEventListener('click', (event) => {
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
    
        const testUserHoroscope = `Vu votre humeur du jour, votre prédiction est que ${theQuote}`;
        console.log(testUserHoroscope);
    });
});


/* INSERT MESSAGE INTO CONTAINER */

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('.btn-form-submit');
//     form.addEventListener('click', (event) => {
//         event.preventDefault();
//         let userName = document.getElementById('userName').value;
//         let userBirthday = document.getElementById('userBirthday').value;
//         let mood = document.querySelector('input[name="mood"]:checked').value;
//         console.log(mood);
//         let message = document.querySelector("#personalisedMessage"); 
//         const userHoroscope = `${userName}, votre signe astrologique est ${userBirthday}. Vu votre humeur du jour, votre prédiction est que ${mood}`;
//         message.innerHTML = userHoroscope;
//     })
// });

/* GET ASTRO SIGN */

// const listAstroSigns = {
//     virgo: 'vierge',
//     aries: 'bélier',
//     taurus: 'taureau',
//     gemini: 'gémeaux',
//     cancer: 'cancer',
//     leo: 'lion',
//     libra: 'balance',
//     scorpio: 'scorpion',
//     sagittarius: 'sagittaire',
//     capricorn: 'capricorne',
//     pisces: 'poisson',
//     aquarius: 'verseau'
// }

/* CHECK IF USER INPUT IS VALID */

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.btn-form-submit');
    const userBirthdayInput = document.getElementById('userBirthday');
    const errorMessage = document.getElementById('errorMessageDate');

    submitBtn.addEventListener('click', function() {
        const userBirthdayValue = userBirthdayInput.value.trim();
        const isValidDate = validateDate(userBirthdayValue);

        if (isValidDate) {
            errorMessage.textContent = ''; 
        } else {
            errorMessage.textContent = 'Veuillez entrer une date de naissance valide (JJ/MM).';
        }
    });

    function validateDate(dateString) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;
        return regex.test(dateString);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('.btn-form-submit');
    const userNameInput = document.getElementById('userName');
    const errorMessage = document.getElementById('errorMessageName');

    submitBtn.addEventListener('click', function() {
        const userNameValue = userNameInput.value.trim();
        const isValidName = validateName(userNameValue);

        if (isValidName) {
            errorMessage.textContent = '';
        } else {
            errorMessage.textContent = 'Veuillez entrer des lettres uniquement.';
        }
    });

    function validateName(name) {
        const regex = /^[a-zA-Z-]{1,15}$/;
        return regex.test(name);
    }
});
