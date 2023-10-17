// SHOW MAJOR 
const input_code = "ENG"
let result_name = ""
let result_dept = ""

if(input_code == "BIOL"){
    result_name = "Biology"
    result_dept = "Science Bld #310"
}else if(input_code == "CSCI"){
    result_name = "Computer Science"
    result_dept = "Sheppard Hall #314"
}else if(input_code == "ENG"){
    result_name = "English"
    result_dept = "Kerr Hall #201"
}else if(input_code == "HIST"){
    result_name = "History"
    result_dept = "Kerr Hall #114"
}else if(input_code == "MKT"){
    result_name = "Marketing"
    result_dept = "Westly Hall #310"
}else{
    result_name = "INVALID CODE"
    result_dept = "INVALID CODE"
}

console.log(result_name, result_dept)