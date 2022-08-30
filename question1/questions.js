
export const A = () => {
    const mat = [`Köttbullar`, `Pasta`, `Ris`, `Potatis`]
    return mat   
}


export const B = (input) => {
//Alternative 1:
//     let result =[];     //skapa new array
//  for (const value of input) {
//       result.push(value * 2);
//     }
//    return result;
// }

//Alt2:
let result=[]
input.map((item)=> result.push (item *2))
return result
}


export const C = (input) => {
        let myArray = input.map((car) => `The type is ${car.type} and weight is ${car.weight}`)
        return myArray;
        }

               
export const D = (input) => {
    const myArr = input.flat();
    return myArr
}



export const E = (input) => {
    let result =[];
    for (const value of input) {
        if (value % 2===0)
        result.push(value);
      }
     return result;
}


export const F = (input) => {
    let sum = input.reduce((previousvalue, input) => {
        return previousvalue += input
    },0)
    return sum;
}

export const G = (input1, input2) => {
    let myarray = input1.concat(input2)   //koppla input1 till input2
    let mynew = myarray.toString();
   const search = ","
   const replace = "-"
   let mynewarr  = mynew.split(search).join(replace)
   
   return mynewarr
}

export const H = (input) => {
    input.pop()
    input.shift()
return input;
}
