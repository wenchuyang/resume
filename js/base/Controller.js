window.Controller = function(options){
  var init = options.init
  var object = {
    view: null,
    model: null,
    init: function(view, model){
      debugger
      console.log(this)
      this.view = view
      this.model = model
      this.model.init()
      init.call(this, view, model)
      options.bindEvents.call(this)
    }
  }
  for(key in options){
    if(key !== 'init'){
      object[key] = options[key]
    }
  }
  return object
}