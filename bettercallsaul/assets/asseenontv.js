$(document).ready(function(){	

		//set source for all youtube links to be called later
		
		var bcslinkcontent = '<div><object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/wqnHtGgVAUE&hl=en_US&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/wqnHtGgVAUE&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object></div>';
		var fattylinkcontent = '<div><object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/3F2oO98C6Nw&hl=en_US&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/3F2oO98C6Nw&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object></div>';
		var fightinglinkcontent = '<div><object width="640" height="385"><param name="movie" value="http://www.youtube.com/v/oN4PSu8qzNc&hl=en_US&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/oN4PSu8qzNc&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="640" height="385"></embed></object></div>';
					
		//handle click functionality on video thumbs			
			
		$("#videocontentmodule div").click(function() {
		
			// get id of selected video
			var selectedVid = $(this).attr('id');

			
			//based on selected video, replace image selector image with youtube vid
			switch(selectedVid)
			{
				case "bcs":
					//set main panel to have selected video 				
					 $("#videocontentmodule").html(bcslinkcontent);
					 // set right sidebar to have new video selector 
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();	
				 break;		
				case "fatty":
					//set main panel to have selected video 				
					 $("#videocontentmodule").html(fattylinkcontent);
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "fighting":
					//set main panel to have selected video 
					 $("#videocontentmodule").html(fightinglinkcontent);
					 // set right sidebar to have new video selector 
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;		
				default:
					//set main panel to have selected video 				
					 $("#videocontentmodule").html(carllinkcontent);
					 // set right sidebar to have new video selector 
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
			};
			
		});
		
		// handle clicking of sidebar video selector		
		
		$(".testimonialside").click(function() {
	
			// get id of selected sidebar video link
			var selectedVidSide = $(this).attr('id');
				
			//based on selected sidebar video, replace the youtube video in the video area
			switch(selectedVidSide)
			{
				case "bcsside":
					//set main panel to have selected video 				
					$("#videocontentmodule").html(bcslinkcontent);
				break;
				case "fattyside":
					//set main panel to have selected video 				
					$("#videocontentmodule").html(fattylinkcontent);
				break;
				case "fightingside":
					//set main panel to have selected video 
					$("#videocontentmodule").html(fightinglinkcontent);
				break;
				default:
					//set main panel to have selected video 				
					$("#videocontentmodule").html(carllinkcontent);
			};
			
		});
	
});


function killVideoespanol() {
	$("#enespanol").remove();
}

