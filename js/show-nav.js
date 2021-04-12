!function(){
    let showNav = View('#showNav')
    let navBar = View('#navBar')
    let controller = {
        view: null,
        init: function(view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function() {
            this.view.showNav.addEventListener("click", (e)=>{
                e.preventDefault()
                this.view.showNav.classList.toggle("active")
                this.view.navBar.classList.toggle("active")
                if (this.view.navBar.classList.contains("active")) {
                    document.querySelector("body").style.overflow = "hidden"
                } else {
                    document.querySelector("body").style.overflow = "auto"
                }
            })            
        }
    }
    controller.init.call(controller, {showNav, navBar})
}.call()


