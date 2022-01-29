const ask = require("readline-sync");
const chalk = require("chalk");

const quesColor = chalk.cyanBright;
const answColor = chalk.green;


const quesList =
  [
    {
      ques: `Q1. Select the correct HTML for creating a hyperlink?
         a: a url="http://www.xyz.com"
         b: <a name="http://www.xyz.com"> xyz.com
         c: <a href="http://www.xyz.com"> xyz </a>
         `,
      answ: "c"
    },
    {
      ques: `Q2. In CSS, what is the correct option to select all the tags on a page? 
         a:  p{}
         b: .p{}
         c: <p>{}
         `,
      answ: "a"
    },
    {
      ques: `Q3. Select the option to make a list that lists the items with bullets?
         a: ol
         b: dl
         c: List
         `,
      answ: "b"
    },
    {
      ques: `Q4. In CSS, choose the correct option to select this image by its id?
<img id="mainpic" src="cat.png">
       
         a: img{}
         b: .mainpic{}
         c: #mainpic 
         `,
      answ: "c"
    },
    {
      ques: `Q5. In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?
         a: None
         b: display:inline
         c: display:left
         `,
      answ: "b"
    },
    {
      ques: `Q6. Select the correct HTML tag to make a text bold.
         a: b
         b: bb
         c: bold
         `,
      answ: "a"
    },
    {
      ques: `Q7. Select the appropriate HTML tag for inserting a line break?
         a: break
         b: brk
         c: br
         `,
      answ: "c"
    },
    {
      ques: `Q8. Select the correct option to open a link in a new browser window?
         a: A href="url"target="new"
         b: A href="url"target="_blank"
         c: A href="url"target="window"
         `,
      answ: "b"
    },
    {
      ques: `Q9. Select the property used to create space between the element’s border and inner content?
         a: border
         b: padding
         c: spacing
         `,
      answ: "b"
    },
    {
      ques: `Q10. In CSS,Select the property used to set the spacing in between lines of text?
         a: line-spacing
         b: letter-spacing
         c: line-height
         `,
      answ: "c"
    },
    {
      ques: `Q11. Select the property that is used to change the list style to show roman numerals instead of normal numbers?
         a: list-style-type:upper-roman:
         b: list-style-type:roman-numerals;
         c: list-style:roman;
         `,
      answ: "a"
    },
    {
      ques: `Q12. In CSS, Select the property to set an image in a list instead of a standard bullet?
         a: list-image
         b: image-list
         c: list-style-image
         `,
      answ: "c"
    },
    {
      ques: `Q13. Select the property that is used to create spacing between HTML elements?
         a: margin
         b: padding
         c: none
         `,
      answ: "b"
    },
    {
      ques: `Q14. In CSS,select the property used to set the background color of an image?
         a: background-color
         b: color
         c: background:color
         `,
      answ: "a"
    },
    {
      ques: `Q15. For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?
         a: a:focus
         b: a:active
         c: a:visited
         `,
      answ: "a"
    },
  ];



if (ask.keyInYN(chalk.red("Do you want to play this Quiz? "))) {

  let userName = ask.question("Please write your Name: ")

  console.log(chalk.blue.underline.bold(`

Welcome ${userName}
Best of Luck !!
Level 01
`));

} else {

  console.log('Exit');

  process.exit()

}


let score = 0;


for (let i = 0; i < quesList.length; i++) {
  if (i == 5 && score >= 7) {
    console.log(chalk.bgBlue(` Welcome! Level 2 `));
  }
  if (i == 5 && score < 7) {

    console.log(chalk.bgRed(` Sorry You Can't make it to Level 2!  Better Luck Next Time.`))
    return

  }

  let currentQuestion = quesList[i];
  let check = play(currentQuestion.ques, currentQuestion.answ);

  if (check === true) {

    console.log(chalk.black.bgGreenBright("GREAT! "));
    console.log(chalk.yellowBright(`Your Score is: ${score}`));
    console.log(chalk.blueBright("****************************"))
  }
  else {
    console.log(chalk.bgRed("Opps! "))
    console.log(`Right answer is: ${answColor(currentQuestion.answ)}`)
    console.log(chalk.yellowBright(`Your Score is: ${score}`))
    console.log(chalk.blueBright("****************************"))

  } if (i == 10 && score >= 16) {
    console.log(chalk.bgBlue("Welcome! Level 3 "));

  } if (i == 10 && score < 16) {
    console.log(chalk.bgBlue(`Sorry You can't make it to Level 3 Better Luck Next Time`));
    return;
  }

}


function play(ques, answ) {
  let isAnswerCorrect;

  let answer = ask.question(quesColor(ques));

  if (answer.toLocaleLowerCase() === answ.toLocaleLowerCase()) {
    isAnswerCorrect = true;
    score += 2;
  }
  else {
    isAnswerCorrect = false;
    score -= 1;
  }
  return isAnswerCorrect;
}




console.log(chalk.bgBlue(`Final Score is: ${score}
Out of: 30 `))

console.log(chalk.blueBright("---------------------------------------------------------------"))




