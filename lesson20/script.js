//This JS

// function Person(fname, lname, age) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.getnewAge = function() {
//         console.log(`user age is ${this.age}`);
//     }
// }

// Person.prototype.getNewName = function() {
//     console.log(`user name is ${this.fname}`);
// }


// let user = new Person('giorgi', 'ragaca', 25);
// let user2 = new Person('ana', 'smith', 30);

// user.getNewName();



//accordition
let accordion = document.getElementsByClassName('container');
// let accordion = document.querySelectorAll('.container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}



//burger bar
let navigation = document.getElementById('navbarlinks');
let toggleButton = document.getElementById('toggleBurger');

toggleButton.addEventListener('click', function() {
    navigation.classList.toggle('activeNavigation');
})