let container = document.querySelector(".container");
let mainWrapper = createMainWrapper();
let mapContainer = createMapContainer();
let shopsContainer = createShopsContainer();
let h1Element = createH1Element("Find us");
let shopsWrapper = createShopsWrapper();
let shopInfo = createShopInfo();
container.append(mainWrapper);
mainWrapper.append(shopsContainer, mapContainer);
shopsContainer.append(h1Element, shopsWrapper);

function createMainWrapper() {
  let mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");
  return mainWrapper;
}

function createShopsContainer() {
  let shopsContainer = document.createElement("div");
  shopsContainer.classList.add("shops-container");
  return shopsContainer;
}

function createH1Element(title) {
  let h1Element = document.createElement("h1");
  h1Element.classList.add("page-title");
  h1Element.textContent = title;
  return h1Element;
}

function createShopsWrapper() {
  let shopsWrapper = document.createElement("div");
  shopsWrapper.classList.add("shops-wrapper");
  return shopsWrapper;
}

function createShopInfo(title, phone, email, address, addressUrl) {
  let shopInfo = document.createElement("div");
  shopInfo.classList.add("shop-info");

  let h2Element = document.createElement("h2");
  h2Element.textContent = title;

  let ulElement = document.createElement("ul");
  ulElement.classList.add("contacts-info");

  shopInfo.append(h2Element, ulElement);

  let liPhone = document.createElement("li");
  liPhone.textContent = "Phone:";
  let liEmail = document.createElement("li");
  liEmail.textContent = "Email:";
  let liAddress = document.createElement("li");
  liAddress.textContent = "Address:";

  ulElement.append(liPhone);
  ulElement.append(liEmail);
  ulElement.append(liAddress);

  let linkTel = document.createElement("a");
  linkTel.textContent = phone;
  linkTel.setAttribute("href", "tel:${phone}");
  liPhone.append(linkTel);

  let linkEmail = document.createElement("a");
  linkEmail.textContent = email;
  linkEmail.setAttribute("href", "mailto:${email}");
  liEmail.append(linkEmail);

  let linkAddress = document.createElement("a");
  linkAddress.textContent = address;
  linkAddress.setAttribute("href", addressUrl);
  linkAddress.setAttribute("target", "_blank");

  liAddress.append(linkAddress);

  return shopInfo;
}

let shopInfo1 = createShopInfo(
  "Parduotuvė 1",
  "+37065894511",
  "info@parduotuve1.lt",
  "Rotušės a. 1, Kaunas",
  "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
);

let shopInfo2 = createShopInfo(
  "Parduotuvė 2",
  "+37065894511",
  "info@parduotuve2.lt",
  "Rotušės a. 1, Kaunas",
  "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
);

let shopInfo3 = createShopInfo(
  "Parduotuvė 3",
  "+37065894511",
  "info@parduotuve3.lt",
  "Rotušės a. 1, Kaunas",
  "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
);

let shopInfo4 = createShopInfo(
  "Parduotuvė 4",
  "+37065894511",
  "info@parduotuve4.lt",
  "Rotušės a. 1, Kaunas",
  "https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
);
shopsWrapper.append(shopInfo1, shopInfo2, shopInfo3, shopInfo4);

function createMapContainer() {
  let mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");
  mapContainer.innerHTML = `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.342133397557!2d23.885399077091318!3d54.89691695758684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e0!3m2!1slt!2slt!4v1692882273214!5m2!1slt!2slt"
    width="500"
    height="600"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>`;
  return mapContainer;
}

//Style

// function shopInfoStyle(className) {
//   if (className === "shop-info") {
//     let elements = document.getElementsByClassName(className);

//     for (let i = 0; i < elements.length; i++) {
//       elements[i].style.padding = "15px 35px 20px 15px";
//       elements[i].style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
//     }
//   }
// }

// shopInfoStyle("shop-info");

// function ulStyle(className) {
//   if (className === "contacts-info") {
//     let elements = document.getElementsByClassName(className);

//     for (let i = 0; i < elements.length; i++) {
//       elements[i].style.listStyle = "none";
//       elements[i].style.paddingLeft = "0";
//       elements[i].style.display = "flex";
//       elements[i].style.flexDirection = "column";
//       elements[i].style.gap = "8px";
//     }
//   }
// }

// ulStyle("contacts-info");

// let allLinks = document.querySelectorAll("a");

// if (allLinks) {
//   allLinks.forEach(function (link) {
//     link.style.textDecoration = "none";
//     link.style.fontWeight = "400";
//     link.style.color = "darkslateblue";
//     link.style.marginLeft = "5px";
//   });
// }
