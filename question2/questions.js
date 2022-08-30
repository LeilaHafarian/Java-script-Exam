// Funktionen tar in en
// parameter med namn `input` som är en sträng. Om input är null eller
// odefinierat ska strängen `'unknown'` returneras. Om strängens längd är
// tre eller kortare ska strängen `'too short'` returneras. Annars ska
// input-värdet returneras.

export const A = (input) => {
 if (input === null || input === undefined){
     return `unknown`
 }
 if (input.length <= 3) {
    return `too short`;
 }
 return input
}

// Funktionen tar in två
// parametrar med namn `command` och `value` där `command` är en sträng
// och `value` är en siffra. Skriv kod som utför olika operationer på
// värdet i `value` beroende på kommandot i `command` och returnerar
// resultatet. Om `command` är `'double'` ska värdet i `value` dubblas.
// Om `command` är `'inc'` ska värdet i `value` ökas med ett. Om
// `command` är `dec` ska värdet i `value` minskas med ett.

export const B = (command, value) => {
if (command===`double`){
    return value * 2
}
if (command=== `inc`) {
   return value + 1
}
if (command=== `dec`) {
    return value - 1
}
}



//  Funktionen tar in tre
// parametrar med namn `func`, `value1` och `value2`. `func` är en
// funktion som i sin tur tar in två parametrar och returnerar ett värde.
// `value1` och `value2` kan vara vad som helst. Skriv kod som anropar
// funktionen i `func` och returnerar värdet som `func` returnerar.
// `func` ska anropas med `value1` och `value2` som argument. Om `value1`
// eller `value2` inte är en siffra ska strängen `'error'` returneras.
export const C = (func, value1, value2) => {
if (typeof value1 === "number" && typeof value2==="number"){
    return func(value1, value2)
}
return `error`

}
