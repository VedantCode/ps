name_of_the_guest_array = [];

function submit() { var display_guest_array = []; for (var j = 1; j <= 4; j++) { var name_of_the_guest = document.getElementById("name_of_the_student_"+j).value; console.log(name_of_the_guest); name_of_the_guest_array.push(name_of_the_guest); } console.log(name_of_the_guest_array); var lenght_of_name_of_guest_array = name_of_the_guest_array.length; console.log(lenght_of_name_of_guest_array); for (var k = 0; k < lenght_of_name_of_guest_array; k++) { display_guest_array.push("
NAME
- "+ name_of_the_guest_array[k] + "</h4>"); console.log(display_guest_array); } console.log(display_guest_array); document.getElementById("display_name_with_commas").innerHTML = display_guest_array; var remove_commas = display_guest_array.join(" "); console.log(remove_commas); document.getElementById("display_name_without_commas").innerHTML = remove_commas; document.getElementById("su

function sorting(){
name_of_the_guest_array.sort;

}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h1>"+name_of_the_guest_array+"</h1>"

}