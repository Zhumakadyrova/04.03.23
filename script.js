const text = document.querySelector("#new-text");
const upload = document.querySelector("#upload");
const list = document.querySelector("#list-text");
function removeItem () {
  this.parentElement.remove();
}
function addItem() {
  if (text.value.trim() !== "") {
    const liEl = document.createElement("li");
    list.append(liEl);
    liEl.textContent = text.value;
    text.value = " ";

    const remove = document.createElement("button");
    liEl.append(remove);
    remove.textContent = "Remove";
    remove.addEventListener("click", removeItem)
  }
}
upload.addEventListener("click", addItem);
text.addEventListener("keydown", function(event) {
  if(event.code === "enter") {
    addItem();
  }
})


const newInInformation = document.querySelector("#new-info");
const inpButton = document.querySelector("#press");
const inpInfoList = document.querySelector("#new-list");
function removeItem () {
  this.parentElement.remove()
}
function addItem() {
  if (newInInformation.value.trim() !== "") {
    liEl = document.createElement ("li");
    inpInfoList.append(liEl);
    liEl.textContent = newInInformation.value;
    newInInformation.value = "";

    const rmw = document.createElement("button");
    liEl.append(rmw);
    rmw.textContent = "Eraze";
    rmw.addEventListener("click", removeItem)
  }
}
inpButton.addEventListener("click", addItem);

const info = document.querySelector("#info");
const btn = document.querySelector("#press");
const item = document.querySelector("#list1");

function removeItem () {
  this.parentElement.remove()
}
function addItem () {
  if (info.value.trim() !== "") {
    const itmEl = document.createElement("li");
    info.append(itmEl);
    itmEl.textContent = info.value;
    info.value = " ";

    const eraze = document.createElement("button");
    eraze.textContent = "Eraze";
    itmEl.append(eraze);
    eraze.addEventListener("click", removeItem)
  } 
}
btn.addEventListener("click", addItem);
info.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    addItem
  } 
})