function tinhNgay() {
  //đầu vào
  var thang = +document.getElementById("thang").value;
  var nam = +document.getElementById("nam").value;
  var nam1 = nam % 400;
  var nam2 = nam % 4;
  var nam3 = nam % 100;

  // xử lý
  if (
    (thang === 4 && nam > 0) ||
    (thang === 6 && nam > 0) ||
    (thang === 9 && nam > 0) ||
    (thang === 11 && nam > 0)
  ) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm  " + nam + " có 30 ngày ";
  } else if (
    (thang === 1 && nam > 0) ||
    (thang === 3 && nam > 0) ||
    (thang === 5 && nam > 0) ||
    (thang === 7 && nam > 0) ||
    (thang === 8 && nam > 0) ||
    (thang === 10 && nam > 0) ||
    (thang === 12 && nam > 0)
  ) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm  " + nam + " có 31 ngày ";
  } else if (thang === 2 && nam === 0) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm NaN " + " có 28 ngày ";
  } else if (
    (thang === 2 && nam2 === 0 && nam3 !== 0) ||
    (thang === 2 && nam1 === 0)
  ) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm  " + nam + " có 29 ngày ";
  } else if (thang === 2 && nam1 > 0) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm  " + nam + " có 28 ngày ";
  } else if (thang === 0 && nam > 0) {
    document.getElementById("result").innerHTML =
      "Tháng NaN " + " năm " + nam + " có 0 ngày ";
  } else if (thang > 0 && nam === 0) {
    document.getElementById("result").innerHTML =
      "Tháng " + thang + " năm NaN " + " có 0 ngày ";
  } else {
    document.getElementById("result").innerHTML =
      "Tháng NaN " + " năm NaN " + " có 0 ngày ";
  }
}
