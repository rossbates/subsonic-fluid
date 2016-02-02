/*

Fluid App Userscript
Subsonic web interface
author: Ross Bates (rbates@gmail.com)
usage: window.fluid.include('subsonic.js')

*/


queue = parent.frames["playQueue"];
player = null;

/* can't get document DOMContentLoaded event in Fluid, falling back to this */
setTimeout(function(){ playerInit(); }, 5000);

function playerInit(){
    window.console.log("Initilizing player extensions...");
    player = queue.jwplayer.getPlayers()[0];
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
    player.pause();
    if (player.getState() == 'PLAYING'){
        window.fluid.removeDockMenuItem("Play");
        window.fluid.addDockMenuItem("Pause", togglePause);
    }else if (player.getState() == 'PAUSED'){
        window.fluid.removeDockMenuItem("Pause");
        window.fluid.addDockMenuItem("Play", togglePause);
    };
};


/* move to previous song, returns null on first */
function goPrevious() {
    queue.onPrevious();
};

/* move to next song in the queue, returns null on last */
function goNext() {
    queue.onNext();
};
