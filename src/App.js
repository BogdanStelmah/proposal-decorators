import React from 'react';

function readonly(target, property, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function logged(target, property, descriptor) {
  console.log(`'${property}' decorator logged at: ${new Date().toLocaleTimeString()}`);
  return descriptor;
}

class User {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  @readonly
  getFullName() {
    return this.lastName + this.firstName;
  }

  @logged
  getLastName() {
    return this.lastName;
  }
}

function App() {
  const user = new User("Dubinchenko", "Bogdan");

  console.log("User: ", user.getFullName());

  // User.prototype.getFullName = () => {
  //   console.log("Hacked")
  // }

  const lastName = user.getLastName();
  console.log("Last name: ", lastName);

  return (
    <div className="App">
      <h2>Дубинченко Богдан</h2>

      <h3>Full Stack</h3>

      <h3>AWS Certified Developer – Associate</h3>

      <p>
        Це сертифікаційна програма, яка підтверджує знання і навички розробки додатків на платформі Amazon Web Services (AWS).
      </p>
      <p>
        Цей сертифікат може бути корисним для моєї кар'єри в розробці програмного забезпечення та може підвищити мою
        привабливість для роботодавців, які працюють з AWS.
      </p>
      <p>
        Посилання на <a href="https://github.com/tc39/proposal-decorators" target="_blank" rel="noopener noreferrer">decorators
        proposal</a>
      </p>
    </div>
  );
}

export default App;
