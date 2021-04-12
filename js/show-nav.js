!function(){
    let showNav = View('#showNav')
    let navBar = View('#navBar')
    let mainContent = View("#mainContent")
    let controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            this.view.showNav.addEventListener("click", (e)=>{
                e.preventDefault()
                if (window.innerWidth < 768) {
                    this.view.showNav.classList.toggle("active")
                    this.view.navBar.classList.toggle("active")
                    if (this.view.navBar.classList.contains("active")) {
                        this.view.mainContent.classList.add("invisible")
                    } else {
                        this.view.mainContent.classList.remove("invisible")
                    }
                }
            })            
        },
        handleMove: function(e){
            e.preventDefault()
        }
    }
    controller.init.call(controller, {showNav, navBar, mainContent})
    window.onresize = function() {
        if(window.innerWidth>768) {
            mainContent.classList.remove("invisible")
        }
    }
}.call()


