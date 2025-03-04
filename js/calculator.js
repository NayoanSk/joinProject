

let displays = document.getElementById("displays");
let allBtns = document.querySelectorAll(".btns button");
for( let i = 0; i < allBtns.length; i++){
    let buttn = allBtns[i];
    buttn.addEventListener("click", ()=>{
        let test = buttn.innerText;
        if(test === "="){
            displays.value = eval(displays.value);
        }
        else if(test === "AC"){
            displays.value = "";
        }
        else{
            displays.value = displays.value + test;
        }
    });
}
///
let dates = new Date();
console.log(dates.toString());
console.log(dates.getMilliseconds());
console.log(dates.getMinutes());
let hours = dates.getHours();
let min = hours*60;
console.log(min);
console.log(dates.getTime());
console.log(dates.getFullYear());
console.log(dates.getMonth());
console.log(dates.getTimezoneOffset());
console.log(dates.toLocaleString());
console.log(dates.toLocaleDateString());
console.log(dates.toLocaleTimeString());
///
let playerProfileForm = document.getElementById("playerProfileForm");
playerProfileForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let playerName = e.target.playerName.value;
    let playerInform = e.target.playerInform.value;
    let playerDescription = e.target.playerDescription.value;
    let playerImage = e.target.playerImage.value;
    let playerDetails = e.target.playerDetails.value;
    let TotalInfo = {
        playerName,
        playerInform,
        playerDescription,
        playerImage,
        playerDetails
    }
    let playerCode = playerFunc(TotalInfo);
    let roots = document.getElementById("root");
    roots.innerHTML += playerCode;
    //making the input field empty after submitting data
    e.target.playerName.value = "";
    e.target.playerInform.value = "";
    e.target.playerDescription.value = "";
    e.target.playerImage.value = "";
    e.target.playerDetails.value = "";
});
function playerFunc(allInfor){
    let {playerImage, playerName, playerInform, playerDescription, playerDetails} = allInfor;
    let playerInformation = `
    <div class="products">
    <img src="${playerImage}" alt="">
    <p>${playerDescription.length >= 40 ? playerDescription.slice(0, 40) + " Read More ..." : playerDescription}</p>
    <h2>${playerName}</h2>
    <h3>${playerInform}</h3>
    <a href="${playerDetails}" target = "_blank"><button>Details</button></a>
    </div> 
    `;
    return playerInformation;
}
// function readMore(){
//     alert ("the text is over 40 char");
// }
//<p>${playerDescription.length >= 40 ? readMore() + " ... " : playerDescription}</p>
// let testingform = document.getElementById("testingform");
// testingform.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let texting = e.target.texting.value;
//     if(texting.length > 40){
//         texting = texting.slice(0, 40);
//         console.log(texting);
//     }
//     else{
//         texting = texting;
//         console.log(texting);
//     }
//     e.target.texting.value = "";
// });


