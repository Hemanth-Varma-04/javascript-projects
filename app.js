// console.log("Hemanth varma");
// alert("something went wrong!")
// prompt("Enter your name:");


// let roll = prompt("enter your roll no:");
// console.log(roll);

// let firstname = prompt("enter your firstname:");
// let lastname = prompt("enter your lastname:");
// //console.log("welcome",firstname,lastname,"!");
// let msg = "welcome"+firstname+lastname+"!";
// alert();


// let password = prompt("enter the password:");
// let newpassword = password.trim();
// console.log(newpassword);

// let msg = "hello";
// console.log(msg.trim().toUpperCase());

// let cars = ["bmw","benz","maruthi","xuv"];
// cars.push("toyota");
// console.log(cars);
// cars


// const favmovie = "avatar";
// let guess = prompt("Enter your favmovie:");
// while(guess != favmovie){
//     if(guess == "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess.please try again");
// }
// if(guess == favmovie){
//     console.log("congrats!");
// }


let todo = [];
let req = prompt("please enter the request:");

while (req !== "quit" && req !== null) {
    if (req === "list") {
        console.log("_______________");
        for (let task of todo) {
            console.log(task);
        }
        console.log("_______________");
    } else if (req === "add") {
        let task = prompt("Enter the task you want to add");
        if (task !== null) {
            todo.push(task);
            console.log("task added");
        }
    } else if (req === "delete") {
        let idx = prompt("please enter the index");
        if (idx !== null && !isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("task deleted");
        } else {
            console.log("Invalid index");
        }
    } else {
        console.log("Wrong command");
    }

    req = prompt("please enter your request:");
}

console.log("Quitting app");
