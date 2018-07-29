!function(){
  var view = document.querySelector('section.messages')
  var model = {
    fetch: function(){
      var query = new AV.Query('messages');
      return query.find() //返回一个Promise对象
    },
    save: function(name, content){
      var a = AV.Object.extend('messages');
      var b = new a();
      return b.save({  //返回的是一个Promise对象
        content: content,
        name: name
      })
    }
  }
  var controller = {
    view: null,
    model: null,
    messageList: null,
    myForm: null,
    initAV: function(){
      var APP_ID = 'YBcU89eJoAbIc67kLIVtVIUc-gzGzoHsz';
      var APP_KEY = '12kXw2TCeiaLRGRAqPJKvXMF';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    addLiTag: function(name,content){
      let li = document.createElement('li')
      li.innerText = `${name}：${content}`
      this.messageList.appendChild(li)
    },
    addMessage: function(name, content) {
      this.model.save(name, content).then(() => {
        alert('留言成功')
        this.addLiTag(name,content)
      })
    },
    getMessage: function() {
      this.model.fetch().then( (messages) => {
        let array = messages.map((messages) => messages.attributes)
        array.forEach( (message) => {
          this.addLiTag(message.name, message.content)
        });
        return AV.Object.saveAll(messages);
      })
    },
    bindEvents: function(){
      this.myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function(){
      let content = this.myForm.querySelector('input[name=content]').value
      let name = this.myForm.querySelector('input[name=name]').value
      this.addMessage(name, content)
      this.myForm.querySelector('input[name=content]').value = ''
    },
    init: function(view){
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.myForm = this.view.querySelector('#postMessageForm')
      this.initAV()
      this.getMessage()
      this.bindEvents()
    }
  }
  controller.init(view, model)

  
  
  
}.call()
