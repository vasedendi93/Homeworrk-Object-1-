console.log("Connected");
// Homework

// Create 3 object templates.Academy, Student and Subject.The structure should be:
// Academy
//     * Name - string
//     * Students - array of Students
//         * Subjects - array of Subjects
//             * Start - Date when it starts
//                 * End - Date when it ends
//                     * NumberOfClasses - number of subjects * 10, not settable
//                         * PrintStudents - method that prints all students in console
//                             * PrintSubjects - method that prints all subjects in console

// Subject
//     * Title - string
//     * NumberOfClasses - default 10, not settable
//         * isElective - boolean
//         * Academy - Academy object
//             * Students - array of Students
//                 * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number.The number can't be smaller than 3.

// Student
//     * FirstName - string
//     * LastName - string
//     * Age - number
//     * CompletedSubjects - emptyArray as default, not settable
//         * Academy - [null as default, not settable]
//         * CurrentSubject - null as default, not settable
//             * StartAcademy - accepts Academy object that it sets to the Academy property of the student
//                 * StartSubject - accepts Subject object and adds it to the CurrentSubject property
//  but only if the student has an Academy object in the Academy property and that subject exists in the academy.
// If not, give error in console and do not set the CurrentSubject property

// // ## Bonus Tasks
// // Make the functions StartAcademy and StartSubject dynamic.
// // * StartAcademy - When the student calls StartAcademy, 
// the student should also be added to the Academy property Students(The academy that he is starting)
// //     * StartSubject - When the student calls StartSubject 
// the student should also be added to the Subject property Students(The subject that he is starting).
// If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject





function Academy (name , students,subjects ,start,end,numberOfClasses = 10) {
    this.name = name;
    this.students = students ;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = numberOfClasses;
    this.printStudents = () => { console.log(`Name of all students: ${students}`)};
    this.printSubject = () => { console.log (`Name of all subject: ${subjects}`)};
};


let academyOfStudents = new Academy("Vase",["Vase","Bojan","Martina","Stefan"],["Biologija","Geography","Math"],"13.11.2021","25.12.2022",10)
// [new Subjcet(("JavaScript",5,false,academyOfStudents.name,academyOfStudents.students))],["Biologija","Geography","Math"],"13.11.2021","25.12.2022",10)
console.log(academyOfStudents);
academyOfStudents.printStudents();
academyOfStudents.printSubject();


// Subject
//     * Title - string
//     * NumberOfClasses - default 10, not settable
//         * isElective - boolean
//         * Academy - Academy object
//             * Students - array of Students
//                 * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number.The number can't be smaller than 3.


function Subjcet (title,numberOfClasses,isElective,academy,students) {
   this.title = title;
   this.numberOfClasses=numberOfClasses; // num
   this.isElective=isElective; // bollean
   this.academy=academy // arr object
   this.students=students // arr students

this.overRideClasses = (number) => {
    if(number >= 3){
        this.numberOfClasses = number;
        console.log(`New numbe of class is ${number}`)
    }else{
        console.log(`Class can't be this small`)
    }
};

};

let academyofSubject = new Subjcet ("JavaScript",5,false,academyOfStudents.name,academyOfStudents.students);

console.log(academyofSubject);


// Student
//     * FirstName - string
//     * LastName - string
//     * Age - number
//     * CompletedSubjects - emptyArray as default, not settable
//         * Academy - [null as default, not settable]
//         * CurrentSubject - null as default, not settable
//             * StartAcademy - accepts Academy object that it sets to the Academy property of the student
//                 * StartSubject - accepts Subject object and adds it to the CurrentSubject property
//  but only if the student has an Academy object in the Academy property and that subject exists in the academy.
// If not, give error in console and do not set the CurrentSubject property

function Student  (firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.completedSubject = [];
    this.academy = null;
    this.currentsubject = null;
    this.startAcademy = (academy) => {
        this.firstName= academy.students.push(this.firstName);
        this.academy=academy;
        return console.log(this.academy);

    };
    // this.startSubject = subjects.students.push(this.firstName);
    for(let i = 0; i < this.academy.subjects.length; i++){
        if(this.academy != null && this.academy.subjects[i] === subjecttt){
            this.completedSubject = subjecttt;
            return console.log(`New subject started ${subjecttt}`)
        };
    };
    console.log("Incorrect input")
}

let firstStudent = new Student("Bob","Bobovski",25);
firstStudent.startAcademy(academyOfStudents);
