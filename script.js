console.log(document);

let mainWrapper = document.createElement("div");
mainWrapper.classList.add("main-wrapper");
document.getElementById("container").append(mainWrapper);

let shopsContainer = document.createElement("div");
shopsContainer.classList.add("shops-container");
mainWrapper.append(shopsContainer);

let h1Element = document.createElement("h1");
h1Element.classList.add("page-title");
h1Element.textContent = "Find Us";
shopsContainer.append(h1Element);

let shopsWrapper = document.createElement("div");
shopsWrapper.classList.add("shops-wrapper");

shopsContainer.append(shopsWrapper);

let shopInfo1 = document.createElement("div");
shopInfo1.classList.add("shop-info");
shopsWrapper.append(shopInfo1);

let h2Element = document.createElement("h2");
h2Element.textContent = "Parduotuvė 1";
shopInfo1.append(h2Element);

let ulElement = document.createElement("ul");
ulElement.classList.add("contacts-info");
shopInfo1.append(ulElement);

let liPhone = document.createElement("li");
let liEmail = document.createElement("li");
let liAddress = document.createElement("li");
liPhone.textContent = "Phone:";
liEmail.textContent = "Email:";
liAddress.textContent = "Address:";

ulElement.append(liPhone);
ulElement.append(liEmail);
ulElement.append(liAddress);

let linkTel = document.createElement("a");
linkTel.textContent = " +37066666666";
linkTel.setAttribute("href", "tel:+37066666666");

liPhone.append(linkTel);

let linkEmail = document.createElement("a");
linkEmail.textContent = " shop1@parduotuve.lt";
linkEmail.setAttribute("href", "mailto:shop1@parduotuve.lt");

liEmail.append(linkEmail);

let linkAddress = document.createElement("a");
linkAddress.textContent = " Rotušės aikštė 1, Kaunas";
linkAddress.setAttribute("href", "#");
linkAddress.setAttribute("target", "_blank");

liAddress.append(linkAddress);

let shopInfo2 = document.createElement("div");
shopInfo2.classList.add("shop-info");
shopInfo1.after(shopInfo2);

let h2Element2 = document.createElement("h2");
h2Element2.textContent = "Parduotuvė 2";
shopInfo2.append(h2Element2);

let ulElement2 = document.createElement("ul");
ulElement2.classList.add("contacts-info");
shopInfo2.append(ulElement2);

let liPhone2 = document.createElement("li");
let liEmail2 = document.createElement("li");
let liAddress2 = document.createElement("li");
liPhone2.textContent = "Phone:";
liEmail2.textContent = "Email:";
liAddress2.textContent = "Address:";

ulElement2.append(liPhone2);
ulElement2.append(liEmail2);
ulElement2.append(liAddress2);

let linkTel2 = document.createElement("a");
linkTel2.textContent = " +37066666666";
linkTel2.setAttribute("href", "tel:+37066666666");

liPhone2.append(linkTel2);

let linkEmail2 = document.createElement("a");
linkEmail2.textContent = " shop1@parduotuve.lt";
linkEmail2.setAttribute("href", "mailto:shop1@parduotuve.lt");

liEmail2.append(linkEmail2);

let linkAddress2 = document.createElement("a");
linkAddress2.textContent = " Rotušės aikštė 1, Kaunas";
linkAddress2.setAttribute("href", "#");
linkAddress2.setAttribute("target", "_blank");

liAddress2.append(linkAddress2);

let shopInfo3 = document.createElement("div");
shopInfo3.classList.add("shop-info");
shopInfo2.after(shopInfo3);

let h2Element3 = document.createElement("h2");
h2Element3.textContent = "Parduotuvė 3";
shopInfo3.append(h2Element3);

let ulElement3 = document.createElement("ul");
ulElement3.classList.add("contacts-info");
shopInfo3.append(ulElement3);

let liPhone3 = document.createElement("li");
let liEmail3 = document.createElement("li");
let liAddress3 = document.createElement("li");
liPhone3.textContent = "Phone:";
liEmail3.textContent = "Email:";
liAddress3.textContent = "Address:";

ulElement3.append(liPhone3);
ulElement3.append(liEmail3);
ulElement3.append(liAddress3);

let linkTel3 = document.createElement("a");
linkTel3.textContent = " +37066666666";
linkTel3.setAttribute("href", "tel:+37066666666");

liPhone3.append(linkTel3);

let linkEmail3 = document.createElement("a");
linkEmail3.textContent = " shop1@parduotuve.lt";
linkEmail3.setAttribute("href", "mailto:shop1@parduotuve.lt");

liEmail3.append(linkEmail3);

let linkAddress3 = document.createElement("a");
linkAddress3.textContent = " Rotušės aikštė 1, Kaunas";
linkAddress3.setAttribute("href", "#");
linkAddress3.setAttribute("target", "_blank");

liAddress3.append(linkAddress3);

let shopInfo4 = document.createElement("div");
shopInfo4.classList.add("shop-info");
shopInfo3.after(shopInfo4);

let h2Element4 = document.createElement("h2");
h2Element4.textContent = "Parduotuvė 4";
shopInfo4.append(h2Element4);

let ulElement4 = document.createElement("ul");
ulElement4.classList.add("contacts-info");
shopInfo4.append(ulElement4);

let liPhone4 = document.createElement("li");
let liEmail4 = document.createElement("li");
let liAddress4 = document.createElement("li");
liPhone4.textContent = "Phone:";
liEmail4.textContent = "Email:";
liAddress4.textContent = "Address:";

ulElement4.append(liPhone4);
ulElement4.append(liEmail4);
ulElement4.append(liAddress4);

let linkTel4 = document.createElement("a");
linkTel4.textContent = " +37066666666";
linkTel4.setAttribute("href", "tel:+37066666666");

liPhone4.append(linkTel4);

let linkEmail4 = document.createElement("a");
linkEmail4.textContent = " shop1@parduotuve.lt";
linkEmail4.setAttribute("href", "mailto:shop1@parduotuve.lt");

liEmail4.append(linkEmail4);

let linkAddress4 = document.createElement("a");
linkAddress4.textContent = " Rotušės aikštė 1, Kaunas";
linkAddress4.setAttribute("href", "#");
linkAddress4.setAttribute("target", "_blank");

liAddress4.append(linkAddress4);

let mapContainer = document.createElement("div");
mapContainer.classList.add("map-container");
mainWrapper.append(mapContainer);

let mapIframe = document.createElement("iframe");
mapIframe.src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.342133397557!2d23.885399077091318!3d54.89691695758684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7220ff3184881%3A0x8002872ac9bbdb7c!2sRotu%C5%A1%C4%97s%20a.%201%2C%2044280%20Kaunas!5e0!3m2!1slt!2slt!4v1692882273214!5m2!1slt!2slt";

mapIframe.height = "600";
mapIframe.style.border = 0;

mapContainer.append(mapIframe);
