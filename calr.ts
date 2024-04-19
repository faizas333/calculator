import inquirer from "inquirer";

const answer = await inquirer.prompt([{
name:"firstNumber",
type:"number",
message:"enter first number",},
{
    name:"secondNumber",
    type:"number",
    message:"enter second number",},
  {message:"select one of the operators to perfom action",
type:"list", 
name:"operator",choices: ["addition","subtraction","multiplication","division"],
 },
]);

if (answer.operator === "addition"){
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division"){
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select valid operator")
}



