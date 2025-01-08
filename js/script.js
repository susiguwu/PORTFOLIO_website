const translations = {
    eng: {
      sosig_intro: `Hi! You can call me sausage as well :D
                  <br><br>
                  I believe that good design is not just about creating an<br>intelligent blend of style, form and function.<br>It is also a form of storytelling, each design should have their<br>own story, or it's just a hollow object without any emotion.`,
      shan_intro: `Hi! I'm ChiaShan , +3 :D
                  <br>
                  I'm a designer brimming with quirky, out-of-the-box ideas.<br>My dream is to sleep well, enjoy delicious food every day.<br>It is also a form of storytelling, each design should have their<br>Then use magic to help others with their design needs. <br>Just tell me what you need, and I'll do my best to make it amazing!`
    },
    zh: {
      sosig_intro: `嗨！你也可以叫我香腸 :D<br>
                  我相信好的設計不只是創造一個風格、形式和功能的智慧結合。<br>它也是一種講故事的方式，每個設計都應該有它們的<br>自己的故事，否則它就只是一個沒有情感的空洞物體。`,
      shan_intro: `嗨！我是 ChiaShan , +3 :D
                  <br>
                  我是一個充滿古怪、跳脫框架的設計師。<br>我的夢想是每天睡得好，吃到美味的食物。<br>設計也是一種講故事的方式，每個設計都應該有它們的<br>然後用魔法幫助別人解決設計需求。<br>告訴我你需要什麼，我會竭盡全力讓它變得更棒！`
    }
  };
  
  const languageSelector = document.getElementById("languageSelector");
  
  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected Language:", selectedLanguage);  // 用來檢查選擇的語言
    applyTranslations(selectedLanguage);
  });
  
  function applyTranslations(language) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      console.log(`Updating element with key: ${key}`);  // 用來檢查是否找到需要翻譯的元素
      if (translations[language] && translations[language][key]) {
        element.innerHTML = translations[language][key];
      }
    });
  }
  
  // 預設語言設置為 English
  applyTranslations("eng");
  

 /*-------^^^切換語言^^^--------*/  

let currentGalleryIndex = 0; // 目前顯示的畫廊索引，從 0 開始

const galleries = [
    [ //sosig gallery1
        { src: './img/sosigWORK/photo1.gif', caption: 'animated emote for Meiy_vl' },
        { src: './img/sosigWORK/photo2.gif', caption: 'Twitch animated emotes' },
        { src: './img/sosigWORK/photo3.png', caption: 'SHCH yearbook cover design' },
        { src: './img/sosigWORK/photo4.jpg', caption: 'photography' },
        { src: './img/sosigWORK/photo5.jpg', caption: 'photography' },
        { src: './img/sosigWORK/photo6.png', caption: 'Twitch Commission Price' },
        { src: './img/sosigWORK/photo7.png', caption: 'Twitch Commission Price2' },
        { src: './img/sosigWORK/photo8.png', caption: 'emote for YdeGaming' }
    ],


    [ // shan gallery1
        { src: './img/shanWORK/photo1.jpg', caption: '' },
        { src: './img/shanWORK/photo2.jpg', caption: '' },
        { src: './img/shanWORK/photo3.jpg', caption: '' },
        { src: './img/shanWORK/photo4.jpg', caption: '' },
        { src: './img/shanWORK/photo5.jpg', caption: '' },
        { src: './img/shanWORK/photo6.jpg', caption: '' },
        { src: './img/shanWORK/photo7.jpg', caption: '' },
        { src: './img/shanWORK/photo8.jpg', caption: '' },
    ],

    
];



/*const galleryElements = document.querySelectorAll('.gallery'); // 獲取所有的 gallery 元素

function showGallery(index, designerId) {

    const totalGalleries = 2; // 每個設計師有兩個畫廊

    // 如果設計師改變了，重置索引
    if (designerId === 'sosig' && index >= totalGalleries) {
        currentGalleryIndex = 0; // sosig 的畫廊重置
    } else if (designerId === 'shan' && index < totalGalleries) {
        currentGalleryIndex = totalGalleries; // shan 的畫廊重置
    }

    const galleryId = `gallery${Math.floor(index / 2) + 1}-${designerId}`; // 根據 index 確定設計師的 gallery ID
    const galleryElement = document.getElementById(galleryId);

    galleryElements.forEach((gallery, i) => {
        gallery.style.display = i === index ? 'grid' : 'none';
        if (i === index) {
            gallery.innerHTML = ''; // 清空容器，避免重複累積圖片
        }
    });

    const currentGallery = galleries[index];
    const galleryContainer = galleryElements[index];

    galleryContainer.innerHTML = '';

    currentGallery.forEach(({ src, caption }) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = '作品';

        img.onerror = () => {
            img.src = './img/placeholder.png';
        };

        img.onclick = () => openLightbox(src, caption); // 傳遞 caption
        galleryContainer.appendChild(img);
    });
}

function showNextGallery(designerId) {
    const designerIndex = designerId === 'sosig' ? 0 : 2; // 根據 designerId 確定索引範圍
    const totalGalleries = 2; // 每個設計師有兩個畫廊

    currentGalleryIndex = (currentGalleryIndex + 1) % totalGalleries + designerIndex; // 正確計算索引
    showGallery(currentGalleryIndex, designerId); // 顯示新的畫廊
}

function showPreviousGallery(designerId) {
    const designerIndex = designerId === 'sosig' ? 0 : 2; // 根據 designerId 確定索引範圍
    const totalGalleries = 2; // 每個設計師有兩個畫廊

    currentGalleryIndex = (currentGalleryIndex - 1 + totalGalleries) % totalGalleries + designerIndex; // 正確計算索引
    showGallery(currentGalleryIndex, designerId); // 顯示新的畫廊
}*/



// 初始化顯示第一組圖片
showGallery(currentGalleryIndex, 'sosig'); // 初始顯示 sosig 的第一組作品

//漢堡選單VVVVVVVVVVVVVVVV
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const btnsItems = document.querySelector('.btns-items');
    btnsItems.classList.toggle('active'); // 切換active類別來顯示/隱藏選單
});