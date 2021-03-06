/* ==========  MENU SHOW Y HIDDEN ========== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* ==========  MENU SHOW ========== */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/* ==========  MENU HIDEDEN ========== */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ==========  REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==========  ACCORDION SKILLS ========== */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})

/* ==========  QUALIFICATION TABS ========== */

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/* ==========  SERVICES MODAL ========== */
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/* ==========  PORTFOLIO SWIPER ========== */

let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


/* ==========  TESTIMONIAL ========== */

let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    },
    mousewheel: true,
    keyboard: true,
});

/* ========== SCROLL SECTIONS ACTIVE LINK ========== */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/* ========== CHANGE BACKGROUND HEADER ==========*/

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ========== SHOW SCROLL UP ==========*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ========== DARK/LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
//I need to add a more personal touch to the about section of the webpage.
//Maybe include some more icons

//Add an animation for the acordion menus

//Highlight work or education when they are currently selected.

//Close the popup windows by clicking anywhere outside of them.

//Link to the bemicode tutorial where I learned how to make this website


//Color switcher
// Get the container elements
var btnContainer = document.getElementById("colors");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("color-circle");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-color");
    current[0].className = current[0].className.replace(" active-color", "");
    this.className += " active-color";
    var r = document.querySelector(':root');
    //Button 1
    if (btns[0].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 1);
    }
    if (btns[1].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 20);
    }
    if (btns[2].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 50);
    }
    if (btns[3].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 130);
    }
    if (btns[4].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 170);
    }
    if (btns[5].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 220);
    }
    if (btns[6].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 250);
    }
    if (btns[7].classList.contains("active-color")) {
        r.style.setProperty('--hue-color', 283);
    }
  });
}


/* ========== BLOG ========== */

//import "../CSS";

//const api_url = "https://dev.to/api/articles";
const api_url = "https://dev.to/api/articles?username=ben";

async function getArticle() {
  const response = await fetch(api_url);
  const data = await response.json();
  const title = data[0].title;
  const link = data[0].url;
  const profilePic = data[0].user.profile_image;
  const tag = data[0].tag_list;
  const name = data[0].user.username;
  const date = data[0].readable_publish_date;
  const article = data[0].user.name;
  const read = data[0].reading_time_minutes;
  document.getElementById("article_title").textContent = title;
  document.getElementById("devArticle").href = link;
  document.getElementById("profile_image").src = profilePic;
  document.getElementById("tags").textContent = tag.map(i => "#" + i);
  document.getElementById("username").textContent = "@" + name;
  document.getElementById("articleBy").textContent = "By " + article;
  document.getElementById("publishedDate").textContent = date;
  document.getElementById("readTime").textContent = read + " minute read";
  //For mulitple articles that you want to display
  function displayMultipleArticles() {
    for (let i = 1; i < 3; i++) {
      let element = document.createElement("div"); //container
      element.className = "devArticle";

      let articleLink = document.createElement("a"); //link
      articleLink.id = "devArticle";
      articleLink.target = "_blank";
      articleLink.rel = "noopener";
      articleLink.href = data[i].url;

      let publishedDate = document.createElement("p");
      publishedDate.id = "publishedDate";
      publishedDate.textContent = data[i].readable_publish_date;

      let articleBy = document.createElement("p");
      articleBy.id = "articleBy";
      articleBy.textContent = "By " + data[i].user.name;

      let readTime = document.createElement("p");
      readTime.id = "readTime";
      readTime.textContent = data[i].reading_time_minutes + " minute read";

      let theTitle = document.createElement("h3"); //title
      theTitle.id = "article_title";
      theTitle.textContent = data[i].title;

      let infoArt = document.createElement("div"); //info container
      infoArt.className = "article-info";

      let emptyDiv = document.createElement("div"); //pfp container

      let theProfileImage = document.createElement("img"); //pfp
      theProfileImage.style.width = "50px";
      theProfileImage.id = "profile_image";
      theProfileImage.src = data[i].user.profile_image;

      
      let anotherEmptyDiv = document.createElement("div"); //tags container

      let tagsInArt = document.createElement("p"); //tag
      tagsInArt.id = "tags";
      let realtags = data[i].tag_list;
      tagsInArt.textContent = realtags.map(i => "#" + i);

      let yourUsername = document.createElement("p"); //username
      yourUsername.id = "username";
      yourUsername.textContent = "@" + data[i].user.username;

      let buttonIcon = document.createElement("i");
      buttonIcon.classList.add("uil");
      buttonIcon.classList.add("uil-arrow-right");
      buttonIcon.classList.add("button__icon");

      let blogButton = document.createElement("span");
      blogButton.classList.add("article__button");
      blogButton.classList.add("button");
      blogButton.classList.add("button--flex");
      blogButton.classList.add("button--small");
      blogButton.classList.add("button--link");
      blogButton.classList.add("services__button");
      blogButton.textContent = "See Article"

      
      element.appendChild(articleLink);
      articleLink.appendChild(publishedDate);
      articleLink.appendChild(theTitle);
      articleLink.appendChild(infoArt);
      articleLink.appendChild(blogButton);
      blogButton.appendChild(buttonIcon);
      infoArt.appendChild(emptyDiv);
      emptyDiv.appendChild(theProfileImage);
      infoArt.appendChild(anotherEmptyDiv);
      anotherEmptyDiv.appendChild(readTime);
      anotherEmptyDiv.appendChild(articleBy);
      anotherEmptyDiv.appendChild(tagsInArt);
      anotherEmptyDiv.appendChild(yourUsername);
      document.getElementById("article__wrapper").appendChild(element);
    }
  }

  displayMultipleArticles();
  console.log(data);
}
getArticle();

let x = 4;
let y = 10;