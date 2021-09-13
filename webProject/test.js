/******************************************
*  Author : Mohamed Samy   
*  Created On : Tue Jul 13 2021
*  File : test.js
*******************************************/


//MOSALAH
let adminId = "a7laadmin";
let adminPass = "a7lapass";

function find()
{
    
    let userId = document.getElementById("user-id").value;
    let passWd = document.getElementById("pass-wd").value;

    if (userId === adminId && passWd === adminPass){
        alert("Log in successful! Ya a7la admin ;)");
        window.open("./admin.html")

        //NAVIGATE TO ADMIN PAGE HERE
    }
    else {
    
        if (window.localStorage.getItem(userId)){
            for (let [key, value] of Object.entries(localStorage)){
                if (key == userId){
                    if (value == passWd){
                        alert("Log In successful!");
                        //NAVIGATE TO HOMEPAGE HERE
                        window.open("./main_project_.html")
                    }
                    else {
                        alert("Wrong username/password!")
                    }
                }
            }
        } 
        else {
            alert("Wrong username/password!");
        }
    }
}
function check(form) {
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        if (localStorage.getItem(user)) {
            alert("This username is already used!");
        }
        else {
            localStorage.setItem(user, pass);
            alert("User Registered successfully!");
        }
    }


/*
    var users  = ["samy" , "salah" , "omar" , "user1" , "user2" , "user3"]
    var passchk =["1234" , "4321"  , "0000" , "1111"  , "2222"  , "3333" ]
    var userId = document.getElementById("user");
    var passwd = document.getElementById("pass");
    var f1 = false
    
    function find(user , pass)
    {
            var admin = false
            var f1 = false
            var user = document.getElementById(`user`).value;
            var pass = document.getElementById(`pass`).value;
            var idx
            for(var i =0 ; i<users.length ; i++){
                if (users[i].match(user) && user != ""){
                    console.log("FOUND in Array")
                    alert("User found in Array")
                    f1 = true
                    idx = i
                    break
                }
            }
            if (f1 == false){
                console.log("NOT FOUND in array")
                alert("User not found in array")
                //return -1
            }
            if (passchk[i].match(pass) && pass != "") {
                console.log("Valid password")
                alert("Correct password")
                if (i <= 2) {
                admin = true
                console.log("Admin user")
                alert("Admin User")
                }
            }
            else{
            console.log("Wrong password")
            alert("Inorrect password")
        } 
        if (!f1) {
            chkls();
        }
        
    }
    
    function chkls() {
        var found = false;
        if (window.localStorage.getItem(userId.value)){
            for (let [key, value] of Object.entries(localStorage)){
                if (key == user.value && value == pass.value){
                    found = true;
                    break;
                }
            }
        }
        if (found) alert("Login Successfully!");
        else alert("Wrong username/password");
    }
    
    function check(form) {
        var user = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        if (localStorage.getItem(user)) {
            alert("this user is already used");
        }
        else {
            localStorage.setItem(user, pass);
            alert("User Registered successfully");
        }
    }

    */