function tinhCanh() {
  //đầu vào
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var ketQua = "";
  var binhPhuongCanhHuyen = Math.pow(num1,2) + Math.pow(num2,2) ;
  var canGocVuong = Math.pow(num3,2)
  // xử lý
  if (num1 === num2 && num1 === num3 && num3 === num2) {
    ketQua = " đây là tam giác Đều";
  } else if (num1 === num2 && num3 !== num1 && num3 !== num2) {
    ketQua = " đây là tam giác Cân";
  }else if (canGocVuong === binhPhuongCanhHuyen) {
    ketQua = " Đây là tam giác Vuông"
  }else {
    ketQua = " đây là tam giác nào đó"
  }

  //  xuất kết quả
  document.getElementById("result").innerHTML = ketQua;
}
