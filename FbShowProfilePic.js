(function () {
    converted=false;

    getPic=function() {
        if(converted) return;

        // Compute the new URL which has the enlarged pic
        var b=["https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/","https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/","https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn3/","https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn4/","https://scontent-a-lax.xx.fbcdn.net/hphotos-frc1/","https://scontent-a-lax.xx.fbcdn.net/hphotos-frc2/","https://scontent-a-lax.xx.fbcdn.net/hphotos-frc3/","https://scontent-a-lax.xx.fbcdn.net/hphotos-frc4/","https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash1/","https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash2/","https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash3/","https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-ash4/"];
        n=$(".profilePic")[0]["src"].lastIndexOf("/");
        random=Math.floor((Math.random()*11));
        person_img=$(".profilePic")[0]["src"].substr(n+1);
        final_url=b[random]+person_img;

        converted=true;
        lightbox(final_url);
    };

    // Code to display the enlarged pic
    lightbox=function(newImageUrl) {

        aElement = document.createElement('a');
        aElement.setAttribute('rel', 'lightbox');
        aElement.setAttribute('class', 'profilePicThumb');
        aElement.setAttribute('id', 'profile_pic_education');
        aElement.setAttribute('href', newImageUrl);
        aElement.click(function() {
            var imageLink = $(this).find("a.profilePicThumb");
            imageLink.attr("target", "_blank");
            window.open(imageLink.attr("href"));
            return false;
        });

        imgElementNew = document.createElement('img');
        imgElementNew.setAttribute('class', 'profilePic img')
        imgElementNew.setAttribute('src', newImageUrl);

        aElement.appendChild(imgElementNew);

        photoContainerElement = document.getElementsByClassName('photoContainer')[0];
        photoContainerElementFirstChild = photoContainerElement.childNodes[0];
        photoContainerElement.replaceChild(aElement, photoContainerElementFirstChild);

    };

    getPic();

})();