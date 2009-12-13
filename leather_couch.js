/* Leather Couch
 *   relax. with cows. moo.
 *
 * Copyright (c) 2009 David Goodlad. See LICENSE for details.
 **/

/*

Planned usage:

var db = new LeatherCouch.Database('http://localhost:8954/posts');
var id, rev;
db.save({"_id": "hello-world", "title": "Hello World", "body": "Hello, World"},
        function(response) {
          id = response.id;
          rev = response.rev;
        }});
db.get(id, function(doc) { console.log(doc); });
db.design('posts', '_view/all', nil, function(rows) { }); // Asynchronous
db.design('posts', '_view/all', {startkey: "2009-12-15", endkey: "2009-12-18"}, function(row) { });

*/

LeatherCouch = new Object();

LeatherCouch.Database = new Class({
  initialize: function(url) {
    this.url = url;
  },

  get: function(id, callback) {
    var req = new Request.JSON({
                    url: this._url_for('/' + id),
                    onSuccess: function(json, text) {
                                 callback(json);
                               }
                  });
    req.get();
    return req;
  },

  save: function(doc, callback) {
    id = doc._id;
    method = $.chk(id) ? 'PUT' : 'POST'
    var req = new Request.JSON({
                    url: this._url_for('/' + id),
                    data: JSON.encode(doc),
                    onSuccess: function(json, text) {
                                 callback(json);
                               }
                   });
    req.send({ 'method': method }); 
    return req;
  },

  design: function(name, path, options, callback) {
    // TODO don't use Request.JSON, since shows, lists, etc might not be
    // giving json back. This is just temporary to play with views only
    options = $.chk(options) ? options : {}
    var req = new Request.JSON({
                    url: this._url_for('/_design/' + name + '/' + path),
                    data: options,
                    onSuccess: function(json, text) {
                                 callback(json);
                               }
                  });
    req.get();
    return req;
  },

  _url_for: function(path) {
    return this.url + path;
  }
});
