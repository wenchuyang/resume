!function(){
    var view = View('#topNavBar')
    var controller = {
      view: null,
      init: function(view){
        this.view = view
        this.bindEvents()
      },
      bindEvents: function() {
        window.addEventListener('scroll', (x) => {
          (window.scrollY > 0) ? this.active() : this.deactive()
        })
      },
      active: function(){this.view.classList.add('sticky')},
      deactive: function(){this.view.classList.remove('sticky')}
    }
    controller.init.call(controller, view)
  }.call()