!function(){
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      let li = x.currentTarget
      li.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      let li = x.currentTarget
      li.classList.remove('active')
    }
  }
  let aTags = document.querySelectorAll('nav.menu > ul > li > a')
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
      x.preventDefault()
      let element = document.querySelector(x.currentTarget.getAttribute('href')) /*以这个字符串为选择器来获取元素*/
      let top = element.offsetTop
  
      let currentTop = window.scrollY
      let targetTop = top - 80
      let t = Math.abs((targetTop - currentTop) / 100 * 250)
      // Setup the animation loop.
      function animate(time) {//告诉tween我们是间隔多少毫秒动一次，不需要自己手动指定。
        //求间隔的API，根据显卡的不同而改变帧率
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
  
      var coords = { y: currentTop };
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quartic.Out)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    }
  }
}.call()
