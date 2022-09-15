 const inquirer = require ('inquirer')

inquirer
  .prompt([
    {
    /* Pass your questions in here */
        type : "list",
        name :'selection',
        choices :['choice1','choice2']
    }
  ])
  .then(function(answers) {
    if(answers.selection=='choice1'){
        console.log("Choice1 is selected")
    }
    else{
        console.log("Choice2 is selected")
    }
    // Use user feedback for... whatever!!

  })
