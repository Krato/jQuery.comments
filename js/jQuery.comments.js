/**
 * This jQuery function retrives the comments inside a html or jQUery element
 * You need to use like $("#mycontainer").comments(true) or $myElement.comments(true)
 * @copyright Eric Lagarda 2017
 * @author Eric Lagarda <info@ericlagarda.com>
 * @version 1.0
 * @license MIT
 *
 *
 * @memberof jQuery
 * @param  {Boolean} parseComments - If yo want to parse the comments to get only inside comments or get all the comment including brackets
 * @param  {String} separator If you want to add a separator. Only in multilines comments
 * @return {array}
 */
;(function($){
	$.fn.comments = function(parseComments, separator) {
		if(!separator) {
			separator = '';
		}
		let eComments = [];
		this.each(function( intI, objNode ) {
			let html = $(objNode).html();
			if(objNode instanceof jQuery) {
				html = $(objNode);
			}
			if(html !== undefined && html.match(/<!--[\s\S]*?-->/g )){
				let matches = html.match(/<!--[\s\S]*?-->/g );
				for (i = 0; i < matches.length; i++) { 
					eComments.push(matches[i]);
				}
			}
			
		});
		if (parseComments) {
			const regex = /<!--([\s\S]*?)-->/g;
			let m;
			let eCommentsParsed = [];
			$(eComments).each(function(index, commentString) {
				while ((m = regex.exec(commentString)) !== null) {
					if (m.index === regex.lastIndex) {
				        regex.lastIndex++;
				    }
				    if (m[1]) {
				    	let comment = $.trim(m[1]);
				    	if (comment.indexOf('\n') !== -1) {
				    		let commentTrimmed = '';
				    		comment = comment.replace(/[\r\n]/g, "|")
				    		commentSplit = comment.split("|");
				    		for (e = 0; e < commentSplit.length; e++) {
			    				commentTrimmed += $.trim(commentSplit[e]) + " " + separator + " ";
				    		}
				    		if(separator != '') {
				    			console.log(separator.length);
				    			comment = commentTrimmed.slice(0, -separator.length);
				    		} else {
				    			comment = commentTrimmed.slice(0, -1);
				    		}
				    	}
				    	eCommentsParsed.push(comment);
				    }
				}
			});

			eComments = eCommentsParsed;

		}
		return eComments;
	};
})(jQuery);