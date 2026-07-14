$(document).ready(function(){	

	//set source for all youtube links to be called later
	
	var badgerlinkcontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/Db-RFNJDO3s?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
	var wendylinkcontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/P-nhEHXQcTs?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
	var carllinkcontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/nDc-LNW8z18?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
				
	//handle click functionality on video thumbs			
		
	$("#videocontentmodule div").click(function() {
	
		// get id of selected video
		var selectedVid = $(this).attr('id');

		
		//based on selected video, replace image selector image with youtube vid
		switch(selectedVid)
		{
			case "carl":
				//set main panel to have selected video 				
				 $("#videocontentmodule").html(carllinkcontent);
				 // set right sidebar to have new video selector 
				 $("#rightcoltemp").hide();
				 $("#rightcolnav").show();	
			 break;		
			case "wendy":
				//set main panel to have selected video 				
				 $("#videocontentmodule").html(wendylinkcontent);
				 $("#rightcoltemp").hide();
				 $("#rightcolnav").show();
			 break;
			case "badger":
				//set main panel to have selected video 
				 $("#videocontentmodule").html(badgerlinkcontent);
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
			case "carlside":
				//set main panel to have selected video 				
				$("#videocontentmodule").html(carllinkcontent);
			break;
			case "wendyside":
				//set main panel to have selected video 				
				$("#videocontentmodule").html(wendylinkcontent);
			break;
			case "badgerside":
				//set main panel to have selected video 
				$("#videocontentmodule").html(badgerlinkcontent);
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