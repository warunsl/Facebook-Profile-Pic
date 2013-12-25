(function () {
    /*loadfile('https://bitbucket.org/warunsl/facebook-profile-pic/raw/d539f6880043176cb6ccd55eb9d7c745e5a4d1cb/js/jquery-1.10.2.min.js', 'js')*/

    var smallImageObject = $(".profilePic")
    var smallImageUrl = smallImageObject.attr('src');
    var smallImageUrlList = smallImageUrl.split('/');
    var newImageUrlList = new Array();

    $.each(smallImageUrlList , function( index, value ) {
        if(index!=4 && index!=5) {
            newImageUrlList.push(value)
            newImageUrlList.push("/")
        }
    });

    var newImageUrl = "";
    $.each(newImageUrlList, function( index, value ){
        newImageUrl = newImageUrl + value;
    });

    newImageUrl = newImageUrl.substring(0, newImageUrl.length - 1);
    console.log(newImageUrl);

    smallImageObject.attr('src', newImageUrl);

    smallImageObject.on('click', function() {
        /*loadfile('https://bitbucket.org/warunsl/facebook-profile-pic/raw/d539f6880043176cb6ccd55eb9d7c745e5a4d1cb/js/lightbox-2.6.min.js', 'js')
        loadfile('https://bitbucket.org/warunsl/facebook-profile-pic/raw/d539f6880043176cb6ccd55eb9d7c745e5a4d1cb/css/lightbox.css', 'css')*/
        smallImageObject.attr('data-lightbox', newImageUrl);        
    })

    function loadfile(filename, filetype){
        if (filetype=="js"){
            var fileref=document.createElement('script')
            fileref.setAttribute("type","text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if (filetype=="css"){
            var fileref=document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename)
        }
        if (typeof fileref!="undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref)
    }
})();
