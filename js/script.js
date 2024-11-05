let currentGalleryIndex = 0; // 目前顯示的畫廊索引，從 0 開始

const galleries = [
    [ //sosig gallery1
        { src: './img/sosigWORK/photo1.gif', caption: '這是作品1的說明文字' },
        { src: './img/sosigWORK/photo2.gif', caption: 'Twitch Emote _made by Lynn' },
        { src: './img/sosigWORK/photo3.png', caption: '這是作品3的說明文字' },
        { src: './img/sosigWORK/photo4.jpg', caption: '這是作品4的說明文字' },
        { src: './img/sosigWORK/photo5.jpg', caption: '這是作品5的說明文字' },
        { src: './img/sosigWORK/photo6.png', caption: '這是作品6的說明文字' },
        { src: './img/sosigWORK/photo7.png', caption: '這是作品7的說明文字' },
        { src: './img/sosigWORK/photo8.png', caption: '這是作品8的說明文字' }
    ],

    [ //sosig gallery2
        { src: './img/sosigWORK/photo9.png', caption: '這是作品9的說明文字' },
        { src: './img/sosigWORK/photo10.png', caption: '這是作品2的說明文字' },
        { src: './img/sosigWORK/photo11.png', caption: '這是作品3的說明文字' },
        { src: './img/sosigWORK/photo12.png', caption: '這是作品4的說明文字' },
        { src: './img/sosigWORK/photo13.png', caption: '這是作品5的說明文字' },
        { src: './img/sosigWORK/photo14.png', caption: '這是作品6的說明文字' },
        { src: './img/sosigWORK/photo15.png', caption: '這是作品7的說明文字' },
        { src: './img/sosigWORK/photo16.png', caption: '這是作品8的說明文字' }
    ],

    [ // shan gallery1
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品2的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
        { src: './img/photo1.png', caption: '這是作品1的說明文字' },
    ],

    [ // shan gallery2
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品2的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
        { src: './img/sosigpfp.png', caption: '這是作品1的說明文字' },
    ]
    
];

const galleryElements = document.querySelectorAll('.gallery'); // 獲取所有的 gallery 元素

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
}



// 初始化顯示第一組圖片
showGallery(currentGalleryIndex, 'sosig'); // 初始顯示 sosig 的第一組作品
