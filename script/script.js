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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
  popDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['Ruby on rails', 'css', 'JavScript', 'html'],
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
const displayPopupModal = (i) => {
  let tech = '';
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    techPop += `<li class="lang-group" id="mobile">${projectDetail[i].popupTech[j]}</li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li class="list-main">${projectDetail[i].exprience[k]}</li>` : `<li class="titles-item">${projectDetail[i].exprience[k]}</li>`;
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-flex">
      <div>
        <div class="works-flex-pop">
          <h3 class="intro-text-works">${projectDetail[i].title}</h3>
          <span> <a href="" class="close-popup">X</a></span>
      </div>
      <ul class="works-flex-item titles-container">
      ${experienceList}
      </ul>
      </div>
      <div class="works-flex-item work-image">
          <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
          <img src="${projectDetail[i].imagePopup}" class="desk-item1" alt="${projectDetail[i].title} project screenshot"/>
      </div>
      <div class="project-tags">
          <div class="work-description">
            <p class="works-flex-item works-description">
              ${projectDetail[i].popDescription}
            </p>
          </div>
          <div class="tags">
              <ul class="lang-container mobile">
              ${tech}
              </ul>
              <ul class="lang-container">
              ${techPop}
              </ul>
              <div class="btn-tags">
                <a href="${projectDetail[i].seeLive}" class="btn-see-project">See Live
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <a href="${projectDetail[i].seeSource}" class="btn-see-project">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
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
closePopup.addEventListener('click', closePopupModal);
/* End of display popup modal */