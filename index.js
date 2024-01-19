/* INSERT MESSAGE INTO CONTAINER */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.btn-form-submit');
    form.addEventListener('click', (event) => {
        event.preventDefault();
        let userName = document.getElementById('userName').value;
        let userBirthday = document.getElementById('userBirthday').value;
        let mood = document.querySelector('input[name="mood"]:checked').value;
        let message = document.querySelector("#personalisedMessage"); 
        const userHoroscope = `${userName}, votre signe astrologique est ${userBirthday}. Vu votre humeur du jour, votre prédiction est ${mood}`;
        message.innerHTML = userHoroscope;
    })
});

console.log(userBirthday);

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
