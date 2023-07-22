# playlist-to-queue
Ever wanted to copy a playlist from YouTube but make a few small changes yourself before listening? The save to library
feature that YouTube provides is a glorified bookmark and does not actually provide a new customisable YouTube playlist for
your use. This tool solves this problem entirely by letting you mass add videos in a playlist to a queue which can later be 
saved into a playlist.

# To use this tool
1) Navigate to the playlist you want to copy.
2) Load the entire playlist, that is scroll down till the very end.
3) Open up developers console.
4) Copy the contents of script.js and paste it in the console.
5) Modify the start and number parameters of the addAllToQueue function call as needed.
6) Execute the code by pressing enter.
7) Wait for the queue to be formed and then click on save to playlist.

# Advantages
1) Little to no technical knowledge required.
2) No API keys or OAUTH required.
3) Versatile and extendable.

# Drawbacks
1) This method causes a lot of lag and might lead to browser crashing for large values of number. Queue size is a maximum of 200 videos to prevent the above issue. Hence, multiple executions with smaller values of number are preferred. Try setting number to be between 50 and 100 and never provide a value above 200.
2) Copies of videos might be present in the queue and subsequently in the playlist. This is usually only for the first few items in the playlist.
3) There is currently no efficient way to utilise this tool for retrieving ungrouped videos using id and adding them to queue. When the above code was modified to do so, the amount of duplicates rose and a few videos went missing in the final saved playlist and the queue.
4) The code will break if the DOM changes.
