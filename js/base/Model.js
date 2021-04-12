window.Model = function(options){
  var resourceName = options.resourceName
  return {
    init: function(){
      var APP_ID = 'YBcU89eJoAbIc67kLIVtVIUc-gzGzoHsz';
      var APP_KEY = '12kXw2TCeiaLRGRAqPJKvXMF';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function(){
      var query = new AV.Query(resourceName)
      query.limit(4);
      return query.find()
    },
    save: function(obj){
      var a = AV.Object.extend(resourceName)
      var b = new a()
      return b.save(obj)
    }
  }
}