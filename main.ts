#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance =20000;
let myPin =2324;

console.log(chalk.bgBlue("welcome  ATM  user"));
let pinAnswer = await  inquirer.prompt([
 
  {
     name:   "pin",
     type:    "number",
     message:(chalk.bgGreen("Enter your pin number:")),
 }

]);
if (pinAnswer.pin === myPin){
     console.log (chalk.bgMagenta("correct pin code!!!"));

let operationAns = await inquirer.prompt([
    {
    name:     "operation",
    message:  chalk.bgRed(" please select option:"),
    type:      "list",
    choices:  ["withdraw", "check Balance"],
   }

])

if (operationAns.operation === "withdraw"){
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type:   "list",
            message:  "select a withdrawl method",
            choices:["fast Cash", "Enter Amount"]
        }
    ])
    if(withdrawAns.withdrawMethod === "fast Cash"){

        let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message : "Select Amount:",
        choices: [1000 , 2000 , 5000, 10000, 20000, 50000]

       }
    ])
    if (fastCashAns.fastCash > myBalance){
        console.log (chalk.bgYellow("insufficient Balance"));
    }

    else {
        myBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} withdraw successfully`);
        console.log(`your Remaining Balance i;${myBalance}`);
    }


}
   else if(withdrawAns.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([
            {
             name:    "amount",
             message: "enter  your amount:",
             type:    "number",
        
            }
  
        ]);
        if (amountAns.amount > myBalance){
            console.log("yuou have insufficient balance!");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully!`);
            console.log(`your remaining Balance is:${myBalance}`);
           }

         } 
        }else if (operationAns.operation === "check Balance") {
     console.log(`your Account Balance is:${myBalance}`);
     }
    }
else {
console.log(chalk.bgYellowBright("your pin is incorrect!"));
    }



