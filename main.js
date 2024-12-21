const leo = [
    {
        name: 'Leonardo Escobedo',
        position: 'Forward',
        number: '27',
        age: '10',
        club: 'HTX',
        pass: '95',
        shot: '12',
        speed: '7'
    }
]

//Name
const leoName = document.getElementById('name');
leoName.innerHTML = leo[0].name;

//Position
const leoPosition = document.getElementById('position');
leoPosition.innerHTML = `Position: ${leo[0].position}`;

//Number
const leoNumber = document.getElementById('number');
leoNumber.innerHTML = leo[0].number;

//Age
const leoAge = document.getElementById('age');
leoAge.innerHTML = `Age: ${leo[0].age}`;

//Club
const leoClub = document.getElementById('club');
leoClub.innerHTML = `Club: ${leo[0].club}`;

//Pass
const leoPass = document.getElementById('pass');
leoPass.innerHTML = `Passes: ${leo[0].pass}`;

//Shot
const leoShot = document.getElementById('shot');
leoShot.innerHTML = `Shots: ${leo[0].shot}`;

//Speed
const leoSpeed = document.getElementById('speed');
leoSpeed.innerHTML = `Speed: ${leo[0].speed} mph`;
