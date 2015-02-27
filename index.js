/*|--isVideo.js--|
|--(Javascript function to detect if client supports HTML5 mp4,ogg,webm Video Playback or Not)--|
|--Author : argunner (gunnerar7@gmail.com)(http://github.com/argunner)--|
|--Contributers : Add Your Name Below--|
*/

function isVideo(format){

	var flag = false;
	var decoy = document.createElement('video');
	var hold = "";


	if((typeof format) != 'string'){

		console.log('Type of Argument must be string');
		return;
	}

	if(!format){

		console.log('No Type was passed as argument');
		return;
	}

	switch(format){

		case "mp4":
			hold = 'video/mp4; codecs=avc1.42E01E,mp4a.40.2';
			break;

		case "ogg":
			hold = 'video/ogg; codecs=theora, vorbis';
			break;

		case "webm":
			hold = 'video/webm; codecs=vp8.0, vorbis';
			break;

		default:
			hold = false;
			break;

	}

	if(hold){
		if(decoy.canPlayType && decoy.canPlayType('video/mp4; codecs=avc1.42E01E,mp4a.40.2').replace(/no/,'')){

			flag = true;
		}
	}


	return flag;
}
