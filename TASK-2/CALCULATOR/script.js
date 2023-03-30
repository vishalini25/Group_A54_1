let result = document.getElementById('result');

function input(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);
}
