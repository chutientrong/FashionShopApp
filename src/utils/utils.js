function isValidUsername(value) {
  /* 
    Full name 
  */
  const re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/gm;
  return re.test(String(value));
}
function validateUsername(value, setUsernameError) {
  if (value == "") {
    setUsernameError("");
  } else if (isValidUsername(value)) {
    setUsernameError("");
  } else {
    setUsernameError("Your Name Is Not Correct");
  }
}

//   function isValidUsername (value) {
//     /*
//   Usernames can only have:
//   - Lowercase Letters (a-z)
//   - Numbers (0-9)
//   - Dots (.)
//   - Underscores (_)
// */
//   const re =  /^[a-z0-9_\.]+$/;
//   return re.test(String(value))
// }
// function validateUsername(value, setUsernameError) {
//   if (value == '') {
//     setUsernameError('');
//   } else if (isValidUsername(value)) {
//     setUsernameError('');
//   } else {
//     setUsernameError('Your Name Is Not Correct');
//   }
// }

function isValidEmail(value) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
  if (value == "") {
    setEmailError("");
  } else if (isValidEmail(value)) {
    setEmailError("");
  } else {
    setEmailError(" Your Email Is Not Correct ");
  }
}

function validatePassword(value, setPasswordError) {
  if ((value != null) & (value.length < 5)) {
    setPasswordError(" Oops! Your Password Is Not Correct ");
  } else {
    setPasswordError("");
  }
}
function validateCfPassword(value, password, setCfPasswordError) {
  if (value != password) {
    setCfPasswordError(" Oops! Your Password Is Not Match");
  } else {
    setCfPasswordError("");
  }
}

function validateInput(value, minLength, setError) {
  if (value.length < minLength) {
    setError("Invalid Input");
  } else {
    setError("");
  }
}

function isValidCoupon(value, coupon) {
  /* 
  Coupon
*/
console.log("value",value)
console.log("coupon",coupon)
  if(value === coupon) return true 
  else return false;
}
function validateCoupon(value, setCouponError, coupon) {
  console.log("isvalid",isValidCoupon(value, coupon))
  if (value == "") {
    setCouponError("");
  } else if (isValidCoupon(value, coupon)) {
    setCouponError("");
  } else {
    setCouponError("* Your Coupon Is Not Correct");
  }
}

function calculateAngle(coordinates) {
  let startLat = coordinates[0]["latitude"];
  let startLng = coordinates[0]["longitude"];
  let endLat = coordinates[1]["latitude"];
  let endLng = coordinates[1]["longitude"];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const utils = {
  isValidUsername,
  validateUsername,
  isValidEmail,
  isValidCoupon,
  validateEmail,
  validatePassword,
  validateCfPassword,
  validateInput,
  validateCoupon,
  calculateAngle,
};

export default utils;
