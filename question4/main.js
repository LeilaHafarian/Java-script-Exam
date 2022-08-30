const theForm = document.getElementById(`myForm`);  //koppla 
const personContainer = document.getElementById(`registrations`);

theForm.addEventListener("submit",(e)=> {
    e.preventDefault();


    const Förnamn = theForm[0].value;
    const Efternamn = theForm[1].value;
    const Ålder = theForm[2].value;
    

    const newP = document.createElement("p");
    newP.textContent =`${Förnamn} ${Efternamn}- ${Ålder} år`;
    
    personContainer.appendChild(newP);
     document.getElementById(`myForm`).reset();
});
