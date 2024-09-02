
const columns = document.querySelectorAll("#column");
const imagesDiv = document.getElementById("images");
const images = document.querySelectorAll("#image");
const myPTexts = document.querySelectorAll("p");
const followBtns = document.querySelectorAll("#followBtn");
const hideBtns = document.querySelectorAll("#hideBtn");

followBtns.forEach((element, index)=> {
    element.addEventListener("click", event => {
        element.style.backgroundColor = "red";
        if(event.target.textContent === "Follow"){
            event.target.textContent = "Following";
            window.alert(`You have followed ${myPTexts[index].textContent}`);
        }
        else{
            event.target.textContent = "Follow";
            window.alert(`You have unfollowed ${myPTexts[index].textContent}`);
        }
    });
});

hideBtns.forEach((element, index) => {
    element.addEventListener("click", event =>{
        element.style.backgroundColor = "green";
        if(event.target.textContent === "Hide"){
            event.target.textContent = "Show";
            columns[index].style.visibility = "hidden";
            element.style.visibility = "visible";
        }
        else{
            event.target.textContent = "Hide";
            columns[index].style.visibility = "visible";
        }
    });
});

let tx = 0;

function showNextImg(){
    if(tx > -115){
        tx -= 5;
    }
    else{
        tx = 0;
    }
    imagesDiv.style.transform = `translatex(${tx}%)`;
}

function showLastImg(){
    if(tx < 0){
        tx += 5;
    }
    else{
        tx = -115;
    }
    imagesDiv.style.transform = `translatex(${tx}%)`;
}
