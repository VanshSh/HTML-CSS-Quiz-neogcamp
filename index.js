//Module
var rl =require("readline-sync");
const chk=require("chalk");
const log=console.log;
const quesColor=chk.cyanBright;
const answColor=chk.green;

//Opening

if( rl.keyInYN("Do you want to play this Quiz? "))
{
  var name=rl.question("Please write your Name: ")
  }else
{
  log('Exit');
  process.exit()
}

log(chk.bgBlue(` Welcome!    \n ${chk.white.underline(name)} Best of Luck!\n Level 1        \n\n`));

var score=0;


// Questions List
const quesList=
[
  {
    ques:`"Select the correct HTML for creating a hyperlink?"
         a: A url="http://www.xyz.com"
         b: A name="http://www.xyz.com">xyz.com
         c: <A href="http://www.xyz.com">xyz</A>\n`,
    answ:"c"
  },
  {
    ques:`"In CSS, what is the correct option to select all the tags on a page? "
         a:  p{}
         b: .p{}
         c: <p>{}\n`,
    answ:"a"
  },
  {
    ques:`"Select the option to make a list that lists the items with bullets?"
         a: Ol
         b: Dl
         c: List\n`,
    answ:"b"
  },
  {
    ques:`"In CSS, choose the correct option to select this image by its id?

<img id=”mainpic” src=”cat.png”>"
         a: img{}
         b: .mainpic{}
         c: #mainpic\n`,
    answ:"c"
  },
  {
    ques:`"In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element?"
         a: None
         b: display:inline
         c: display:left\n`,
    answ:"b"
  },
  {
    ques:`"Select the correct HTML tag to make a text bold."
         a: b
         b: bb
         c: bold\n`,
    answ:"a"
  },
  {
    ques:`"Select the appropriate HTML tag for inserting a line break?"
         a: break
         b: brk
         c: br\n`,
    answ:"c"
  },
  {
    ques:`"Select the correct option to open a link in a new browser window?"
         a: A href="url"target="new"
         b: A href="url"target="_blank"
         c: A href="url"target="window"\n`,
    answ:"b"
  },
  {
    ques:`"Select the property used to create space between the element’s border and inner content?"
         a: border
         b: padding
         c: spacing\n`,
    answ:"b"
  },
  {
    ques:`"In CSS,Select the property used to set the spacing in between lines of text?"
         a: line-spacing
         b: letter-spacing
         c: line-height\n`,
    answ:"c"
  },
  {
    ques:`"Select the property that is used to change the list style to show roman numerals instead of normal numbers?"
         a: list-style-type:upper-roman:
         b: list-style-type:roman-numerals;
         c: list-style:roman;\n`,
    answ:"a"
  },
  {
    ques:`"In CSS, Select the property to set an image in a list instead of a standard bullet?"
         a: list-image
         b: image-list
         c: list-style-image\n`,
    answ:"c"
  },
  {
    ques:`"Select the property that is used to create spacing between HTML elements?"
         a: margin
         b: padding
         c: none\n`,
    answ:"b"
  },
  {
    ques:`"In CSS,select the property used to set the background color of an image?"
         a: background-color
         b: color
         c: background:color\n`,
    answ:"a"
  },
  {
    ques:`"For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?"
         a: a:focus
         b: a:active
         c: a:visited\n`,
    answ:"a"
  },
];




//Function
function play(ques,answ)
{
  var isAnswerCorrect;

  var answer=rl.question(quesColor(ques));

  if(answer.toLocaleLowerCase()===answ.toLocaleLowerCase())
 {
   isAnswerCorrect=true;
   score+=2;
 } 
 else
 {
   isAnswerCorrect=false;
   score-=1;
 }
 return isAnswerCorrect;
}


//Loop
for(var i=0; i<quesList.length;i++){
  if(i==5&&score>=7){
     log(chk.bgBlue("Welcome!\nLevel 2 "));
   }
  if(i==5&&score<7)
    {
     log(chk.bgRed("Sorry You Can't make it to Level 2\n Better Luck Next Time."));
     break;
    }
   var currentQuestion=quesList[i];
   var check=play(currentQuestion.ques,currentQuestion.answ);
   if(check===true){

      log(chk.black.bgGreenBright("GREAT!"));
      log(chk.yellowBright(`Your Score is: ${score}\n\n`));
      log(chk.blueBright("****************************"))
    }
   else{  
     log(chk.bgRed("Opps!"))
     log(`Right answer is: ${answColor(currentQuestion.answ)}`)
     log(chk.yellowBright(`Your Score is: ${score}\n\n`))
     log(chk.blueBright("****************************"))
    }
   if(i==10&&score>=16){
     log(chk.bgBlue("Welcome!\nLevel 3 "));
     
    }
  if(i==10&&score<16)
  {
    log(chk.bgBlue("Sorry You can't make it to Level 3\nBetter Luck Next Time"));
    break;
  }
  
}

//Fianl Result
log(chk.bgBlue(`Final Score is: ${score}\nOut of: 30   `))
log(chk.blueBright("---------------------------------------------------------------"))

  


