//strings//
// let firstname = "famzy";
// console.log(firstname);

// let lastname = "Ahmed";
//     class1 = "ss1";
//     age    =  15;
//     gender = "male";

//     let person = lastname + " " + class1 + " " + age + " " + gender;
//     console.log(person);

//     console.log(person[13])
//       console.log(person.length);

//       console.log(person.toUpperCase());

//       console.log(person.replace(1, 2 ))

//       let  month = "dec".slice(0,1)
//       console.log(month)

//Numbers//
//whole number//
// let radius = 10;
// //Decimal number//
// const pi   = 3.14;

// console.log(radius , pi)

//math opertators +, -, *, /, **, %//
 
// console.log(10 / 2);

// let result = radius % 3;
// console.log(result);

//area of a circle//
// let result = pi * radius**2;
// console.log(result);
 

// order of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);


// let likes = 10;
 //for adding a new value//
// likes = likes + 1;

//shorthand notation//
// likes++;
//likes--;

// shorthand for adding a new value//
// likes += 10;
//likes -= 5;
// likes *= 2;
// likes /= 2;
// console.log(likes);

// nan// not a number//
// console.log(5 / 'hello');
// console.log(5 * 'hello');

// how to concatenate numbers//

// let result = "the blog has" + " " + (likes +    likes) + " " + "likes";

// console.log(result)

//types of concatention//

// template  strings//
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;


//concatination way
// let result = "The blog called" + " " + title + " " +  " "  + 'by' + " " + " " +  author + " "  +  " " + 'has' + " " + " " + likes + " "  + 'likes';
// console.log(result)

// // template string way
let result = `The blog called  ${title} by ${author} has ${likes} likes`
console.log(result)

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);