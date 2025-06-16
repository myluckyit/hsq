const audio = document.querySelector("#audio");
const control = document.querySelector("#audio-control")
control.addEventListener("click", () => {
    console.log(4, audio.paused);
    audio.play();
});

// const audio = new Audio('./music/music.mp3'); // 替换为实际的音频URL

// // 获取按钮元素
// const control = document.getElementById('audio-control');

// // 为按钮添加点击事件监听器
// control.addEventListener('click', function () {
//     // 尝试播放音频
//     audio.play()
//         .then(() => {
//             console.log('音频开始播放');
//         })
//         .catch(error => {
//             console.error('播放音频时出错:', error);
//         });
// });


//icon调用
lc_lightbox('.elem', {
    wrap_class: 'lcl_fade_oc',
    gallery: true,
    thumb_attr: 'data-lcl-thumb',
    skin: 'minimal',
    radius: 0,
    padding: 0,
    border_w: 0,
});

//app
var myapp = new Swiper('#app', {
    loop: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.appRight',
        prevEl: '.appLeft',
    },
    effect: 'coverflow',
    slidesPerView: 3,// 三张
    centeredSlides: true,
    coverflowEffect: {
        rotate: 20,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows: true
    },
    autoplay: {
        delay: 123000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});

var app = document.getElementById("app");
app.onmouseover = function () {
    myapp.autoplay.stop();
}
app.onmouseout = function () {
    myapp.autoplay.start();
}