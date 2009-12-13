# Leather Couch

relax. with cows. moo.

_in other words_: JavaScript CouchDB interface using mootools

## Basic Usage

It goes.

    var db = new LeatherCouch.Database('http://localhost:5984/posts');
    db.get('hello-world', function(doc) { console.log(json) });

## Sanity-Saving Instructions

Remember kids, friends don't let friends do cross-port XMLHTTPRequests. If
you're serving your js on one port (or domain) and couch from another, your
browser will threaten you with a knife (or a NETWORK_ERR).

If you're serving up your static content on port 3000 (as I do with
staticmatic preview), and you have an installation of Apache, the following
vhost definition will help you out:

    <VirtualHost *:80>
      ServerName "comfycouch.local"

      ProxyRequests Off

      <Proxy *>
        Order deny, allow
        Allow from all
      </Proxy>

      ProxyPass /couch http://localhost:5984
      ProxyPassReverse /couch http://localhost:5984

      ProxyPass / http://localhost:3000/
      ProxyPassReverse / http://localhost:3000/
    </VirtualHost>

# Copyright

Copyright (c) 2009 David Goodlad. See LICENSE for details.
