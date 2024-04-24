function human1(weight,height,age) {
  let human1 = (13.7*weight)+(5*height)-(6.8*age) + 66;
  document.getElementById("output").innerHTML = human1.toFixed(0) + " กิโลแคลอรี่";
  if (weight == "" || height == ""|| age =="") {
    alert("กรุณากรอกข้อมูลให้ครบ")
    document.getElementById("output").innerHTML = "กรอกข้อมูล";
  } 
  if (!isNaN(data)) {
    document.getElementById("output").innerHTML = "" + data;
  }
}

function human2(weight,height,age) {
  let human2 = 665 + (9.6*weight)+(1.8*height)-(4.7*age);
  document.getElementById("output").innerHTML = human2.toFixed(0) + " กิโลแคลอรี่";
  if (weight == "" || height == "" || age == "") {
    alert("กรุณากรอกข้อมูลให้ครบ")
    document.getElementById("output").innerHTML = "กรอกข้อมูล";
  } 
  if (!isNaN(data)) {
    document.getElementById("output").innerHTML = "" + data;
  }
}

function inputInformation2() {
  let weight = document.getElementById("input3").value;
  let height = document.getElementById("input4").value;
  let age = document.getElementById("input5").value;
  if (document.getElementById("genderInfo1").checked) {
    human1(weight, height, age);
  } else if (document.getElementById("genderInfo2").checked) {
    human2(weight, height, age);
  }
}