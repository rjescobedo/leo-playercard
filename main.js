const leo = [
    {
        name: 'Leo Escobedo',
        position: 'Midfielder',
        number: '27',
        age: '10',
        club: 'HTX',
        pass: '95',
        shot: '12',
        speed: '8'
    }
]

//Name
const leoName = document.getElementById('name');
leoName.innerHTML = leo[0].name;

//Position
const leoPosition = document.getElementById('position');
leoPosition.innerHTML = leo[0].position;

//Number
const leoNumber = document.getElementById('number');
leoNumber.innerHTML = `#${leo[0].number}`;

//Age
const leoAge = document.getElementById('age');
leoAge.innerHTML = `AGE: ${leo[0].age}`;

//Club
const leoClub = document.getElementById('club');
leoClub.innerHTML = `CLB: ${leo[0].club}`;

//Pass
const leoPass = document.getElementById('pass');
leoPass.innerHTML = `PAS: ${leo[0].pass}`;

//Shot
const leoShot = document.getElementById('shot');
leoShot.innerHTML = `SHO: ${leo[0].shot}`;

//Speed
const leoSpeed = document.getElementById('speed');
leoSpeed.innerHTML = `SPD: ${leo[0].speed} mph`;