"use strict";

let array=[2,3,6,5,0];
let numSearch=13;


function sum(array, numSearch){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let result = "2+5=7"
            if ((array[i] + array[j]) === numSearch) {
                alert(result);
        }
            
     }
}

}

sum(array,numSearch);

