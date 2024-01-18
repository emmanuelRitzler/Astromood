const getName = () => {
    const getName = document.querySelector('userName').value;
};

const getBirthday = () => {
    document.querySelector('userBirthday').value;
};

const userName = getName();
const birthDate = getBirthday();

console.log(userName);
console.log(birthDate);