// Destractring

const course = {
    courseName : "JS Course",
    price : 400,
    courseTeacher : "Sushil"
}

console.log(course.price)  // normal way to print the value

const {courseName : cn} = course  // short way for print the value and also mention the short name for every variable

console.log(cn);


// For React js - for mentioned the variable with our props

const rValue = ({company}) => {

}

rValue(company = "SKP")