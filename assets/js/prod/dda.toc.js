$(document).ready(function(){$(".toc").toc({selectors:"h2,h3,h4",container:".main-content",smoothScrolling:!0,prefix:"toc",onHighlight:function(t){},highlightOnScroll:!0,highlightOffset:100,anchorName:function(t,n,o){return o+t},headerText:function(t,n,o){return o.text()},itemClass:function(t,n,o,e){return o[0].tagName.toLowerCase()}}),$(".toc").sticky({topSpacing:0,bottomSpacing:380})});