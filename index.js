var pubsub = require("pubsub");

module.exports = newObject;

function newObject(initial){
  var content, updates;

  content = initial || {};
  updates = {};

  self.rm = rm;

  pubsub(self);

  return self;

  function self(key, value){
    if(arguments.length > 1){
      set(key, value);
    }

    return content[key];
  }

  function set(key, value){
    content[key] = value;
    updates.set || ( updates.set = [] );
    updates.set[key] = value;
    publish();
  }

  function rm(key){
    delete content[key];

    if(updates.set.hasOwnProperty(key)){
      delete updates.set[key];
      return;
    }

    updates.rm || ( updates.rm = [] );
    updates.rm.push(key);
    publish();
  }

  function publish(){
    if(publish.timer) return;

    publish.timer = setTimeout(function(){
      publish.timer = undefined;

      var msg = updates;
      updates = {};

      self.publish(msg);
    }, 0);
  }


}
