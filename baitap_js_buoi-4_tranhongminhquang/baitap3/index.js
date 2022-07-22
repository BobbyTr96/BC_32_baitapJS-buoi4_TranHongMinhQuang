function dem() {
    // đầu vào
var num1 = document.getElementById("num1").value*1;
var num2 = document.getElementById("num2").value*1;
var num3 = document.getElementById("num3").value*1;
var count = "" ;

    // xử lý
if (num1 % 2 === 0 && num2 % 2 ===0 && num3 % 2 === 0){
    count = " có 3 số chẵn"
}else if (num1 % 2 === 0 && num2 % 2 !==0 && num3 % 2 === 0){
    count = " có 2 số sẵn ,  1 số lẻ "
}else if (num1 % 2 === 0 && num2 % 2 ===0 && num3 % 2 !== 0) {
    count = " có 2 số sẵn ,  1 số lẻ "
}else if (num1 % 2 !== 0 && num2 % 2 ===0 && num3 % 2 === 0) {
    count = " có 2 số sẵn ,  1 số lẻ "
}else if (num1 % 2 !== 0 && num2 % 2 !==0 && num3 % 2 === 0) {
    count = " có 1 số sẵn ,  2 số lẻ "
}else if (num1 % 2 === 0 && num2 % 2 !==0 && num3 % 2 !== 0) {
    count = " có 1 số sẵn ,  2 số lẻ "
}else if (num1 % 2 !== 0 && num2 % 2 ===0 && num3 % 2 !== 0) {
    count = " có 1 số sẵn ,  2 số lẻ "
}else {
    count = " có 0 số chẵn , 3 số l"
}

   


        // xuất giá trị
document.getElementById("result").innerHTML = count ;
}