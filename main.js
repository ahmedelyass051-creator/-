let dollar = document.getElementById('dollar');
let sar = document.getElementById('sar');

dollar.onkeyup = function D() {
  sar.value = dollar.value * 3.75;
};

sar.onkeyup = function S() {
  dollar.value = sar.value / 3.75;
};
