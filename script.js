function calcPercentage(degree, fullMark) {
  return (degree / fullMark) * 100;
}

document.getElementById("calc").onclick = function () {
  let degree = document.getElementById("degree").value;
  let fullMark = document.getElementById("fullMark").value;
  // Check Errors
  let error = "";
  let valid = true;
  if (isNaN(Number(degree)) || Number(degree) < 0 || degree === "") {
    error += "Invalid Degree! ";
    valid = false;
  }
  if (isNaN(Number(fullMark)) || Number(fullMark) < 0 || fullMark === "") {
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

  let result = calcPercentage(degree, fullMark);
  document.getElementById("result").style.color = "darkcyan";
  document.getElementById("result").innerHTML = `${result}%`;
};