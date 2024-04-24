function calculation(weight, high) {
  let value = weight / ((high*0.01)*(high*0.01));
  document.getElementById("result").innerHTML= value.toFixed(2);
  if (value > 0 && value < 18.50) {
    document.getElementById("disease").innerHTML = "น้ำหนักน้อย / ผอม";
    } else if (value >= 18.50 && value <= 22.90) {
    document.getElementById("disease").innerHTML = "ปกติ (สุขภาพดี)";
    } else if (value >= 23 && value <=24.90) {
    document.getElementById("disease").innerHTML = "ท้วม";
    } else if (value >= 25 && value <= 29.90) {
    document.getElementById("disease").innerHTML = "อ้วน";
    } else if (value >= 30) {
    document.getElementById("disease").innerHTML = "อ้วนมาก";
    }
  if (weight == "" || high == "") {
    alert("กรุณากรอกข้อมูลให้ครบ")
    document.getElementById("result").innerHTML = "กรอกข้อมูล";
    document.getElementById("disease").innerHTML = "";
  } 
  if (!isNaN(data)) {
    document.getElementById("result").innerHTML = "" + data;
  }
}

function inputInformation() {
  let weight = document.getElementById("input1").value;
  let high = document.getElementById("input2").value;
  calculation(weight, high);
}