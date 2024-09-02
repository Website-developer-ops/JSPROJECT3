
const  myWork = document.getElementById("myWork");
const submitBtn = document.getElementById("submitBtn");
const display = document.getElementById("display");

function checkWork(){
    let work = myWork.value;
    if(work.length < 10){
        window.alert("You must enter a valid work routine");
    }
    else if(work.length >= 10){
        myText = document.createElement("p");
        display.append(myText);
        myText.textContent = work;
        myWork.value = "";
    }
    else{
        window.alert("Network error 404 NOT found");
    }

    deleteMyP();
}

function deleteMyP(){
    const myPTexts = document.querySelectorAll("p");
    myPTexts.forEach(element => {
        element.addEventListener("click", event => {
            event.target.style.display = "none";
        });
    });
}

