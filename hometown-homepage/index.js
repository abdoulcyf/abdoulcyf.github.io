function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0;
  } else {
    return number_value;
  }
}

document.getElementById("button").addEventListener("click", (event) => {
  window.speechSynthesis.speak(
    new SpeechSynthesisUtterance(document.getElementById("text").value)
  );
});
