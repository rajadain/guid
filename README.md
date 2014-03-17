guid
====

A simple online client-side GUID generator in Backbone.

I made this as an exercise in [BackboneJS](http://backbonejs.org), and because I use GUIDs a lot everyday at work. The tools I usually used are [GuidGenerator](http://www.guidgenerator.com/) and [FileFormat](http://www.fileformat.info/tool/guid.htm). While both are splendid tools, I use them with such frequency that having to wait for a page refresh and select the GUIDs to copy them was too cumbersome. This project offers a Copy button made using [ZeroClipboard](http://zeroclipboard.org) and client side GUID generation using [@broofa's technique](http://stackoverflow.com/a/2117523) to make a quick and functional user interface.

Credits
-------

 * [jQuery](http://jquery.com)
 * [BackboneJS](http://backbonejs.org)
 * [Bootstrap](http://getbootstrap.com)
 * [@broofa's technique for GUID generation in Javascript](http://stackoverflow.com/a/2117523)
 * [ZeroClipboard](http://zeroclipboard.org)

Wishlist
--------

 * Add dependency management and build pipeline (concatenation, minification) using Bower
 * Make the various controls in the top of the page have a consistent text baseline
 * Add options for custom seperators between GUIDs
