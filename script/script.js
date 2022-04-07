const menu = document.querySelector('.menu');
const navMiddle = document.querySelector('.nav-middle');
const lists = document.querySelectorAll('.mobile-menu-options');

function toggleMenu() {
  navMiddle.classList.toggle('show');
  menu.classList.toggle('show');
}
menu.addEventListener('click', toggleMenu);
lists.forEach((list) => list.addEventListener('click', toggleMenu));
// ----------project detail object------
const projectDetail = [{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
{
  title: 'Multi-Post Stories Gain+Glory',
  popTitle: 'Keeping track of hundreds of components',
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  popupTech: ['Codekit', 'GitHub', 'javaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  imagePlaceholder: './images/Img Plaholder.png',
  imageMobile: './images/Img Plaholder.png',
  imagePopup: './images/Snapshoot Portfoliodesktop.png',
  imageMobilePopup: './images/Snapshoot Portfolio.png',
  seeLive: 'https://yayner2002.github.io/myPortfolio/',
  seeSource: 'https://github.com/yayner2002/myPortfolio',
},
];
// -------------End of project detail object-----

// --------Populate object to html elements when the page loads------
for (let i = 0; i < projectDetail.length; i += 1) {
  const worksNum = 1;
  let tech = '';
  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li>${projectDetail[i].technologies[j]}</li>`;
  }
  document.querySelector('#Portfolio').innerHTML
  += `
          <section class="work-${i + worksNum}">
            <div class="img-holder"><img src="${projectDetail[i].imagePlaceholder}" alt="placeholder" class="img-holder"></div>
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
const popupModal = document.querySelector('#portfolioPopup');
const closePopup = document.querySelector('.close-popup');
const closePopupImage = document.getElementById('closePopupImage');
const displayPopupModal = (i) => {
  const navRight = document.querySelector('.nav-right');
  navRight.style.display = 'none';
  let popupTech = '';
  let tech = '';
  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li>${projectDetail[i].technologies[j]}</li>`;
  }
  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    popupTech += `<li class="technology-list-popup">${projectDetail[i].popupTech[j]}</li>`;
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-popup">
          <span><a href="" class="close-popup">X</a></span>
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
  popupModal.style.display = 'block';
};

document.querySelectorAll('.works-button').forEach((row) => row.addEventListener('click', () => displayPopupModal(row.getAttribute('data-index'))));

const closeModal = document.querySelector('#portfolioPopup');
const closePopupModal = () => {
  closeModal.style.display = 'none';
};
closePopupImage.addEventListener('click', closePopupModal);
closePopup.addEventListener('click', closePopupModal);
/* End of display popup modal */