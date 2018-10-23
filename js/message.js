!function(){
  var view = View('section.messages')
  var model = Model({'resourceName': 'messages'})
  var controller = Controller({
    messageList: null,
    myForm: null,
    init: function(view, model){
      this.messageList = view.querySelector('#messageList')
      this.myForm = view.querySelector('#postMessageForm')
      this.getMessage()
    },
    addLiTag: function(name,content){
      let li = document.createElement('li')
      li.innerText = `${name}：${content}`
      this.messageList.appendChild(li)
    },
    addMessage: function(name, content) {
      this.model.save({
        'name': name, 
        'content': content
      }).then(() => {
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
    saveMessage: function(){
      let content = this.myForm.querySelector('input[name=content]').value
      let name = this.myForm.querySelector('input[name=name]').value
      if(name === ''){
        alert('请填写您的姓名')
      }else if(content === ''){
        alert('您忘记了填写留言内容哦')
      }else{
        this.addMessage(name, content)
        this.myForm.querySelector('input[name=content]').value = ''
      }
    },
    bindEvents: function(){
      this.myForm.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessage()
      })
    }
  })
  console.log(controller)
  debugger
  controller.init.call(controller, view, model)
}.call()
