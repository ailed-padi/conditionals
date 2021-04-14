let logInUser= prompt("Who is there?");
if (logInUser == " " || logInUser == 0){
    alert ("canceled");
}
else if (logInUser != "Admin" ){
    alert("I don't know you!");

}
else if (logInUser == "Admin"){
    let password = prompt("Enter password");
    if(password == " " || password == 0){
        alert("canceled!");
    }
    else if (password != "TheMaster"){
        alert("Wrong Password");
    }
    else if( password == "TheMaster"){
        prompt("Welcome!");
    }
}

else(prompt("something's not working"));
