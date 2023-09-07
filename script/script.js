const menu = document.querySelector(".menu");
const navMiddle = document.querySelector(".nav-middle");
const lists = document.querySelectorAll(".mobile-menu-options");

function toggleMenu() {
  navMiddle.classList.toggle("show");
  menu.classList.toggle("show");
}
menu.addEventListener("click", toggleMenu);
lists.forEach((list) => list.addEventListener("click", toggleMenu));
// ----------project detail object------
const projectDetail = [
  {
    title: "mayaShop",
    popTitle: "seamless and enjoyable shopping experience",
    popDescription:
      "Welcome to mayaShop, the ultimate online shopping destination! At mayaShop, we strive to provide you with a seamless and enjoyable shopping experience from the comfort of your own home. Our platform boasts a vast collection of products from various categories, including fashion, electronics, home decor, beauty, sports, and much more.",
    technologies: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    popupTech: [
      "React Js",
      "Express Js",
      "Node Js",
      "MongoDB",
      "Redux Toolkit (RTK)",
      "React-Bootstrap",
    ],
    imagePlaceholder: "./images/mayShop.png",
    imageMobile: "./images/mayShop.png",
    imagePopup: "./images/mayShop.png",
    imageMobilePopup: "./images/Img Plaholder.png",
    seeLive: "https://mayashop.onrender.com/",
    seeSource: "https://github.com/yayner2002/mayaShop",
  },
  {
    title: "Places App",
    popTitle: "Keeping track of Places users visited",
    popDescription:
      "In this app, you can add, update, delete, view on map a place.",
    technologies: ["React", "ExpressJS", "NodeJS", "MongoDB"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/Place-app-screenshot.png",
    imageMobile: "./images/Place-app-screenshot.png",
    imagePopup: "./images/Place-app-screenshot.png",
    imageMobilePopup: "./images/Img Plaholder.png",
    seeLive: "https://yay-places-app.web.app/",
    seeSource: "https://github.com/yayner2002/social-app",
  },
  {
    title: "Crypto Market",
    popTitle: "Keeping track of hundreds of components",
    popDescription:
      "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    technologies: ["React", "Hooks", "JavaScript", "CSS"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/crypto.png",
    imageMobile: "./images/Img Plaholder.png",
    imagePopup: "./images/crypto.png",
    imageMobilePopup: "./images/crypto.png",
    seeLive: "https://yay-crypto-market.netlify.app/",
    seeSource: "https://github.com/yayner2002/crypto-currency-market",
  },
  {
    title: "Space travellers Hub",
    popTitle: "Hundreds of space  and Missions",
    popDescription:
      "Build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. the webiste uses real live data from the SpaceX API.",
    technologies: ["React", "Redux", "Javascript", "ReduxToolkit"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "ReduxToolkit",
      "Javascript",
    ],
    imagePlaceholder: "./images/space.png",
    imageMobile: "./images/Img Plaholder.png",
    imagePopup: "./images/space.png",
    imageMobilePopup: "./images/space.png",
    seeLive: "https://yay-space-hub.netlify.app/",
    seeSource: "https://github.com/yayner2002/space-travellers-hub",
  },
  {
    title: "Book Store",
    popTitle: "Keeping track of hundreds of Books",
    popDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ["React", "Redux", "JavaScript", "API"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/booksstore.png",
    imageMobile: "./images/Img Plaholder.png",
    imagePopup: "./images/booksstore.png",
    imageMobilePopup: "./images/booksstore.png",
    seeLive: "https://yay-book-store.netlify.app/",
    seeSource: "https://github.com/yayner2002/book-store",
  },
  {
    title: "E-Commerce",
    popTitle: "Keeping track of hundreds of components",
    popDescription:
      'An Ecommerce site designed to help web developers review HTML, CSS and Javascript concepts to build modern webistes. Users can see the list of featured products, most sold items and see the mobile and desktop aspects of the webiste. Built with HTML, CSS and Javascript."',
    technologies: ["HTML", "CSS", "JavaScript", "CSSGrid/Flex"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/yaycommerc.png",
    imageMobile: "./images/Img Plaholder.png",
    imagePopup: "./images/yaycommerc.png",
    imageMobilePopup: "./images/yaycommerc.png",
    seeLive: "https://yayner2002.github.io/yayEcommerce/",
    seeSource: "https://github.com/yayner2002/yayEcommerce",
  },
  {
    title: "TV Shows",
    popTitle: "Keeping track of hundreds of Movies",
    popDescription:
      "Js Group Project made by a team of three persons, This a movie website which fetches data from the TvMaze Api and displays it in ui , it allows the users to add comments, reservations and also to like the movies.",
    technologies: ["Javascript", "CSS", "WEbpack", "API"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/tvshow.png",
    imageMobile: "./images/Img Plaholder.png",
    imagePopup: "./images/tvshow.png",
    imageMobilePopup: "./images/tvshow.png",
    seeLive: "https://github.com/yayner2002/js-group-project",
    seeSource: "https://yayner2002.github.io/js-group-project/",
  },
  {
    title: "Food Delivery App",
    popTitle: "Keeping track of hundreds of components",
    popDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ["React", "Redux", "ReduxToolkit", "Bootstrap"],
    popupTech: [
      "Codekit",
      "GitHub",
      "javaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    imagePlaceholder: "./images/yay-react-commerce.png",
    imageMobile: "./images/yay-react-commerce.png",
    imagePopup: "./images/yay-react-commerce.png",
    imageMobilePopup: "./images/yay-react-commerce.png",
    seeLive: "https://yay-commerce.netlify.app/",
    seeSource: "https://github.com/yayner2002/delivery-ecommere-app",
  },
];
// -------------End of project detail object-----

// --------Populate object to html elements when the page loads------
for (let i = 0; i < projectDetail.length; i += 1) {
  const worksNum = 1;
  let tech = "";
  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li>${projectDetail[i].technologies[j]}</li>`;
  }
  document.querySelector("#Portfolio").innerHTML += `
          <section class="work-${i + worksNum}">
            <div class="img-holder"><img src="${
              projectDetail[i].imagePlaceholder
            }" alt="placeholder" class="img-holder"></div>
            <div class="posts">
              <h2>${projectDetail[i].title}</h2>
              <div class="flex-post">
                <ul>
                  ${tech}
                </ul>
              </div>
              <button type="button" data-index="${i}" class="works-button">See Project</button>
            </div>
  </section>`;
}
// ----display popup modal---
const popupModal = document.querySelector("#portfolioPopup");
const displayPopupModal = (i) => {
  const navRight = document.querySelector(".nav-right");
  navRight.style.display = "none";
  let popupTech = "";
  let tech = "";
  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li>${projectDetail[i].technologies[j]}</li>`;
  }
  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    popupTech += `<li class="technology-list-popup">${projectDetail[i].popupTech[j]}</li>`;
  }
  popupModal.innerHTML = `
  <div class="works-popup">
          <span><a href="" onclick="closePopupModal()" class="close-popup">&times;</a></span>
        <div class="popup-container"
            <div class="work-popup-image">
                <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" id="closePopupImage" alt="${projectDetail[i].title} project screenshot"/>
                <img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
            </div>
            <div class="project-title-and-see-live-source">
              <div class="display-left">
                 <span>${projectDetail[i].popTitle}</span>
              </div> 
              <div class="display-right"> 
                <span><a href="${projectDetail[i].seeLive}" class="works-button-see-live">See Live
                <i class="fa fa-external-link" aria-hidden="true"></i></a></span>
                <span><a href="${projectDetail[i].seeSource}" class="works-button-see-live">See Source
                <i class="fa-brands fa-github"></i></a></span>
              </div>
              <div class="popup-mobile-technology">
               <ul>
                 <li>${tech}</li>
               </ul>
              </div>
            </div>
            <div class="popup-technology-list-container">
               <ul>
                 ${popupTech}
               </ul>
            </div>
            <div class="popup-description-container">
               <p>${projectDetail[i].popDescription}</p>
            </div>
            <div class="display-right mobile"> 
              <span><a href="${projectDetail[i].seeLive}" class="works-button-see-live">See Live
              <i class="fa fa-external-link" aria-hidden="true"></i></a></span>
              <span><a href="${projectDetail[i].seeSource}" class="works-button-see-live">See Source
              <i class="fa-brands fa-github"></i></a></span>
          </div>
        </div>
  </div>
  `;

  popupModal.style.display = "block";
};

document
  .querySelectorAll(".works-button")
  .forEach((row) =>
    row.addEventListener("click", () =>
      displayPopupModal(row.getAttribute("data-index"))
    )
  );

const closeModal = document.querySelector("#portfolioPopup");
// eslint-disable-next-line no-unused-vars
const closePopupModal = () => {
  closeModal.style.display = "none";
};
/* End of display popup modal */
// ----form validation----
const emailInputField = document.getElementById("email");
const formElement = document.getElementById("my-form");
const displayErrorElement = document.getElementById("display-error");

displayErrorElement.innerHTML = "The email Field must be in lowercase!!!";

formElement.addEventListener("submit", (event) => {
  if (emailInputField.value !== emailInputField.value.toLowerCase()) {
    event.preventDefault();
    displayErrorElement.style.display = "block";
    displayErrorElement.classList.add("displayErrorMessage");
    setTimeout(() => {
      displayErrorElement.style.display = "none";
    }, 4000);
  } else {
    displayErrorElement.style.display = "none";
  }
});
// ---implement local storage----------
const fullName = document.getElementById("fullname");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");

function preserveData() {
  const userObject = {
    firstName: firstName.value,
    lastName: lastName.value,
    fullName: fullName.value,
    message: message.value,
    email: email.value,
  };
  localStorage.setItem("userInfo", JSON.stringify(userObject));
}
firstName.addEventListener("focusout", preserveData);
lastName.addEventListener("focusout", preserveData);
email.addEventListener("focusout", preserveData);
fullName.addEventListener("focusout", preserveData);
message.addEventListener("focusout", preserveData);

const objParsed = JSON.parse(localStorage.getItem("userInfo"));
firstName.value = objParsed.firstName;
lastName.value = objParsed.lastName;
message.value = objParsed.message;
email.value = objParsed.email;
fullName.value = objParsed.fullName;
