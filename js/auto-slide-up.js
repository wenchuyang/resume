!function(){
  //添加offset类
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  findClosestAndRemoveOffset()
  window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
  })

  function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    //加slideUp动画效果
    specialTags[minIndex].classList.remove('offset')
    //找到这个元素之后再通过id找到该元素对应的a标签
    let id = specialTags[minIndex].id
    let li = document.querySelector('a[href="#' + id + '"]').parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highLight')
    }
    li.classList.add('highLight')
  }
}.call()

