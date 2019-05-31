var dpt_employeeId_info = ["10001, d001", "10002, d002", "10003, d003", "10004, d001", "10005, d002"];
var employee_info = ["10001, Arnell Millhouse", "10002, Phen Thach", "10003, Alex Mendez", "10004, Troy Goode", "10005, Sylvester Nyeswa"];

var departments = [];
var employeeId = [];
var info_Split = [];
for ( var i = 0; i < dpt_employeeId_info.length; i++){
    info_Split.push(dpt_employeeId_info[i].split(", "));
    departments.push(info_Split[i][1]);
}

departments.sort();

departments = [ ...new Set(departments)];

for (i = 0; i < departments.length; i ++){
    employeeId.push([]);
}


console.log(employeeId);
console.log(departments);

