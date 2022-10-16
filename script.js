// eslint-disable-next-line no-unused-vars
function closeMenu() {
  document.getElementById('myButtons').style.display = 'none';
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function openMenu() {
  document.getElementById('myButtons').style.display = 'block';
  const blur = document.getElementById('blur');
  blur.classList.toggle('active');
}

const submit = document.getElementById('contact-button');
submit.addEventListener('click', (e) => {
  const email = document.getElementById('email').value;
  const emailLower = email.toLowerCase();
  const text = document.getElementById('text');
  if (email !== emailLower) {
    e.preventDefault();
    text.innerText = '*please enter email without capital letters!';
  }
});

const pName = ['Awesomebooks', 'To-do List', '1st Capstone project', 'PLACEHOLDER 4'];
const description = ['This is the restructured version of the famous awesome-books project! Here you can find JavaScript broken into modules, using import-export where necessary. Also updated the current time feature to use LUXON, which was a project requirement.',
  'This project is an example of the use of webpack utility and logic. The project itself is a to-do list, with multiple functionalities, such as adding and deleting tasks one by one, editing tasks, marking tasks as completed, and deleting all marked tasks with one click.',
  "The first capstone project, where i recreate the Hungarian SZIGET festival's website according to the project-requirement-guidelines. This project is a combination of all the tips and tricks we have learned up to that point."];
const technologies = ['Html', 'Css', 'Javascript'];
const featuredimg = ['./realproject-imgs/awesomebooks-1.JPG', './realproject-imgs/todolist-card1.JPG', './realproject-imgs/capstone-1.JPG', './images/div3-bgr.png'];
const liveLink = ['https://mattgomb.github.io/awesome-books-ES6/', 'https://mattgomb.github.io/Portfolio-project/'];
const sourceLink = ['https://github.com/MattGomb/awesome-books-ES6', 'https://github.com/MattGomb/portfolio-project'];
const infoArray = [
  {
    id: 0,
    name: pName[0],
    featuredimg: featuredimg[0],
    description: description[0],
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    id: 1,
    name: pName[1],
    featuredimg: featuredimg[1],
    description: description[1],
    technologies,
    liveLink: liveLink[1],
    sourceLink: sourceLink[1],
  },
  {
    id: 2,
    name: pName[2],
    featuredimg: featuredimg[2],
    description: description[2],
    technologies,
    liveLink: liveLink[1],
    sourceLink: sourceLink[1],
  },
  {
    id: 3,
    name: pName[3],
    featuredimg: featuredimg[3],
    description: description[1],
    technologies,
    liveLink: liveLink[1],
    sourceLink: sourceLink[1],
  },
];

let counter = -1;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.popbtn').forEach((item) => {
    item.addEventListener('click', () => {
      counter += 1;
      const blur = document.getElementById('blur1');
      blur.classList.toggle('active');
      const div1 = document.createElement('div');
      div1.classList.add('popdiv1');
      const div2 = document.createElement('div');
      div2.classList.add('popdiv2');
      div1.appendChild(div2);
      const id = parseInt(item.parentElement.parentElement.classList[1].replace(/[^\d.]/g, ''), 10);
      const data = infoArray.find((item) => item.id === id);
      const element1 = document.querySelector('body');
      element1.appendChild(div1);
      const title1 = document.createElement('h2');
      title1.classList.add('h2-pop');
      div2.appendChild(title1);
      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      div2.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('popdiv1')[counter].style.display = 'none';
        const blur = document.getElementById('blur1');
        blur.classList.toggle('active');
      });
      const img = document.createElement('img');
      img.classList.add('img-pop');
      div1.appendChild(img);
      title1.textContent = data.name;
      img.src = data.featuredimg;
      const para = document.createElement('p');
      para.classList.add('para-pop');
      div1.appendChild(para);
      para.textContent = data.description;
      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div1.appendChild(ul);
      const btnPopDiv = document.createElement('div');
      btnPopDiv.classList.add('btn-pop-div');
      div1.appendChild(btnPopDiv);
      for (let i = 0; i < technologies.length; i += 1) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = data.technologies[i];

        if (i < 2) {
          if (i === 0) {
            const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            btnPopDiv.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = data.liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'See Live';
          } else if (i === 1) {
            const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            btnPopDiv.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = data.sourceLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'See Source';
          }
        }
      }
    });
  });
});

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function getInput() {
  const input = JSON.parse(localStorage.getItem('input'));
  if (input) {
    name1.value = input.name;
    email.value = input.email;
    message.value = input.message;
  }
}

function storeInput() {
  const input = {
    name: name1.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('input', JSON.stringify(input));
}

getInput();

name1.addEventListener('input', storeInput);
email.addEventListener('input', storeInput);
message.addEventListener('input', storeInput);