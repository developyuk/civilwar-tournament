"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),delay=function(){var e=0;return function(n,t){var o=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];o&&clearTimeout(e),e=setTimeout(n,t)}}(),Template=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"flash",value:function(e,n){var t=e?"parsley-success-list":"parsley-errors-list";return'<ul class="'+t+' filled">\n    <li>'+n+"</li>\n</ul>"}}]),e}(),TemplateForm=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"notOpen",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return'<p align="center">Open on <br/>'+e+"</p>"}}]),e}(),initAutocomplete=function(){var e=document.getElementById("register_coffeeshop"),n=new google.maps.places.SearchBox(e);n.addListener("places_changed",function(){var e=n.getPlaces();0!=e.length&&e.forEach(function(e){if(!e.geometry)return void console.log("Returned place contains no geometry");({url:e.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(25,25)});console.log(e),$("#register_coffeeshop_maps").val(JSON.stringify({name:e.name,lat:e.geometry.location.lat(),lng:e.geometry.location.lng(),vicinity:e.vicinity}))})})};