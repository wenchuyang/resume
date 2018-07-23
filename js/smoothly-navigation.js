!function () {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    liTags: null,
    aTags: null,
    initAnimation: function(){
      function animate(time) {//告诉tween我们是间隔多少毫秒动一次，不需要自己手动指定。
        //求间隔的API，根据显卡的不同而改变帧率
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    mouseEvents: function(){
      for (let i = 0; i < this.liTags.length; i++) {
        this.liTags[i].onmouseenter = function (x) {
          let li = x.currentTarget
          li.classList.add('active')
        }
        this.liTags[i].onmouseleave = function (x) {
          let li = x.currentTarget
          li.classList.remove('active')
        }
      }
    },
    scrollToElement: function(element){
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let t = Math.abs((targetTop - currentTop) / 100 * 250)
      // Setup the animation loop.
      var coords = { y: currentTop };
      var tween = new TWEEN.Tween(coords)
        .to({ y: targetTop }, t)
        .easing(TWEEN.Easing.Quartic.Out)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    },
    bindEvents: function(){
      for (let i = 0; i < this.aTags.length; i++) {
        this.aTags[i].onclick = function(x) {
          x.preventDefault()
          let element = document.querySelector(x.currentTarget.getAttribute('href')) /*以这个字符串为选择器来获取元素*/
          this.scrollToElement(element)
        }.bind(this)  //this的绑定，不然就直接用箭头函数取消掉里边一层的this
      }
    },
    init: function (view) {
      this.view = view
      this.liTags = this.view.querySelectorAll('ul > li')
      this.mouseEvents()
      this.aTags = this.view.querySelectorAll('ul > li > a')
      this.bindEvents()
      this.initAnimation()
    }
  }
  controller.init.call(controller, view)
}.call()
