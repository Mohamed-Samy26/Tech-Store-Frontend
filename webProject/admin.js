let change = false;
let change2 = false;
let change3 = false

function myFunction() {
    //background

    if (!change) {

        change = true;

        document.body.style.backgroundImage = "url('high-angle-online-shopping-with-copy-space_23-2148625683.jpg')";

        document.body.style.backgroundRepeat = "no-repeat";

        document.body.style.backgroundSize = "cover";

    } else {
        document.body.style.backgroundImage = "url('sec-1.jpg')";

        document.body.style.backgroundRepeat = "no-repeat";

        document.body.style.backgroundSize = "cover";

        change = false;
    }

}


function myFunction2() {

    //font size

    if (!change2) {

        change2 = true;

        document.getElementById("a").style.fontSize = "180%";
    } else {
        change2 = false;

        document.getElementById("a").style.fontSize = "300%";
    }
}


function myFunction3() {

    if (!change3) {

        document.getElementById("a").style.fontFamily = "'Sofia', sans-serif";

        change3 = true;
    } else {

        document.getElementById("a").style.fontFamily = "'Audiowide', sans-serif";

        change3 = false;
    }
}


function myFunction4() {

    window.open("./main_project_.html");//link

}

function myFunction5() {

    //login page
    window.open("./Account.html");//link

}
function myFunction6() {

    //login page
    window.open("./index.html");//link

}
