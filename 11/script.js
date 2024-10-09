const students = ["Jon", "Rob", "Arya", "Sansa", "Bran"];

// function print(n) {
//     console.log(n);
    
// }

// students.forEach(print);
//foreach does not return any thing
students.forEach((val) => console.log(val))

//.map returns a new array
students.map((val) => console.log(val));


const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//return new array with double values

function double(val) {
    return val*2;
}

//foreach

let newArray1 = nums.forEach(double);
console.log(newArray1); //gives undefined


let newArray2 = nums.map(double);
console.log(newArray2); // returns array


//find

let ans1 = nums.find((val) => val === 4);
console.log(ans1);//prints 4, undefined if val not found

//findIndex
let ans2 = nums.findIndex((val) => val === 4);
console.log(nums[ans2]);//returns index


//filter
const newArr = nums.filter((val) => val%2==0);
console.log(newArr);

//slice
const newArr1 = nums.slice(1, 4);//gives element form i to j -1
console.log(newArr1);//1, 2, 3


//splice
const newArr2 = nums.splice(1, 4);
console.log(newArr2);//[1, 2, 3, 4]
console.log(nums);//[0, 5, 6, 7, 8, 9]

