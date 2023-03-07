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

const news = document.querySelector("#info-blank");
const active = document.querySelector("#activation");
const liit = document.querySelector("#list-info");
function removeItem () {
  this.parentElement.remove();
}
function addItem () {
  if (news.value.trim !== "") {
    const liitElement = document.createElement("li");
    liit.append(liitElement);
    liitElement.textContent = news.value;
    news.value = "";

    const liiteRemove = document.createElement("button");
    liiteRemove.textContent("Remove");
    liitElement.append(liiteRemove);
    liiteRemove.addEventListener("click", removeItem)
  }
}
active.addEventListener("click", addItem);

const example2 = [
  {name: "Bakyt", age: 18},
  {name: "Nagima", age:21}
]
const exampleList2 = [
  { name: "bakyt", age: 18 },
  { name: "dosbol", age: 32 },
];
const ul1 = document.createElement("ul");
document.body.append(ul1);
for (i = 0; i < exampleList2.length; i++) {
  const list1 = document.createElement("li");
  ul1.append(list1);
  list1.textContent = exampleList2[i].name + " - " + exampleList2[i].age;
}
const card = [
  {
    title: "Michael",
    description:
      "Michael works as a programmer at Google. He has been working there for 7 years. Likes gingerbread.",
    url: "https://bugaga.ru/uploads/posts/2019-10/1569918345_lica-1.jpg",
  },
  {
    title: "Howard",
    description:
      "Howard works as a programmer at Google. He has been working there for 5 years. Likes to play Starcraft",
    url: "https://bugaga.ru/uploads/posts/2019-10/1569918345_lica-1.jpg",
  },
  {
    title: "Emma",
    description:
      "Emma works as a programmer at Amazoon. He has been working there for 2 years. likes to go shopping",
    url: "https://bugaga.ru/uploads/posts/2019-10/1569918345_lica-1.jpg",
  },
  {
    title: 15,
    description:
15646468,
    url: "https://zachiska.com/wp-content/uploads/2019/12/73414958_2429105324085170_2500640154078220638_n.jpg",
  },
]
const card1 = document.createElement("card");
document.body.append(card1);
for(i=0; i< card.length; i++) {
  const cardText = document.createElement("card-text");
  card1.append(cardText);
  const cardik = card[i];
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const img = document.createElement("img");
  h3.textContent = cardik.title;
  p.textContent = cardik.description;
  img.src = cardik.url;
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(img);
  document.body.append(div);
  if ((typeof cardik.title) === 'string') {
    div.append(h3);
  }
  else{
    h3.textContent = "wrong command"
    div.append(h3);
  }
  if ((typeof cardik.description) === "string") {
    div.append(p);
  }
  else { 
    p.textContent = "Wrong Comand"
    div.append(p);
  }
}