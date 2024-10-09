//arrays

const students = ["Ram", "Laxman", "Bharat", "Shatrughn"]
console.log(students);
console.log(students.length);

console.log(students[0]);//ram
console.log(students[1]);//laxman
console.log(students[2]);//bharat
console.log(students[3]);//shatrughn
console.log(students[4]);//undefined

//update value
students[0] = "Shri Ram";
console.log(students[0]);

//students = [1, ,2];//wrong operation

//push operation -> add element at end
students.push("Kesari")
console.log(students);
console.log(students.length);

//can also add multiple
students.push("Sugreev", "Vibhishan", "Jaamvanth")
console.log(students);
console.log(students.length);

const random = ["jatin", 'j', 23, "🐼", true];
console.log(random);

console.log(random.indexOf("jatin"));
console.log(random.indexOf("rawat"));


//pop => remove last element

students.pop();
students.pop();
console.log(students);


//reverse
students.reverse();
console.log(students);
