fetch(
  "https://kea21s-6eb0.restdb.io/rest/silfen-product" + "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "606d606af55350043100752e",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    listProducts(data);
  })
  .catch((err) => {
    console.error(err);
  });

function listProducts(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#theList").content;
  const copy = template.cloneNode(true);
  const imgEl = copy.querySelector("img");
  imgEl.src = product.imgFront;
  imgEl.alt = `The image of ${product.name} bag`;
  const h4El = copy.querySelector("h4");
  h4El.textContent = product.name;
  h4El.classList.add("capi");
  copy.querySelector(".price").textContent = `${product.price},00 DKK`;
  if (product.on_sale) {
    copy.querySelector(".price").textContent = `${product.price},00 DKK`;
    copy.querySelector(".price").classList.add("underline");
    copy.querySelector(
      ".discount"
    ).textContent = `${product.sale_discount}0 DKK`;
  }
  product.colors.forEach((bag) => {
    console.log(bag);
    const newEl = document.createElement("span");
    newEl.classList.add("square", "block", bag.color);
    const para = copy.querySelector(".allColors");
    para.appendChild(newEl);
  });
  const parent = document.querySelector(".list");
  parent.appendChild(copy);
}

document.querySelector("#arr1").addEventListener("click", dropDown1);
document.querySelector("#arr2").addEventListener("click", dropDown2);
document.querySelector("#arr3").addEventListener("click", dropDown3);
document.querySelector("#arr4").addEventListener("click", dropDown4);
document.querySelector("#down_arr").addEventListener("click", dropSort);

function dropDown1() {
  console.log("function dropDown1()");
  document.querySelector("#arr1").classList.toggle("rotate");
  document.querySelector(".categories").classList.toggle("disappear");
}

function dropDown2() {
  console.log("function dropDown2()");
  document.querySelector("#arr2").classList.toggle("rotate");
  document.querySelector(".seasons").classList.toggle("disappear");
}

function dropDown3() {
  console.log("function dropDown3()");
  document.querySelector("#arr3").classList.toggle("rotate");
  document.querySelector(".collections").classList.toggle("disappear");
}

function dropDown4() {
  console.log("function dropDown4()");
  document.querySelector("#arr4").classList.toggle("rotate");
  document.querySelector("#yellow").classList.toggle("disappear");
  document.querySelector("#orange").classList.toggle("disappear");
  document.querySelector("#pink").classList.toggle("disappear");
  document.querySelector("#turquoise").classList.toggle("disappear");
  document.querySelector("#green").classList.toggle("disappear");
  document.querySelector("#light_blue").classList.toggle("disappear");
  document.querySelector("#dark_blue").classList.toggle("disappear");
  document.querySelector("#silver").classList.toggle("disappear");
  document.querySelector("#grey").classList.toggle("disappear");
  document.querySelector("#black").classList.toggle("disappear");
}

function dropSort() {
  console.log("function dropSort()");
  document.querySelector(".drop_sort").classList.toggle("no_border");
  document.querySelector("#popularity").classList.toggle("disappear");
  document.querySelector("#newest").classList.toggle("disappear");
  document.querySelector("#lowest").classList.toggle("disappear");
  document.querySelector("#highest").classList.toggle("disappear");
  document.querySelector("#sale").classList.toggle("disappear");
}
