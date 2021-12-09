
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

const compareNumbers = function(){
    
    compareNumbersNode = document.getElementById("bingo-board")
    for (i=0; i<compareNumbersNode.length; i++){
        if(compareNumbersNode[i].innerText === randomNumbers()){
            compareNumbersNode[i].classList.add("selected")
            console.log(compareNumbersNode[i])
        }

    }
}

