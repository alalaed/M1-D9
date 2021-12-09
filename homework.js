
window.onload= function(){
    bingoBoardNumbers()
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
   






