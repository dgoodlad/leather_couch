/* Leather Couch
 *   relax. with cows. moo.
 *
 * Copyright (c) 2009 David Goodlad. See LICENSE for details.
 **/

/*

Planned usage:

var db = new LeatherCouch.Database('http://localhost:8954');
var id = db.save({"title": "Hello World", "body": "Hello, World"});
var rows = db.design('posts', '_view/all'); // Synchronous
db.design('posts', '_view/all', nil, function(rows) { }); // Asynchronous
db.design('posts', '_view/all', {startkey: "2009-12-15", endkey: "2009-12-18"}, function(row) { });

*/

LeatherCouch = new Object();

LeatherCouch.Database = new Class({
  initialize: function(url) {
    this.url = url;
  },

  get: function(id) {
    // return document or null
  },

  save: function(doc) {
    // save existing doc or create new one
    // return id/rev
  },

  design: function(name) {
    // return design document at /_design/[name]
  }
});

LeatherCouch.Document = new Class({
  initialize: function(id) {
    
  }
});

LeatherCouch.DesignDocument = new Class({
  extends: [ LeatherCouch.Document ],

  view: function(name) {
  },

  list: function(list, view) {
  },

  show: function(name, id) {
  }
});
