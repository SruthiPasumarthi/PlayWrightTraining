class Person{
    details(gender){
        return gender;
    }
}
class Student extends Person{
    CollegeName(name){
        return name;
    }
}

class Teacher extends Person{
    addProperties(salary,subject){
        return ("salary is " + salary + "subject is " + subject);
    }
}

class CollegeStudent extends Student{
    adding(year,major){
        return ("current year is " + year + "major is " + major);
    }
}

let TecaherDetails = new Teacher;
console.log("Teacher gender is ", TecaherDetails.details("Female"), "\
and ",TecaherDetails.addProperties(100000,"Computer Science"));

let StudentDetails = new CollegeStudent;
console.log("College name is ",StudentDetails.CollegeName("Lendi"),"\
",StudentDetails.adding(2021,"ECE"));