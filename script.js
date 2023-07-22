
function getVids(){
    /*
    Code that returns all the playlist video DOM elements in a particular playlist.
    */
    var element = document.querySelector("ytd-item-section-renderer.style-scope.ytd-section-list-renderer");
    element = element.querySelector("div#contents")
    element = element.querySelector("div#contents")

    videos = element.getElementsByTagName("ytd-playlist-video-renderer")
    return videos
}

function addOneToQueue(){
    /*
    Code that finds and clicks the add to queue option if the relevant popup is active.
    */
    element = document.querySelector("ytd-menu-popup-renderer>#items")
    element = document.getElementsByTagName("ytd-menu-service-item-renderer")
    
    element[0].click()
}

async function addAllToQueue(videos,start,number){
    /*
    Adds videos from index start to index start + number from videos to queue. High end not included.
    */

    index = start;
    while (index < start + number && index < videos.length){
        video = videos[index];
        button = video.querySelector("div#menu yt-icon-button"); // Finds the button for dropdown.
        await button.click(); // Clicks the more options button and produces dropdown.
        await addOneToQueue(); // Adds the video to the queue.
        index = index + 1;
    }
}


// Driver code
videos = getVids(); // Gets DOM elements. 
addAllToQueue(videos,0,50); // Adds required videos to queue. Here videos numbered from 1 to 50 are added to queue.
