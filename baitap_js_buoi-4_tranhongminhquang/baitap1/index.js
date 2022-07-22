function sapXep() {
  // đầu vào
  var soMot = document.getElementById("soMot").value * 1;
  var soHai = document.getElementById("soHai").value * 1;
  var soBa = document.getElementById("soBa").value * 1;
  var result = "";

//   // Xử lý
//   //cách 1 lồng if - if
//   if (soMot > soHai) {
//     if (soHai > soBa) {
//       result = soMot + ">" + soHai + ">" + soBa;
//     } else if (soMot > soBa) {
//       result = soMot + ">" + soBa + ">" + soHai;
//     } else {
//       result = soBa + ">" + soMot + ">" + soHai;
//     }
//   } else if (soHai > soBa) {
//     if (soMot > soBa) {
//       result = soHai + ">" + soMot + ">" + soBa;
//     } else {
//       result = soHai + ">" + soBa + ">" + soMot;
//     }
//   }else {
//     result = soBa + ">" + soHai + ">" + soMot;
//   }
//   document.getElementById("result").innerHTML = result;
// }


        // cách 2 sài else if
if( soMot > soHai && soMot > soBa && soHai > soBa){
    result = soMot + ">" + soHai + ">" + soBa;
}else if (soMot > soHai && soMot > soBa && soBa > soHai) {
    result = soMot + ">" + soBa + ">" + soHai;
}else if (soHai > soMot && soHai > soBa && soMot > soBa) {
    result = soHai + ">" + soMot + ">" + soBa;
}else if (soHai > soMot && soHai > soBa && soBa > soMot ) {
    result = soHai + ">" + soBa + ">" + soMot;;
}else if (soBa > soMot && soBa >  soHai && soMot > soHai  ) {
    result = soBa + ">" + soMot + ">" + soHai;
}else if (soBa > soMot && soBa >  soHai && soHai > soMot) {
    result = soBa + ">" + soHai + ">" + soMot;
}

        // đầu ra
        document.getElementById("result").innerHTML = result;
}
