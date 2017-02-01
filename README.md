subsonic-fluid
======
This project contains userscripts and assets for creating a Subsonic desktop client for OSX using [Fluid](http://fluidapp.com/). Icon assets will work in the free version, but to enable userscripts you will need to purchase a license.

Currently supports Next, Previous, Pause/Play.

Update Jan 31 2017: Last version supports HTML5 player in Subsonic 6. Use the subsonic6.js file in the repo. I'll leave the version 5 up in case someone still needs it.

![Screenshot](subsonic6-fluid-screenshot.png "Subsonic desktop app in action")


Notes
-------
The easiest way I've found to manage integrating the script with Fluid is using an include statement in the script editor and pointing it to your .js files. ie window.fluid.include('/path/to/subsonic.js')
    
    