document.querySelector("#plus1").addEventListener("click", addMore1);
document.querySelector("#minus1").addEventListener("click", reduceMore1);
document.querySelector("#remove1").addEventListener("click", removeProduct1);
document.querySelector("#plus2").addEventListener("click", addMore2);
document.querySelector("#minus2").addEventListener("click", reduceMore2);
document.querySelector("#remove2").addEventListener("click", removeProduct2);

function addMore1() {
  console.log("function addMore()");
  document.querySelector("#number1").textContent = "2";
  document.querySelector("#cost").textContent = "998,00";
  document.querySelector("#total").textContent = "1033,00";
}

function removeProduct1() {
  console.log("function removeProduct()");
  document.querySelector(".firstBag").classList.add("disappear");
  document.querySelector("#cost").textContent = "499,00";
  document.querySelector("#total").textContent = "534,00";
}

function reduceMore1() {
  console.log("function reduceMore()");
  document.querySelector("#number1").textContent = "1";
  document.querySelector("#cost").textContent = "748,50";
  document.querySelector("#total").textContent = "783,50";
}

function addMore2() {
  console.log("function addMore2()");
  document.querySelector("#number2").textContent = "2";
  document.querySelector("#cost").textContent = "998,00";
  document.querySelector("#total").textContent = "1033,00";
}

function removeProduct2() {
  console.log("function removeProduct2()");
  document.querySelector(".secondBag").classList.add("disappear");
}

function reduceMore2() {
  console.log("function reduceMore2()");
  document.querySelector("#number2").textContent = "1";
  document.querySelector("#cost").textContent = "499,00";
  document.querySelector("#total").textContent = "534,00";
}
