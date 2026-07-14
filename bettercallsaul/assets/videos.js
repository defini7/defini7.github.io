$(document).ready(function(){
		$("#saulvideointro").show();

		//set source for all youtube links to be called later

		var suelinkcontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/pPd67CEL54E?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
		var tigertroublecontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/ll7GSiad0ko?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
		var mailbagcontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/j3DY1_zijgA?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';
		var wayfarercontent = '<iframe width="640" height="385" src="https://www.youtube.com/embed/7B-hSSiaEAw?autoplay=1&rel=0&controls=0&cc_lang_pref=0" frameborder="0" allow="autoplay; encrypted-media"></iframe>';

		//handle click functionality on video thumbs

		$("#videocontentmodule div").click(function() {

			// get id of selected video
			var selectedVid = $(this).attr('id');

			// set code for sidebar, used when clicked


			//based on selected video, replace image selector image with youtube vid
			switch(selectedVid)
			{
				case "suelink":
					//set main panel to have selected video
					 $("#videocontentmodule").html(suelinkcontent);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "tigertrouble":
					//set main panel to have selected video
					 $("#videocontentmodule").html(tigertroublecontent);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "mailbag":
					//set main panel to have selected video
					 $("#videocontentmodule").html(mailbagcontent);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				case "wayfarer":
					//set main panel to have selected video
					 $("#videocontentmodule").html(wayfarercontent);
					 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
				 break;
				default:
				//set main panel to have selected video
				$("#videocontentmodule").html(suelinkcontent);
				 // set right sidebar to have new video selector
					 $("#rightcoltemp").hide();
					 $("#rightcolnav").show();
			};

		});

		// handle clicking of sidebar video selector

		$(".consultationsside").click(function() {

			// get id of selected sidebar video link
			var selectedVidSide = $(this).attr('id');

			//based on selected sidebar video, replace the youtube video in the video area
			switch(selectedVidSide)
			{
				case "suelinkside":
					//set main panel to have selected video
					$("#videocontentmodule").html(suelinkcontent);
				break;
				case "tigertroubleside":
					//set main panel to have selected video
					$("#videocontentmodule").html(tigertroublecontent);
				break;
				case "mailbagside":
					//set main panel to have selected video
					$("#videocontentmodule").html(mailbagcontent);
				break;
				case "wayfarerside":
					//set main panel to have selected video
					$("#videocontentmodule").html(wayfarercontent);
				break;
				default:
					//set main panel to have selected video
					$("#videocontentmodule").html(suelinkcontent);
			};

		});

});

function killVideo() {
	$("#flashcontent").remove();
	$("#saulheader").attr("src","media/images/mainheader_saul_update.jpg");
}

function killVideoespanol() {
	$("#enespanol").remove();
}