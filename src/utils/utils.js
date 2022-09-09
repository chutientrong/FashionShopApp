function isValidUsername(value) {
  /* 
    Full name 
  */
  const re = /^[a-zA-Z]{1,}(?: [a-zA-Z]+){0,5}$/gm;
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

function validateInput(value, setError) {
  if (value.length < 1) {
    setError("Opps! Please Fill The Form");
  } else {
    setError("");
  }
}

function isValidCoupon(value, coupon) {
  /* 
  Coupon
*/

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

function isValidPhone(value) {
  /* 
    Full name 
  */
  const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
  return re.test(String(value));
}


function validatePhone(value, setPhoneError) {
  if (value == "") {
    setPhoneError("");
  } else if (isValidPhone(value)) {
    setPhoneError("");
  } else {
    setPhoneError("Your Phone Is Not Correct");
  }
}



function validateSecurityCode(value, ValidCode, setSecurityError) {
  if (value != ValidCode) {
    setSecurityError(" Security Code Is Wrong");
  } else {
    setSecurityError("");
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
  isValidPhone,
  validatePhone,
  calculateAngle,
  validateSecurityCode
};

export default utils;
