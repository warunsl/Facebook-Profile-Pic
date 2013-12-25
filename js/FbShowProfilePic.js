(function () {
    var converted = false;
    var smallImageObject;
    var newImageUrl;

    function getPicUrl() {
        
        if(converted) return;

        smallImageObject = $(".profilePic")
        var smallImageUrl = smallImageObject.attr('src');
        var smallImageUrlList = smallImageUrl.split('/');
        var newImageUrlList = new Array();

        $.each(smallImageUrlList , function( index, value ) {
            if(index!=4 && index!=5) {
                newImageUrlList.push(value)
                newImageUrlList.push("/")
            }
        });

        newImageUrl = "";
        $.each(newImageUrlList, function( index, value ){
            newImageUrl = newImageUrl + value;
        });

        newImageUrl = newImageUrl.substring(0, newImageUrl.length - 1);
        console.log(newImageUrl);

        smallImageObject.attr('src', newImageUrl);

        converted=true;
    }

    smallImageObject.on('click', function() {
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
