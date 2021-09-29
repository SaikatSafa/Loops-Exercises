//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
for (let i = 0; i <= 10; i++) {
  let j = i * 9;
  console.log(i + " * " + " 9 " + " = " + j);
}
console.log("")

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let i = 0;
while (i <= 50) {
  console.log(i);
  i += 5;
}
console.log("")

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      }
    }
  }
}
console.log(findDuplicate([2, 7, 5, 9, 8, 7]));
console.log("")

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
function assignGrade() {
  for (let score = 60; score <= 100; score++) {
    if (score < 70) {
      console.log("For " + score + ", you got a D.");
    }
    else if (score < 80) {
      console.log("For " + score + ", you got a C.");
    }
    else if (score < 90) {
      console.log("For " + score + ", you got a B.");
    }
    else if (score <=100) {
      console.log("For " + score + ", you got an A.");
    }
  }
}

assignGrade();
console.log("");
