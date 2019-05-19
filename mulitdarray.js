// given a list of departments and employee ID's and employee ids and employee names, create an array structure that corresponds or correlates employee names in the appropriate department sub array

var dpt_employeeId_info = ["10001, d001", "10002, d002", "10003, d003", "10004, d001", "10005, d002"];
var employee_info = ["10001, Arnell Millhouse", "10002, Phen Thach", "10003, Alex Mendez", "10004, Troy Goode", "10005, Sylvester Nyeswa"];

var departments = [];
var employeeId = [];
var tempSplitInfo = [];

// var arraySplit_dpt_employeeId_info = dpt_employeeId_info.split("");
// console.log(arraySplit_dpt_employeeId_info);



//Create a set of RELATIONAL arrays that hold employee data (employee ID, employee name and department id).
//QUASI- CODE
// Create an array withjust the department info with a forloop 
// using push so we don't have to reapeat code // DRY = Don't Repeat Yourself
for ( var i = 0; i < dpt_employeeId_info.length; i++) {
    tempSplitInfo.push(dpt_employeeId_info[i].split(", ")); // will return seperate arrays, between the commas between the quotes of info array
    departments.push(tempSplitInfo[i][1]); //the 1 reps the 1st part of split array
}
departments.sort();

departments = [...new Set(departments)]; // de-dups the array, and creates new array with unique elements

for ( i = 0; i < departments.length; i ++ ){ // add empty sub arrays to the empty employeeId array
    employeeId.push([]);
 
}
console.log(employeeId); // this wil show the empty arrays
for ( i = 0;  i < tempSplitInfo.length; i++) {
    // employeeId.splice(tempSplitInfo[i][1]), 0, tempSplitInfo[i][0] );
    console.log(tempSplitInfo[i][1]);
    console.log(departments.indexOf(tempSplitInfo[i][1]));
    employeeId[departments.indexOf(tempSplitInfo[i][1])].push(tempSplitInfo[i][0]);
}

// console.log(tempSplitInfo);
// console.log(departments);
console.log(employeeId); // this will show the filled arrays


 