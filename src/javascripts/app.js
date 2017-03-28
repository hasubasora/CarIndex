(function() {
    let ft = document.getElementsByTagName("html")[0]; //获取到html标签
    let s = window.screen.width; //获取屏幕的宽度
    window.onresize = () => { //屏幕尺寸改变触发
        let w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    }
})();