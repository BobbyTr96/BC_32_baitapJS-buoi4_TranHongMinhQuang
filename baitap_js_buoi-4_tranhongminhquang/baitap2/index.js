function loiChao() {
  //đầu vào
  var choose = document.getElementById("choose").value * 1;
  var result = "";
  // xử lý cách 1
  // if (choose === 10 ) {
  //     result = " Hello người lạ"
  // }else if ( choose === 2) {
  //     result = " Xin chào Bố "
  // }else if (choose === 3) {
  //     result = " Xin chào Mẹ "
  // }else if (choose === 4) {
  //     result = " Xin chào Anh Trai "
  // }else {
  //     result = " Xin chào Em Gái "
  // }

  // cách 2
  switch (choose) {
    case 10:
      result = " Hello người lạ";
      break;

    case 2:
      result = " Xin chào Bố ";
      break;

    case 3:
      result = " Xin chào Mẹ ";
      break;

    case 4:
      result = " Xin chào Anh Trai ";
      break;

    case 5:
      result = " Xin chào em Gái ";
      break;
  }
  // đầu ra
  document.getElementById("result").innerHTML = result;
}
