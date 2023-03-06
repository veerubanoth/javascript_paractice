// Adding more if conditionals after else when you have to add more conditions and options


let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour < 12) {
  console.log("Good Morning");
} else if (currentHour >= 12 && currentHour < 16) {
  console.log("Good Day!");
} else if (currentHour >= 16 && currentHour < 20) {
  console.log("Good Evening!");
} else {
  console.log("Good Night");
}

// Grade calculation

const marks = 50;

if (marks >= 90) {
  grade = "A+";
  console.log(`Grade is :${grade} `);
} else if (marks >= 80) {
  grade = "A";
  console.log(`Grade is :${grade} `);
} else if (marks >= 70) {
  grade = "B";
  console.log(`Grade is :${grade} `);
} else if (marks >= 60) {
  grade = "C";
  console.log(`Grade is :${grade} `);
} else {
  grade = "F";
  console.log(`Grade is :${grade} `);
}


const userName = 'admin';
const passWord = 'password123';

if(userName === 'admin' && passWord === 'password123'){
    console.log('Amin: Persmision Granted');
}else if(userName === 'guest' && passWord === 'guestpass') {
    console.log('Guest User');
}