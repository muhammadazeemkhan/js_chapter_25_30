function question_1(){
   var randomNUmber = parseInt(prompt("Enter a number"));
   var roundedvalue = Math.round(randomNUmber);
   var floorValue = Math.floor(randomNUmber);
   var ceilValue = Math.ceil(randomNUmber);
   alert("Number: " + randomNUmber + "\n" + "Round off value: " + floorValue + "\n" + "Ceil value: " + ceilValue)
}


function question_2(){
    var randomNUmber = parseInt(prompt("Enter a number"));
    var roundedvalue = Math.round(randomNUmber);
    var floorValue = Math.floor(randomNUmber);
    var ceilValue = Math.ceil(randomNUmber);
    alert("Number: " + randomNUmber + "\n" + "Round off value: " + floorValue + "\n" + "Ceil value: " + ceilValue)
}



function question_3(){
   var absValue = parseInt(prompt("Enter a Number"));
   var absoluteValue = Math.abs(absValue)
   alert("The absolute value of " + absValue + " is " + absoluteValue)
}

function question_4(){
    var diceNumber = Math.floor( Math.random() * 6 ) +1;
    alert("Random dice value is: " +diceNumber)
}


function question_5(){
    var diceNumber = Math.floor(Math.random() * 2 )+1 ;
    if(diceNumber===2){
        alert("Random Coin Value is: Head" )
    }else if(diceNumber===1){
        alert("Random Coin Value is: Tail" )
        
    }
   
}

function question_6(){
    var diceNumber = Math.floor(Math.random() * 100 )+1 ;
    alert("Random Number between 1 and 100 is: " + diceNumber)

}


    function question_7(){

         }

    function question_8(){
    var diceNumber = Math.floor(Math.random() * 10 )+1 ;
    var userInputNumber = parseInt(prompt("Enter a number between 1 and 10"))

    if(diceNumber===userInputNumber){
        alert("Congratulation")
    }else if(diceNumber!==userInputNumber){
        alert("Try Again")
    }

    }