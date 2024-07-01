
/*
function date_formating(date) {
  const reg = /\d{2}-\d{2}-\d{4}/;
  const reg2 = /\d{4}-\d{2}-\d{2}/;
  if (reg.test(date)) {
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  } else if (reg2.test(date)) {
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  } else {
    return "تنسيق غير صالح للتاريخ";
  }
}


function isEmail(email) {
  // write your code here
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}


console.log(isEmail("example@com")); // true
*/

/*
function date_format(date) {
  // write your code here
  const dateArray = new Date(date)
  const d1 = dateArray.toLocaleDateString();
  const d2 = dateArray.toISOString().split('T')[0];
  const d3 = `${dateArray.getDate()}-${dateArray.getMonth() + 1}-${dateArray.getFullYear()}`;
 return {
  d1,
  d2,
  d3
 } 
}
console.log(date_format("1-1-2020"))

function formatDate(dateString) {
  const date = new Date(dateString);

  // تنسيق النص بالتاريخ القياسي (ISO 8601)
  const isoFormat = date.toISOString().split('T')[0];

  // تنسيق النص بتاريخ اليوم (شهر/يوم/سنة)
  const localFormat = date.toLocaleDateString();

  // تنسيق النص بتاريخ اليوم (يوم-شهر-سنة)
  const customFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  return {
      isoFormat,
      localFormat,
      customFormat
  };
}

console.log(formatDate("1-1-2020"))

*/

function math_expr(expr) {
  // write your code here
 return  /\d([-+_*/])\d/.test(expr)
}

console.log(math_expr("5-5"));

function isMathExpression(input) {
  try {
      // قم بتحويل القيمة النصية إلى تعبير رياضي باستخدام eval()
      eval(input);
      return true;
  } catch (error) {
      return false;
  }
}

// استخدم الدالة للتحقق من القيمة النصية

console.log(isMathExpression("5-6"));


function raduis(circumference) {
  // write your code here
   return circumference / (3.14 * 2)
}
console.log(raduis(13.5))


function find_prefix(words, text) {
  return words.length === text
  } 

// أمثلة على استخدام الدالة



// أمثلة على استخدام الدالة
console.log(find_prefix(['reassemble', 'remainder', 'room', 'Receive'], "re"))

let number = 1
while (number < 6 ) {
    console.log(number)
    number += 1
}

function myFunc(number) {
  console.log(number * number)
  return number 
}
myFunc(2) 


const square = function(number) {
  console.log(number * number)
 }
 square(2)


 function printYourName(name) {
  return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)


function myFunc(number) {
  console.log(`${number} x ${number} = ` + number * number)
  return number * number
}
myFunc(2)




