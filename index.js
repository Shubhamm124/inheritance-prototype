console.log("Welcome");

//problem 1.Create two objects parent and child. Attach methods to parent and use those methods in child object using parents prototype
//===>

const StudentPrototype = {
    calcAge(){
        console.log(2022 - this.birthYear);
    },
    initialise(fname,lname,birthYear){
        this.fname = fname;
        this.lname = lname;
        this.birthYear = birthYear;
    },
}

const student1 = Object.create(StudentPrototype);
const student2 = Object.create(StudentPrototype);

student1.initialise("Shubham","Mestry",1999);
student1.calcAge();
console.log(student1);

student2.initialise("Abhishek","Jadhav",1999);
student2.calcAge();
console.log(student2);

//problem 2.Write code to explain prototype chaining
//===>

const obj1 = {
    name : "Avinash Shinde",
    getName : function(){
      return this.name;
    },
    getRoll : function(){
        return this.roll_no;
    }
}
const  obj2 = {
    roll_no : 49,
}
obj2.__proto__ = obj1;
console.log(obj2);
const obj3 = {
    class : "10th"
}
obj3.__proto__ = obj1;
console.log(obj3);

//problem 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
//===>

Array.prototype.sum = function(){
    return this.reduce((accu,curr) => accu+curr);
}


const arr1 = [1,2,3,4,5,6];
console.log(arr1.sum()); 

const arr2 = [20,30,425,785,12];
console.log(arr2.sum()); 

const arr3 = [25,25,25,25];
console.log(arr3.sum()); 

const arr4 = [45,58,69,75,32];
console.log(arr4.sum()); 

const arr5 = [222,333,455,74];
console.log(arr5.sum()); 


//problem 4.Write a JavaScript function to retrieve all the names of object's own and inherited properties.
//===>

const obj4 = {
    name : "Ajit Kumar Gupta"
}

const obj5 ={
    location : "Bandra",
    __proto__ : obj4
}
const keys = Object.keys(obj5);
console.log(keys);