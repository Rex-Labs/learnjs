(function(a){a.fn.headsmart=function(){var c=a(this);d();function d(){var e=[],g="";if(b("h1")){e.push("h1")}if(b("h2")){e.push("h2")}if(b("h3")){e.push("h3")}if(b("h4")){e.push("h4")}if(b("h5")){e.push("h5")}if(b("h6")){e.push("h6")}for(var f=0;f<e.length;f++){c.children(e[f]).addClass("header-level-"+(f+1))}}function b(f){return(c.children(f).length>0)?true:false}}})(jQuery);