//Friend Checker Game//
let isfriend = "Usama";
if (isfriend === "Bilal" || isfriend === "Hamza") {
    console.log(`${isfriend} is your friend`);
}
else {
    console.log(`${isfriend} is not your friend`);
}
import inquirer from "inquirer";
let isfriends = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        mesege: "Enter your friend name"
    }
]);
if (isfriends.name === "Bilal" || isfriends.name === "Hamza") {
    console.log(`${isfriends.name} is your friend`);
}
else {
    console.log(`${isfriends.name} is not your friend`);
}
