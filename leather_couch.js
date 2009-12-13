/* Leather Couch
 *   relax. with cows. moo.
 *
 * Copyright (c) 2009 David Goodlad. See LICENSE for details.
 **/

/*

Planned usage:

var db = new LeatherCouch.Database('http://localhost:8954/posts');
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

  get: function(id, callback) {
    return new Request.JSON({
                 url: this.url_for('/' + id),
                 onSuccess: function(json, text) {
                              if(json['ok'] == 'true') {
                                callback(json);
                              } else {
                                callback(null);
                              }
                            }
               }).get();
  },

  save: function(doc, callback) {
    // save existing doc or create new one
    // return id/rev
    id = doc._id;
    method = $.chk(id) ? 'PUT' : 'POST'
    return new Request.JSON({
                 url: this.url_for('/' + id),
                 onSuccess: function(json, text) {
                              if(json['ok'] == 'true') {
                                callback(json);
                              } else {
                                callback(null);
                              }
                            }
                 }).send({ 'method': method }); 
  },

  design: function(name) {
    // return design document at /_design/[name]
    return new LeatherCouch.DesignDocument(this.url_for('/_design/' + name));
  }
});

LeatherCouch.DesignDocument = new Class({
  initialize: function(url) {
    this.url = url;
  },

  view: function(name) {
  },

  list: function(list, view) {
  },

  show: function(name, id) {
  }
});
