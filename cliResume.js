const inquirer = require ('inquirer')
const cp=require("child_process")

function displayList(){
  inquirer
  .prompt([
    {
    /* Pass your questions in here */
        type : "list",
        name :'selection',
        choices :['About','Skills','Projects','Academics']
    }
  ])
  .then(function(answers) {
    if(answers.selection=='About'){
        console.log("A 22years old guy having no idea what he will do in future")
        Goback()
    }
    else if(answers.selection=="Skills")
    {
        console.log("html,CSS,JavaScript,Nodejs")
        Goback()
    }
    else if(answers.selection=="Projects"){
           console.log(`1.File System Organiser
                        2.Espn Web Scrapper
                        3.Hackerank Automation`)
                        cp.execSync("start chrome https://github.com/")
                        Goback()
    }
    else if(answers.selection=="Academics"){
              cp.execSync("start chrome https://drive.google.com/file/d/1iyb1oofRwHhFBrRTHSP7oMLjyIo69cop/view?usp=sharing")
              Goback()
    }
  })

}
displayList()

  function Goback(){
  inquirer
  .prompt([
    {
    /* Pass your questions in here */
        type : "list",
        name :'selection',
        choices :['GoBack',"Exit"]
    }
  ])
  .then(function(answers) {
    if(answers.selection=='GoBack'){
        displayList()
    }
    else if(answers.selection=="Exit"){
              console.log("*********Thanks for your time*****************")
    }
  })
  }
