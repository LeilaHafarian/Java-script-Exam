// Skriv din lösning i funktionen med namn `A`. Skriv kod som returnerar
// en promise som alltid rejectas med värdet 333.
export const A = () => {
    return Promise.reject(333)
}


// ## B (3p)
// Skriv din lösning i funktionen med namn `B`. Funktionen tar in en
// parameter med namn `input`. Värdet i `input` kommer alltid vara en
// promise med ett värde som är en siffra. Skriv kod som kollar på värdet
// i promise:en i `input` och returnerar en ny promise. Den nya
// promise:en ska resolva till halva värdet av `input`:s värde.
export const B = (input) => {
    return input.then((num) => {
        return num / 2
    })
}


// ## C (3p)
// Skriv din lösning i funktionen med namn `C`. Funktionen tar in en
// parameter med namn `input`. Värdet i `input` kommer alltid vara en
// promise med ett värde som är en siffra. Skriv kod som kollar på värdet
// i promise:en i `input` och returnerar en ny promise. 
// Den nya promise:en ska resolva med `'high'` om värdet är större än 10,
// `'average'` om värdet är 10 eller mindre och större än 0 
// och `'low'`om värdet är 0 eller lägre.

export const C = (input) => {
    return(input)
    .then(value => {
        if (value >10 ) {
            return `high`
        }
        if (value ===10 || (value >0 && value <10)){
              return `average`
        }
          
        if (value <= 0 ) {
            return `low`
        }
    });
}


// ## D (3p)
// Skriv din lösning i funktionen med namn `D`. Funktionen tar in en
// parameter med namn `input`. Värdet i `input` kommer alltid vara en
// promise som rejectas med ett sträng-värde. Skriv kod som
// hanterar reject:en och returnerar en ny promise som resolve:ar. Den
// nya promise:en ska använda värdet i den reject:ade promise:en 
//för att bestämma vilket värde den ska resolve:a med.
// Om värdet är `'false-negative'` ska den resolve:a med `true` annars med `false`.

export const D = (input) => {
 return(input).catch(value =>{
     if (value===`false-negative`){
         return true
     }
     return false

 })
}


// ## E (3p)
// Skriv din lösning i funktionen med namn `E`. Funktionen tar in två
// parameter med namn `input1` och `input2`. Värdet i både `input1` och
// `input2` kommer alltid vara en promise som resolvar till en siffra.
// Skriv kod som väntar tills alla promises är resovle:ade och sen
// multiplicera värdena i `input1` och `input2` och returnera produkten i
// en ny promise.
export const E = (input1, input2) => {
  //?????????
    
 }
