const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById("output");


const convertToRoman = input => {
  const roman = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  const romanResult = [];

  roman.forEach(function (arr) {
    while (input >= arr[1]) {
      romanResult.push(arr[0]);
      input -= arr[1];
    }
  });
  return romanResult.join('');
}


const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  result.classList.remove('hidden');

  if (!numberInput.value || isNaN(inputInt)) {
    result.innerText ="Please enter a valid number";
    return;
  }
  if (inputInt === -1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputInt >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  result.innerText = `${numberInput.value} in roman numerals is: \n` + convertToRoman(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
