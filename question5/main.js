import calculator from "./calculator.js";

const output = document.getElementById("output");
const inputs = document.getElementById("inputs");   

inputs.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
        let value = parseInt(e.target.textContent)
        if(value){
            output.textContent = calculator.addNumber(value)

        }
        else{
            calculator.setOperator(e.target.textContent)
        }
       
    }
       
});

