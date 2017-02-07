/*
Fluid App Userscript
Subsonic 6 web interface (HTML5 Player)
author: Ross Bates (rbates@gmail.com)
usage: window.fluid.include('subsonic6.js');
*/


queue = parent.frames["playQueue"];
player = null;

/* can't get document DOMContentLoaded event in Fluid, falling back to this */
setTimeout(function(){ playerInit(); }, 5000);

function playerInit(){
    window.console.log("Initilizing player extensions...");
    player = queue.localPlayer; //html5 audio player embedded in the playQueue
    window.fluid.addDockMenuItem("Next", goNext);
    window.fluid.addDockMenuItem("Previous", goPrevious);
    window.fluid.addDockMenuItem("Pause", togglePause);
    //player.onPlay(function() {playerStarted();});
    //player.onPause(function() {playerPaused();});
};


function playerStarted(){
    //stub player start
};

function playerPaused(){
    //stub player pause
};



/* detects playing state and toggles between play & pause */
function togglePause() {
    getPlayerWindow().keyboardShortcut("togglePlayPause");
    if (player.paused) {
            window.fluid.removeDockMenuItem("Pause");
            window.fluid.addDockMenuItem("Play", togglePause);

            } else {
            window.fluid.removeDockMenuItem("Play");
            window.fluid.addDockMenuItem("Pause", togglePause);
    }


};


/* move to previous song, returns null on first */
function goPrevious() {
    getPlayerWindow().keyboardShortcut("previous");
};

/* move to next song in the queue, returns null on last */
function goNext() {
    getPlayerWindow().keyboardShortcut("next");
};