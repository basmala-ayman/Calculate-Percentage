function calcPercentage(degree, fullMark) {
  return (degree / fullMark) * 100;
}

document.getElementById("calc").onclick = function () {
  let degree = document.getElementById("degree").value;
  let fullMark = document.getElementById("fullMark").value;
  console.log(degree);
  console.log(fullMark);
  // Check Errors
  let error = "";
  let valid = true;
  if (Number(degree) < 0 || degree === "") {
    error += "Invalid Degree! ";
    valid = false;
  }
  if (Number(fullMark) < 0 || fullMark === "") {
    error += "Invalid Full Mark! ";
    valid = false;
  } else if (Number(degree) > Number(fullMark) && valid)
    error += "Full Mark must be greater than Degree! ";
  if (error !== "") {
    document.getElementById("result").style.color = "rgba(160, 8, 8)";
    document.getElementById("result").innerHTML =
      "Error: " + error + "Please, try again!";
    return;
  }
  //////////////////////////////////////////////////////////////////////

  document.getElementById("result").style.color = "darkcyan";
  document.getElementById("result").innerHTML = `${calcPercentage(
    degree,
    fullMark
  )}%`;
};
