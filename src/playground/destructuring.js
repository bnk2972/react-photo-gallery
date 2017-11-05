// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Thailand',
//         temp: 92
//     }
// };

// // const name = person.name;
// // const age = person.age;
// // Destructuring
// // กำหนดคีย์ใหม่ให้ name ชื่อ firstname
// // และถ้าไม่มี name ส่งมา ให้ใช้ Anonymous 
// const { name: firstname = 'Anonymous', age } = person;

// console.log(`${firstname} is ${age}`);

// // กำหนดคีย์ใหม่ให้ temp ชื่อ temperature
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} is ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['709/19 m2', 'Nongpling', 'Nakhonsawan', '60000'];

const [street, city, state = 'Bangkok', zip] = address;

console.log(`You are in ${state} `);