// Define a person object using object literal notation
const person1 = {
  name: 'John Doe',
  age: 35,
  bloodType: 'O+',
  documentNumber: '1234567890',
};

// Create two more person objects
const person2 = {
  name: 'Jane Doe',
  age: 32,
  bloodType: 'A-',
  documentNumber: '0987654321',
};

const person3 = {
  name: 'Jim Brown',
  age: 40,
  bloodType: 'B+',
  documentNumber: '1029384756',
};

// Define a function to display the data of a person
function displayPersonData(person) {
  alert(`Name: ${person.name}\nAge: ${person.age}\nBlood Type: ${person.bloodType}\nDocument Number: ${person.documentNumber}`);
}

// Create an array of people
const people = [person1, person2, person3];

// Define a function to display the data of all people in an array
function displayPeopleData(people) {
  people.forEach(person => displayPersonData(person));
}

// Call the function to display the data of all people
displayPeopleData(people);
