// given a list of departments and employee ID's and employee ids and employee names, create an array structure that corresponds or correlates employee names in the appropriate department sub array

var dpt_employeeId_info = ["10001, d001", "10002, d002", "10003, d003", "10004, d001", "10005, d002"];
var employee_info = ["10001, Arnell Millhouse", "10002, Phen Thach", "10003, Alex Mendez", "10004, Troy Goode", "10005, Sylvester Nyeswa"];

var departments = [];
var tempSplitInfo = "";

// var arraySplit_dpt_employeeId_info = dpt_employeeId_info.split("");
// console.log(arraySplit_dpt_employeeId_info);



//Create a set of RELATIONAL arrays that hold employee data (employee ID, employee name and department id).
//QUASI- CODE
// Create an array withjust the department info with a forloop 

for ( var i = 0; i < dpt_employeeId_info.length; i++) {
    tempSplitInfo = dpt_employeeId_info[i].split(", "); // will return seperate arrays, between the commas between the quotes of info array
    departments.push(tempSplitInfo[1]);
    for ( var j = 0; j < departments.length; j++){
        if ( departments[i] == departments[i]){ 
        
    }
    
        
    }// the 1 reps the 1st part of split array

}

console.log(departments);