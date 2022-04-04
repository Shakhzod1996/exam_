let arr = [
  {
    id: 1,
    avatar: "../../imgs/nature1.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide2.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },

  {
    id: 2,
    avatar: "../../imgs/nature2.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide4.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },

  {
    id: 3,
    avatar: "../../imgs/nature3.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide1.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },

  {
    id: 4,
    avatar: "../../imgs/nature2.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide4.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },

  {
    id: 5,
    avatar: "../../imgs/nature4.webp",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide3.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },

  {
    id: 6,
    avatar: "../../imgs/nature7.jpg",
    name: "Ramazon",
    view: "50w",
    media: [
      "../../imgs/slide8.jpg",
      " ../../imgs/nature2.jpg",
      "../../imgs/nature3.jpg",
    ],
  },
];

let ulContainer = document.querySelector(".ul-move");
arr.forEach((item, index) => {
  let li = document.createElement("li");
  li.classList.add("li-main");

  li.innerHTML = `
  <div class='for-display'>
    <div class='avatar-main'>  
      <div class='avatar-left'>
        <img class='avatar-img' src=${item.avatar} alt='img'>
        <h4>${item.name}</h4>
        <span>${item.view}</span>
      </div>

      <div class='avatar-right'>
        <i class='bx bx-play'></i>
        <i class='bx bx-volume-full'></i>
        <i class='bx bx-dots-horizontal-rounded'></i>
      </div>
    </div>
    
    <div class='buttons'>
      <button class='left-btn'><i class='bx bx-chevron-left-circle'></i></button>
      <button class='right-btn'><i class='bx bx-chevron-right-circle'></i></button>
    </div>

    <div class='input-flex'>
      <input type='text' placeholder='Reply to${item.name}'>
      <i class='bx bxl-telegram'></i>
    </div>
  </div>  
  <div class='back-main'>
  <div class='back-img-move'>
    <img class='back' src=${item.media[0]}>
    <img class='back' src=${item.media[2]}>
    <img class='back' src=${item.media[1]}>
    </div>
  </div>
  

  `;

  ulContainer.appendChild(li);
});

let ulMove = document.querySelector(".ul-move");
let idx = 0;
let imgs = document.querySelectorAll(".back");
let backMove = document.querySelectorAll(".back-img-move");

setInterval(autoRun, 10000);

let avatar = document.querySelectorAll(".for-display");
let buttons = document.querySelectorAll(".buttons");
let inputFlex = document.querySelectorAll(".input-flex");
// ?
let li = document.querySelectorAll(".li-main");
li[0].addEventListener("click", () => {
  li[0].classList.add("active");

  avatar[0].classList.add("for-displayo-show");

  avatar[1].classList.remove("for-displayo-show");
  avatar[5].classList.remove("for-displayo-show");
  avatar[4].classList.remove("for-displayo-show");
  avatar[3].classList.remove("for-displayo-show");
  avatar[2].classList.remove("for-displayo-show");

  li[1].classList.remove("active");
  li[2].classList.remove("active");
  li[3].classList.remove("active");
  li[4].classList.remove("active");
  li[5].classList.remove("active");
  ulMove.style.transform = "translateX(500px)";
});

li[1].addEventListener("click", () => {
  li[1].classList.add("active");
  avatar[1].classList.add("for-displayo-show");

  avatar[5].classList.remove("for-displayo-show");
  avatar[4].classList.remove("for-displayo-show");
  avatar[3].classList.remove("for-displayo-show");
  avatar[2].classList.remove("for-displayo-show");
  avatar[0].classList.remove("for-displayo-show");
  li[0].classList.remove("active");
  li[2].classList.remove("active");
  li[3].classList.remove("active");
  li[4].classList.remove("active");
  li[5].classList.remove("active");
  ulMove.style.transform = "translateX(300px)";
});

li[2].addEventListener("click", () => {
  li[2].classList.add("active");
  avatar[2].classList.add("for-displayo-show");

  avatar[5].classList.remove("for-displayo-show");
  avatar[4].classList.remove("for-displayo-show");
  avatar[3].classList.remove("for-displayo-show");
  avatar[1].classList.remove("for-displayo-show");
  avatar[0].classList.remove("for-displayo-show");

  li[0].classList.remove("active");
  li[1].classList.remove("active");
  li[3].classList.remove("active");
  li[4].classList.remove("active");
  li[5].classList.remove("active");
  ulMove.style.transform = "translateX(100px)";
});

li[3].addEventListener("click", () => {
  li[3].classList.add("active");
  avatar[3].classList.add("for-displayo-show");

  avatar[5].classList.remove("for-displayo-show");
  avatar[4].classList.remove("for-displayo-show");
  avatar[2].classList.remove("for-displayo-show");
  avatar[1].classList.remove("for-displayo-show");
  avatar[0].classList.remove("for-displayo-show");

  li[0].classList.remove("active");
  li[1].classList.remove("active");
  li[2].classList.remove("active");
  li[4].classList.remove("active");
  li[5].classList.remove("active");
  ulMove.style.transform = "translateX(-100px)";
});

li[4].addEventListener("click", () => {
  li[4].classList.add("active");
  avatar[4].classList.add("for-displayo-show");

  avatar[5].classList.remove("for-displayo-show");
  avatar[3].classList.remove("for-displayo-show");
  avatar[2].classList.remove("for-displayo-show");
  avatar[1].classList.remove("for-displayo-show");
  avatar[0].classList.remove("for-displayo-show");

  li[0].classList.remove("active");
  li[1].classList.remove("active");
  li[2].classList.remove("active");
  li[3].classList.remove("active");
  li[5].classList.remove("active");
  ulMove.style.transform = "translateX(-300px)";
});

li[5].addEventListener("click", () => {
  li[5].classList.add("active");
  avatar[5].classList.add("for-displayo-show");

  avatar[4].classList.remove("for-displayo-show");
  avatar[3].classList.remove("for-displayo-show");
  avatar[2].classList.remove("for-displayo-show");
  avatar[1].classList.remove("for-displayo-show");
  avatar[0].classList.remove("for-displayo-show");

  li[0].classList.remove("active");
  li[1].classList.remove("active");
  li[2].classList.remove("active");
  li[3].classList.remove("active");
  li[4].classList.remove("active");
  ulMove.style.transform = "translateX(-500px)";
});

function changeImage() {
  if (li[0].classList.contains("active")) {
    if (idx == imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[0].style.transform = `translateX(${-idx * 350}px )`;
  }

  if (li[1].classList.contains("active")) {
    if (idx > imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[1].style.transform = `translateX(${-idx * 350}px )`;
  }

  if (li[2].classList.contains("active")) {
    if (idx > imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[2].style.transform = `translateX(${-idx * 350}px )`;
  }

  if (li[3].classList.contains("active")) {
    if (idx > imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[3].style.transform = `translateX(${-idx * 350}px )`;
  }

  if (li[4].classList.contains("active")) {
    if (idx > imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[4].style.transform = `translateX(${-idx * 350}px )`;
  }

  if (li[5].classList.contains("active")) {
    if (idx > imgs.length - 1) {
      idx = 0;
    } else if (idx < 0) {
      idx = imgs.length - 1;
    }
    backMove[4].style.transform = `translateX(${-idx * 350}px )`;
  }
}
function autoRun() {
  idx++;
  changeImage();
}

// ?Clicking Buttons Inside
let leftBtn = document.querySelectorAll(".left-btn");
let rightBtn = document.querySelectorAll(".right-btn");
