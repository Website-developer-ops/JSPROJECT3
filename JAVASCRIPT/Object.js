
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const myBtn = document.querySelector(".myBtn");
const objectsDiv = document.querySelector(".objects");

const myDivs = document.createElement("div");
myDivs.classList.add("myTexts");
objectsDiv.append(myDivs);

let fullName ;
let phoneNumber ;
let emailId ;
let myObject ;

function updateInputs(){
    fullName = inputs[0].value.trim();
    phoneNumber = inputs[1].value;
    emailId = inputs[2].value.trim();
    myObject = {name: fullName, phone: phoneNumber, email: emailId};
}

function showObjects(){
    const myDiv = document.createElement("div");
    myDivs.append(myDiv);

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p3.style.marginBottom = "30px";

    p1.textContent = myObject.name;
    p2.textContent = "+" + myObject.phone;
    p3.textContent = myObject.email;

    myDiv.append(p1);
    myDiv.append(p2);
    myDiv.append(p3);
}

myBtn.onclick = function(){
    updateInputs();

    if(fullName.length < 6 || fullName.length > 20){
        window.alert("Full name must be between 10 - 20 characters long");
    }
    else if(phoneNumber.length !== 12){
        window.alert("Phone number must be 12 characters long")
    }
    else if(emailId.length < 15 || emailId.length > 30 || !(emailId.includes("@"))){
        window.alert("Email must be between 15-30 characters");
    }
    else{
        // window.alert("Netwwork error 404 NOT found");
        showObjects();
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
    }
}

