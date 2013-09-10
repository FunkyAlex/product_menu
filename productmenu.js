jQuery(function(){ 
	jQuery('#accordion').accordion({collapsible: true, autoHeight: false, active: 100, heightStyle: 'content'});
  	jQuery('.accordion2').accordion({collapsible: true, autoHeight: false, active: 100, heightStyle: 'content', header: 'div.header2'});
  	
  	
  	jQuery('.fileLink').click(function() {
		window.open(jQuery(this).attr("href"));
  	});
 	 jQuery('.fileLink').hover(
  		function () {
    			$(this).css('text-decoration', 'underline');
  		},
  		function () {
    			$(this).css('text-decoration', 'none');
  		}
	);
	
  	
	
//	for (var i = 0; i < classList.length; i++) {
//    		if (classList[i].indexOf('ui-') !== -1 ) {
//       			jQuery('.accordion2').toggleClass(classList[i]+" subLevel-"+classList[i]);
//    		}
//	};
//	for (var i = 0; i < classListChildren.length; i++) {
//    		if (classListChildren[i].indexOf('ui-') !== -1 ) {
//       			jQuery('.accordion2').children().toggleClass(classListChildren[i]+" subLevel-"+classListChildren[i]);
//    		}
//	};
	
  	
});