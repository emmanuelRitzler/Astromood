let message = document.querySelector("#personalisedMessage");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.btn-form-submit');
    form.addEventListener('click', (event) => {
        event.preventDefault();
        let userName = document.getElementById('userName').value;
        let userBirthday = document.getElementById('userBirthday').value;
        let mood = document.querySelector('input[name="mood"]:checked').value; 
        const userHoroscope = `${userName}, votre signe astrologique est ${userBirthday}. Vu votre humeur du jour, votre prédiction est ${mood}`;
        message.innerHTML = userHoroscope;
    })
});

const sadQuote = [];
const happyQuote = [];
const angryQuote = []; 



const GetRandomNumber = () => {
    return Math.floor(Math.random() * 9)
};
// console.log(GetRandomNumber()); -- testé et approuvé