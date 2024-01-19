let firstMessage = document.querySelector('.horoscope');
let secondMessage = document.querySelector('.message');
let stars = document.querySelector('.stars');

/* GET RANDOM QUOTE IN AN ARRAY OF QUOTES */

const sadQuote = [];
const happyQuote = [];
const angryQuote = []; 



const GetRandomNumber = () => {
    return Math.floor(Math.random() * 9)
};
// console.log(GetRandomNumber()); -- testé et approuvé

/* GET ASTRO SIGN */

const listAstroSigns = {
    virgo: 'vierge',
    aries: 'bélier',
    taurus: 'taureau',
    gemini: 'gémeaux',
    cancer: 'cancer',
    leo: 'lion',
    libra: 'balance',
    scorpio: 'scorpion',
    sagittarius: 'sagittaire',
    capricorn: 'capricorne',
    pisces: 'poisson',
    aquarius: 'verseau'
}


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

        
        let mood = selectedMood.value;
        let message = document.querySelector("#personalisedMessage");


        const userHoroscope = `${userName}, votre signe astrologique est ${userBirthday}. Vu votre humeur du jour, votre prédiction est ${mood}`;
        firstMessage.classList.add('none');
        stars.classList.add('none');
        secondMessage.classList.remove('none');
        message.innerHTML = userHoroscope;
    });
});
