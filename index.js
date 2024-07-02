
function oddsVsEvens(num) {
  // write your code here
   let oddSum = 0;
   let evenSum = 0;
   const numString = Math.abs(num).toString()
   //console.log(numString);
   for (const number of numString){
    const digit = parseInt(number);
    if (digit % 2 === 0){
      evenSum += digit
    } else {
      oddSum += digit
    }
   }
   if (oddSum > evenSum){
    return `odd`
   } else if (evenSum > oddSum){
    return `even`
   } 
   return `equal`
}
console.log(oddsVsEvens(54870));