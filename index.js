
let firstMessage = document.querySelector('.horoscope');
let secondMessage = document.querySelector('.message');
let stars = document.querySelector('.stars');

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
        
    });
});

/* GET ASTRO SIGN */


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

        let message = document.querySelector("#personalisedMessage");

        const userHoroscope = `${userName}, votre signe astrologique est ${userBirthday}. Vu votre humeur du jour, votre prédiction est ${theQuote}`;
      
        firstMessage.classList.add('none');
        stars.classList.add('none');
        secondMessage.classList.remove('none');
        message.innerHTML = userHoroscope;
    });
});
