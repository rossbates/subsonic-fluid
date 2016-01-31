var fr = parent.frames["playQueue"];

/* setup dock menu on init */
window.fluid.addDockMenuItem("Next", goNext);
window.fluid.addDockMenuItem("Previous", goPrevious);
window.fluid.addDockMenuItem("Pause", togglePause);


/* detects playing state and toggles between play  pause*/
function togglePause() {
    var pl = fr.jwplayer.getPlayers()[0];
    pl.pause();
    if (pl.getState() == 'PLAYING'){
        window.fluid.removeDockMenuItem("Play");
        window.fluid.addDockMenuItem("Pause", togglePause);
    }else if (pl.getState() == 'PAUSED'){
        window.fluid.removeDockMenuItem("Pause");
        window.fluid.addDockMenuItem("Play", togglePause);
    };
};


/* move to previous song, returns null on first */
function goPrevious() {
    fr.onPrevious();
};

/* move to next song in the queue, returns null on last */
function goNext() {
    fr.onNext();
};
