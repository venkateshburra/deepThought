// fetch('data.json')
//   .then(response => response.json()) // Parse JSON data
//   .then(data => {
//     console.log(data.tasks[0].assets); // Use the JSON data
//   })
//   .catch(error => console.error('Error:', error));

const MenuList = document.querySelector('.menuList');
const List = document.querySelector('.list');
const arrowImg = document.querySelector('.arrow-img');
const navClose = document.querySelector('.nav_close');
const mainContent = document.querySelector('.main_content');
const heading = document.querySelector('.project_heading');
const taskTitle = document.querySelector('.task_title');
const taskDescription = document.querySelector('.task_decription');
const cardContainer = document.querySelector('.card_container');


const fetchData = async() => {
  const data = await fetch('data.json');
  const response = await data.json();
  // console.log(response);

  const menuText = response.tasks[0].task_title;
  const menuData = response.tasks[0].assets;
  // console.log(menuData[0]);
  menuItem(menuText);
  menuItems(menuData);
  projectHeading(response.title);
  task(response)
  CardOne(menuData[0]);
  CardTwo(menuData[1])
  CardThree(menuData[2]);
  CardFour(menuData[3]);
}

function menuItem(menuText) {
  MenuList.innerHTML += `<li>${menuText}</li>`
}


function menuItems(menuData) {
    menuData.forEach((data) => {
      List.innerHTML += `<li><a>${data.asset_title}</a></li>`
    })
    arrowImg.addEventListener('click', (e) => {
    e.preventDefault();
    navClose.classList.toggle('nav_expand');
  })
  arrowImg.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.classList.toggle('main_expand');
  })

}



function projectHeading(data) {
  heading.textContent +=  data
}

function task(data) {
  taskTitle.textContent += data.tasks[0].task_title;
  taskDescription.textContent += data.tasks[0].task_description;
}

function CardOne(cardItems) {

      const html = `
     <article class="cards">
        <div class="cards_div">
          <h3>${cardItems.asset_title}</h3>
          <img src="/images/Group 1735.png" alt="">
        </div>
        <div class="Description_div">
          <p><span class="span_description">Description:</span>${cardItems.asset_description}</p>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=TiMRwri1xJ8" target="_blank">
            <img class="youtube_video" src="images/image 13.png" alt="Click to play video"">
          </a>
        </div>
       </article> 
      `;
        cardContainer.innerHTML += html;
}

function CardTwo(cardItems) {

  let html = `
  <article class="cards">
      <div class="cards_div">
      <h3>${cardItems.asset_title}</h3>
      <img src="/images/Group 1735.png" alt="">
      </div>
      <div class="Description_div">
        <p><span class="span_description">Description:</span>${cardItems.asset_description}</p>
      </div>
      <div class="thread_div">
      <img src="/images/Vector (1).png" alt="">
      <h2>Thread A</h2>
      </div>

      <div class="thread_task">
      <div class="sub_thread">
        <p>Sub thread 1</p>
        <textarea name="" id="" placeholder="Enter text"></textarea>
      </div>
      </div>
      <div class="thread_task">
      <div class="sub_thread">
        <p>Sub Interpretation  1</p>
        <textarea name="" id="" placeholder="Enter text"></textarea>
      </div>
      </div>
      <div class="select_div">
        <img src="/images/Group 1588.png" alt="">
        <div>
          <select name="" id="">
            <option value="">Select Categ</option>
          </select>
          <select name="" id="">
            <option value="">Select process</option>
          </select>
        </div>
      </div>
      <div class="btn_div">
      <button class="btn"><span>+</span> Sub thread</button>
      </div>

      <div class="thread_task thread_task2">
      <div class="sub_thread sub_thread2">
        <p>Sub thread 1</p>
        <textarea name="" id="" placeholder="Enter text"></textarea>
      </div>
      </div>
  </article>
      `
    cardContainer.innerHTML += html;
}



function CardThree(cardItems) {

  let html = `
     <article class="cards">
      <div class="cards_div">
        <h3>${cardItems.asset_title}</h3>
        <img src="/images/Group 1735.png" alt="">
      </div>
      <div class="Description_div">
          <p><span class="span_description">Description:</span>${cardItems.asset_description}</p>
      </div>

      <div class="structure_div">
        <div class="titlee_div">
          <h3>Title</h3>
          <div class="shadow_div"></div>
          <h1>Content</h1>
        </div>
        <div class="allItems">
          <div class="allFiles">
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Insert</p>
            <p>Format</p>
            <p>Tools</p>
            <p>Table</p>
            <p>Help</p>
          </div>
          <div class="allImages">
            <img src="/images/arrow-curve-left-right.png" alt="">
            <img src="/images/arrow-curve-left-down.png" alt="">
            <img src="/images/arrow-expand-02.png" alt="">
            <p>Paragraph</p>
            <img class="dot" src="/images/more.png" alt="">
          </div>
        </div>
      </div>
      <div class="textField">
        <textarea name="" id=""></textarea>
      </div>
     </article> 
  `
    cardContainer.innerHTML += html;
}


function CardFour(cardItems) {

  let html = `
      <article class="cards">
      <div class="cards_div">
        <h3>${cardItems.asset_title}</h3>
        <img src="/images/Group 1735.png" alt="">
      </div>
      <div class="Description_div">
        <p><span class="span_description">Description:</span>${cardItems.asset_description}</p>
      </div>

      <div class="container_desc">
        <div class="explore_div">
          <img src="/images/Vector (1).png" alt="">
          <h2>Introduction</h2>
        </div>
        <div class="intro_div">
        <p class="para">The 4SA Method , How to bring a idea into progress ?</p>
        <p class="para2">See More</p>
        </div>
      </div>
      <div class="container_desc">
        <div class="explore_div explore_div2">
          <img src="/images/Vector (1).png" alt="">
          <h2>Thread A</h2>
        </div>
        <div class="intro_div">
        <p class="para paras">How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
        <p class="para2">See More</p>
        </div>
      </div>
      <div class="explore_div explore_div2 explore_div3">
        <h2>Example 1</h2>
      </div>
      <div class="intro_div intro_div3">
      <p class="para paras">You have a concept , How will you put into progress?</p>
      </div>
    </div>
     </article> 
  `
    cardContainer.innerHTML += html;
}





fetchData();


