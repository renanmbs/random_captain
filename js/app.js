//Variables
let players = ["Alexis","Asher","Aziz","Belal","Charly","Brandon","Charly","Christian","Cooper","Eman","Ethan",
"Gabe","Jake A.","Jake W.", "James", "Jesus", "Jorge", "Jumaah", "Kaden", "Kolton", "Riley", "Thaddeus", "Tyler"]; //Players
let generate_button = document.getElementById("generate"); //Generate button
let clean_button = document.getElementById("clean"); //Clean button
let captain1; //Captain 1 variable
let captain2; //Captain 2 variable

//Function to generate captains
function generate_captains(){

    //Generate random position
    let captain_position1 = Math.floor(Math.random() * 23);
    let captain_position2 = Math.floor(Math.random() * 23);

    //Generate captains
    captain1 = players[captain_position1];
    captain2 = players[captain_position2];

    if(captain1 == captain2){
        captain_position1 = Math.floor(Math.random() * 23);
        captain1 = players[captain_position1];
    }

    //Display results
    display_result();

}

//Function to print the results;
function display_result(){

    //Display result area
    document.getElementById("area").style.display = "block";

    //Display captains
    document.getElementById("result_1").innerHTML = captain1; //Captain 1
    document.getElementById("result_2").innerHTML = captain2; //Captain 2
}

//Function to clean results
function clean(){

    //Remove result area
    document.getElementById("area").style.display = "none";

    //Clean captains
    document.getElementById("result_1").innerHTML = ""; //Captain 1
    document.getElementById("result_2").innerHTML = ""; //Captain 2

}

//Add event listener
generate_button.addEventListener("click",generate_captains);
clean_button.addEventListener("click",clean);
