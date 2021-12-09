
window.onload= function(){
    bingoNumbers()
}

const bingoNumbers = function(){
    for (i=1; i<=76; i++){
        const bingoNumbersNode = i
        const newNumber = document.createElement("div")
        newNumber.classList.add("bingo-numbers")
        newNumber.innerText = bingoNumbersNode 
        bingoBoardNumbersNode = document.getElementById("bingo-board")
        bingoBoardNumbersNode.appendChild(newNumber) 
    }
}


const randomNumbers = function(){
    let randomNum = Math.floor((Math.random()*75)+1)
    let randomNumber =""+  randomNum
    return randomNumber
}

const userBoard = function(){
    
    const userNumber = randomNumbers()
    const userBoardNode = document.createElement("div")
    for (i=1; i<=24; i++){    
        userBoardNode.classList.add("bingo-numbers")
        userBoardNode.innerText = userNumber 
        userBoardNumbersNode = document.getElementById("user-board")
        userBoardNumbersNode.appendChild(userBoardNode) 
    }
}




const compareNumbers = function(e){
    
    compareNumbersNode = document.querySelectorAll("#bingo-board div")
    for (i=0; i<compareNumbersNode.length; i++){
        if(compareNumbersNode[i].innerText === randomNumbers()){
            compareNumbersNode[i].classList.add("selected")
            console.log(compareNumbersNode.length)
        }

    }
}



