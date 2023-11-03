function handleValidation() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let password = document.getElementById("pass").value;
  let country = document.getElementById("country").value;
  let gender = document.getElementsByName("gender");
  let sports = document.getElementsByName("sports");
  let regexname = /^[a-zA-Z ]{2,30}$/;
  let regexpass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  let genderVal, sportsVal;
  let arr = [];

  let errname = document.querySelector("#errname");
  let errage = document.querySelector("#errage");
  let errpass =document.querySelector("#errpass");
  let errcountry =document.querySelector("#errcountry");
  let errgender= document.querySelector("#errgender");
  let errsport =document.querySelector("#errsports");

  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderVal = gender[i].value;
    }
  }

  for (let i = 0; i < sports.length; i++) {
    if (sports[i].checked) {
      sportsVal = sports[i].value;
      arr.push(sportsVal);
    }
  }
  console.log(sportsVal, genderVal, arr);
  console.log(arr.length);

  if (name == "") {
    errname.innerHTML = "Please Enter a Name";
  } else {
    if (regexname.test(name)) {
      errname.innerHTML = "";
    } else {
      errname.innerHTML =
        "Please Enter a Valid Name";
    }
  }

  if (age == "") {
    errage.innerHTML = "Please Enter a Age";
  } else {
    if (age > 0) {
      errage.innerHTML = "";
    } else {
      errage.innerHTML = "Please Enter a Valid Age";
    }
  }

  if (password == "") {
    errpass.innerHTML = "Please Enter a Password";
  } else {
    if (regexpass.test(password)) {
      errpass.innerHTML = "";
    } else {
      errpass.innerHTML =
        "Please Enter a 6 to 16 Digit Password and atleast one AlaphaNumeric Value";
    }
  }

  if (country == "") {
    errcountry.innerHTML = "Please Select a Country";
  } else {
    errcountry.innerHTML = "";
  }

  if (genderVal == undefined) {
    errgender.innerHTML = "Please Select a Gender";
  } else {
    errgender.innerHTML = "";
  }

  if (arr.length < 2) {
    errsport.innerHTML =
      "Please Select a atleast 2 Category";
  } else {
    errsport.innerHTML = "";
  }

  event.preventDefault();
}
