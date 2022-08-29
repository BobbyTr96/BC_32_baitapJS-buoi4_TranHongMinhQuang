//đầu vào
function past() {
  var ngay = document.getElementById("ngay").value * 1;
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  var ngayGiam = "";
  var thangGiam = "";
  var namGiam = "";
  var thongBao = "";
  // xử lý
  if (
    1 < ngay &&
    ngay <= 31 &&
    (thang === 1 ||
      thang === 3 ||
      thang === 5 ||
      thang === 7 ||
      thang === 8 ||
      thang === 10 ||
      thang === 12) &&
    nam > 0
  ) {
    ngayGiam = --ngay;
    thangGiam = thang;
    namGiam = nam;
  } else if (
    ngay > 1 &&
    ngay <= 30 &&
    (thang === 4 || thang === 6 || thang === 9 || thang === 11) &&
    nam > 0 &&
    thang !== 2
  ) {
    ngayGiam = --ngay;
    thangGiam = thang;
    namGiam = nam;
  } else if (thang === 2 && ngay > 1 && ngay <= 28 && nam > 0) {
    ngayGiam = --ngay;
    thangGiam = thang;
    namGiam = nam;
  } else if (ngay === 1 && thang === 3 && nam > 0) {
    ngayGiam = ngay + 27;
    thangGiam = --thang;
    namGiam = nam;
  } else if (ngay === 1 && thang === 8 && nam > 0) {
    ngayGiam = ngay + 30;
    thangGiam = --thang;
    namGiam = nam;
  } else if (
    (ngay === 1 && thang === 5 && nam > 0) ||
    (ngay === 1 && thang === 7 && nam > 0) ||
    (ngay === 1 && thang === 10 && nam > 0) ||
    (ngay === 1 && thang === 12 && nam > 0)
  ) {
    ngayGiam = ngay + 29;
    thangGiam = --thang;
    namGiam = nam;
  } else if (
    (ngay === 1 && thang === 2 && nam > 0) ||
    (ngay === 1 && thang === 4 && nam > 0) ||
    (ngay === 1 && thang === 6 && nam > 0) ||
    (ngay === 1 && thang === 9 && nam > 0) ||
    (ngay === 1 && thang === 11 && nam > 0)
  ) {
    ngayGiam = ngay + 30;
    thangGiam = --thang;
    namGiam = nam;
  } else if (ngay === 1 && thang === 1 && nam >= 0) {
    ngayGiam = ngay + 30;
    thangGiam = thang + 11;
    namGiam = --nam;
  } else {
    thongBao = " không xác định !!! vui lòng nhập lại";
  }

  // xuất
  document.getElementById("result").innerHTML =
    " ngày " + ngayGiam + " tháng " + thangGiam + " năm " + namGiam + thongBao;
}
////////
function ngayMoi() {
  //đầu vào
  var ngay = document.getElementById("ngay").value * 1;
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  var ngayTang = "";
  var thangTang = "";
  var namTang = "";
  var thongBao = "";

  // xử lý
  if (
    1 <= ngay &&
    ngay <= 30 &&
    thang >= 1 &&
    thang <= 12 &&
    nam > 0 &&
    thang !== 2 &&
    thang !== 4 &&
    thang !== 6 &&
    thang !== 9 &&
    thang !== 11 &&
    nam >0
  ) {
    ngayTang = ++ngay;
    thangTang = thang;
    namTang = nam;
  }else if((thang === 4 || thang ===6||thang ===9||thang ===11) && ngay >= 1 && ngay <= 29){
    ngayTang = ++ngay;
    thangTang = thang;
    namTang = nam;
  } else if (ngay === 28 && thang === 2 && nam > 0) {
    ngayTang = 1;
    thangTang = ++thang;
    namTang = nam;
  } else if (
    (ngay === 31 && thang === 1 && nam > 0) ||
    (ngay === 31 && thang === 3 && nam > 0) ||
    (ngay === 31 && thang === 5 && nam > 0) ||
    (ngay === 31 && thang === 7 && nam > 0) ||
    (ngay === 31 && thang === 8 && nam > 0) ||
    (ngay === 31 && thang === 10 && nam > 0)
    // (ngay === 31 && thang === 12 && nam > 0)
  ) {
    ngayTang = 1;
    thangTang = ++thang;
    namTang = nam;
  } else if (
    (ngay === 30 && thang === 4 && nam > 0) ||
    (ngay === 30 && thang === 6 && nam > 0) ||
    (ngay === 30 && thang === 9 && nam > 0) ||
    (ngay === 30 && thang === 11 && nam > 0)
  ) {
    ngayTang = 1;
    thangTang = ++thang;
    namTang = nam;
  } else if (ngay === 31 && thang === 12 && nam >= 0) {
    ngayTang = 1;
    thangTang = 1;
    namTang = ++nam;
  } else {
    thongBao = " không xác định !!! vui lòng nhập lại";
  }

  //Xuất
  document.getElementById("result").innerHTML =
    " ngày " + ngayTang + " tháng " + thangTang + " năm " + namTang + thongBao;
}
