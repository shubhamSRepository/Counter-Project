
/* "countInterval" variable is declared outside of function "startCounter" so that everytime we press 
Start Counter button the previous counter remains continued. We are doing this by not creating countInterval 
variable again and again when we "startCounter" function invokes by clicking on Start Counter button*/
var countInterval;

function startCounter() {
    var number = parseInt(document.getElementById("number").value);

    // this condition invokes when no input is provided by user
    if (isNaN(number)) {
        alert("please enter a number");
        clearInterval(countInterval); // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }

    // this condition invokes when input number provided by user is less than 1 or greater than 9
    if (number < 1 || number > 9) {
        alert("number is out of range");
        clearInterval(countInterval);// This is important for the condition when a counter is running and you entered a out of range input for a new counter
        return;
    }

    var currentNo = document.getElementById("current");
    var nextNo = document.getElementById("next");
    var count = 0;

    
    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);

     // Clears the previous interval that was running
    clearInterval(countInterval); 

    countInterval=setInterval(function(){
        if(count===number){
            clearInterval(countInterval);
            alert("couter has stoped");
            return;
        }
        increaseCounter(currentNo,nextNo);
        count++;
    },1000)
}


function resetNumbers(currentNo,nextNo){
    currentNo.innerText=0;
    nextNo.innerText=1;
}


function increaseCounter(currentNo,nextNo){
    nextNo.classList.add("animate");

    setTimeout(function(){
        currentNo.innerText=nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText)+1;

    },500);
}
