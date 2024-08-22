#!user/bin/env node 
// input
export {};
// const answer = await inquirer.prompt([
//     {
//         type: 'input',
//         name :  'father' ,
//         message: 'what is father name ? '
//     }
// ])  
//     // number  prompt
//   console.log(' My father name is ' + answer.father);
//   //number
//   const answer2 = await inquirer. prompt ([
//     {
//         type: 'number',
//         name : 'age',
//         message: ' how old is  your father? ',
//     }
//   ])
//   console.log('My father age is ' + answer2.age);
//     // list  prompt
//     const mycalc= await inquirer.prompt([
//         {
//             type: 'list', 
//             name :  'operation',
//             message: 'what operation  you want to perform ?',
//             choices:  [ 'add', 'subtract', 'multiply' , 'division']
//         }, 
//         {
//             type: 'number',
//              name: 'num1', 
//              message: 'enter  first number ' ,
//         },
//         {   type: 'number',
//             name: 'num2', 
//             message: 'enter  other number ' ,
//          }
//     ]) 
//     if(mycalc.operation=== 'add'   ) {
//         console.log( `The sum of your number is ${mycalc.num1 + mycalc.num2} `); 
//     } else if (mycalc.operation=== 'subtract'   ) {
//             console.log( `The difference  of your number is ${mycalc.num1 - mycalc.num2} `); 
//         }  else if (mycalc.operation=== 'multiply'   ) {
//             console.log( `The   product of your number is ${mycalc.num1 * mycalc.num2} `); 
//         } else 
//             console.log( `The   quotient of ${mycalc.num1} and ${mycalc.num2}  is ${mycalc.num1 / mycalc.num2} `); 
//      //   checkbox prompt     
//      const mobilebox = await inquirer.prompt([
//       {
//               type: "checkbox",
//               name: 'mobile',
//               message: 'which is  famous mobile ?',
//               choices:  [ 'sumsung ', 'vivo ', 'iphone ' , 'oppo'] } 
//  ])  
// if (mobilebox.mobile === 'iphone'){console.log('which is famous mobile')};
//  let array = mobilebox.mobile
//  console.log(array[0]);
// // confirm prompt 
//  const  qualification = await inquirer .prompt([
//  {
//       type: 'confirm',
//       name:  'qual',
//       message: 'Are youb graduate ?'
//  }
//  ])
//  console.log(`you answer is `, qualification.qual);
// // passwords prompt 
// const password = await inquirer .prompt([
//   {
//        type: 'passwords',
//        name:  'yourpassword',
//        message: 'Enter mobile passwords?'
//   }
//   ])
//  if(password.yourpassword === 123){
//   console.log('correct password');
// } else{'incorrect password '}
// raw list
// const answer4 = await inquirer.prompt([
//     {
//     type: 'rawlist',
//     name: 'favorite_color',
//     message: 'What is your favorite color?',
//     choices: ['Red', 'Green', 'Blue', 'Yellow'],
//   }
// ]).then(answers4 => {
//   console.log(`Your favorite color is: ${answers4.favorite_color}`);
// }).catch(error => {
//   if (error.isTtyError) {
//     console.log("Prompt couldn't be rendered in the current environment");
//   } else {
//     console.log("Something went wrong");
//   }
// });
// default use 
// const answer5  = await inquirer.prompt([
//     {
//         type: 'input',
//         name: 'username',
//         message: 'What is your name?',
//         default: 'John Doe'
//     }
// ])
// console.log(answer5.username);
