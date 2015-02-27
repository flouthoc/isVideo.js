# isVideo.js
Javascript to detect if browser supports <b>HTML5 video mp4,ogg,webm playback</b> or not.

#Usage
Getting Started
```html
<script type="text/javascript" src="https://raw.githubusercontent.com/argunner/isVideo.js/master/index.js"></script>
```


####Regular
```js
if(isVideo(format)){
  ....browser supports this code....
  }else{
  .....Some code if browser does not support video playback ...
  }
```

####Formats
```js
  
  MPEG-4  isVideo("mp4")
  OGG     isVideo("ogg")
  WebM    isVideo("webm")
```


###Example

```js
  
  window.onload = function(){
    if(isVideo("mp4")){
      document.getElementById('video').innerHTML = "<video width='320 height='240' controls><source src='f.mp4' type='video/mp4'></video>";
	  }else{
	    ... do nothing ..
	  }
	}
```
