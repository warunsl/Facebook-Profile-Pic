Facebook-Profile-Pic
====================

Code to exploit the facebook profile pic bug. Displays the full size profile photo of profiles which have profile photos marked as private.

Create a bookmarket in the browser with the following code :     

    javascript:(function(){
	var d=document.createElement('script');
	d.setAttribute('type','text/javascript');
	d.setAttribute('src','https://code.jquery.com/jquery-1.11.0-beta3.min.js');
	document.body.appendChild(d);
	})()    

Works with mozilla, not tested with Chrome. 
