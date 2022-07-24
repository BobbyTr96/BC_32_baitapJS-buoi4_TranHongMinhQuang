function docSo() {
  //đầu vào
  var so = document.getElementById("so").value * 1;

  // xử lý
  var hangTram = Math.floor(so / 100);
  var hangChuc = Math.floor((so % 100) / 10);
  var hangDonVi = so % 10;

  //   var docHangTram = hangTram + " Trăm ";
  //   var docHangChuc = hangChuc + " Mươi ";

  if (hangTram === 1) {
    hangTram = " một trăm ";
  } else if (hangTram === 2) {
    hangTram = " hai trăm ";
  } else if (hangTram === 3) {
    hangTram = " ba trăm ";
  } else if (hangTram === 4) {
    hangTram = " bốn trăm ";
  } else if (hangTram === 5) {
    hangTram = " năm trăm ";
  } else if (hangTram === 6) {
    hangTram = " sáu trăm ";
  } else if (hangTram === 7) {
    hangTram = " bảy trăm ";
  } else if (hangTram === 8) {
    hangTram = " tám trăm ";
  } else if (hangTram === 9) {
    hangTram = " chín trăm ";
  }

  if (hangChuc === 0 && hangDonVi === 1) {
    hangChuc = " lẻ ";
  } else if (hangChuc === 1) {
    hangChuc = " mười  ";
  } else if (hangChuc === 2) {
    hangChuc = " hai mươi ";
  } else if (hangChuc === 3) {
    hangChuc = " ba mươi ";
  } else if (hangChuc === 4) {
    hangChuc = " bốn mươi ";
  } else if (hangChuc === 5) {
    hangChuc = " năm mươi ";
  } else if (hangChuc === 6) {
    hangChuc = " sáu mươi ";
  } else if (hangChuc === 7) {
    hangChuc = " bảy mươi ";
  } else if (hangChuc === 8) {
    hangChuc = " tám mưới ";
  } else if (hangChuc === 9) {
    hangChuc = " chín mươi";
  }

  if (hangDonVi === 0) {
    hangDonVi = "";
  } else if (hangDonVi === 1) {
    hangDonVi = " một  ";
  } else if (hangDonVi === 2) {
    hangDonVi = " hai ";
  } else if (hangDonVi === 3) {
    hangDonVi = " ba  ";
  } else if (hangDonVi === 4) {
    hangDonVi = " bốn  ";
  } else if (hangDonVi === 5) {
    hangDonVi = " năm  ";
  } else if (hangDonVi === 6) {
    hangDonVi = " sáu  ";
  } else if (hangDonVi === 7) {
    hangDonVi = " bảy  ";
  } else if (hangDonVi === 8) {
    hangDonVi = " tám  ";
  } else if (hangDonVi === 9) {
    hangDonVi = " chín";
  }
  //xuất kết quả
  document.getElementById("result").innerHTML = hangTram + hangChuc   + hangDonVi ;




  if (so > 999) {
    alert("không xác định được hàng trăm");
    alert("không xác định được hàng chục");
    alert("Không xác định được hàng đơn vị");
  } else if (so < 10) {
    alert("Số hàng trăm không xác định");
    alert("Số hàng chục không xác định");
    document.getElementById("result").innerHTML = hangDonVi ;
  } else if (
    so === 100 ||
    so === 200 ||
    so === 300 ||
    so === 400 ||
    so === 500 ||
    so === 600 ||
    so === 700 ||
    so === 800 ||
    so === 900
  ) {
    alert("số hàng chục và hàng đơn vị không xác định");
    document.getElementById("result").innerHTML = hangTram ;
  } else if (
    so === 10 ||
    so === 20 ||
    so === 30 ||
    so === 40 ||
    so === 50 ||
    so === 60 ||
    so === 70 ||
    so === 80 ||
    so === 90
  ) {
    alert("Số hàng trăm không xác định");
    alert("Số hàng đơn vị không xác định");
    document.getElementById("result").innerHTML = hangChuc ;
  }else if (
    so < 100 &&
    so !== 10 &&
    so !== 20 &&
    so !== 30 &&
    so !== 40 &&
    so !== 50 &&
    so !== 60 &&
    so !== 70 &&
    so !== 80 &&
    so !== 90
  ) {
    alert("không xác định được hàng trăm");
    document.getElementById("result").innerHTML = hangChuc + hangDonVi ;
  }
  
} 
