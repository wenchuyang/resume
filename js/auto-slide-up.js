/* 滚动到对应位置的时候修改 nav 里边的 highlight */
/** data-x, id 与 <a href="x"> 对应 */
!function(){
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
    let id = specialTags[minIndex].id
    let li = document.querySelector('a[href="#' + id + '"]').parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highLight')
    }
    li.classList.add('highLight')
  }
}.call()

