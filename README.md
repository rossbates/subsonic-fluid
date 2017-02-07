subsonic-fluid
======
This project contains userscripts and assets for creating a Subsonic desktop client for OSX using [Fluid](http://fluidapp.com/). Icon assets will work in the free version, but to enable userscripts you will need to purchase a license.

Currently supports Next, Previous, Pause/Play.

Update Jan 31 2017: Last version supports HTML5 player in Subsonic 6. Use the subsonic6.js file in the repo. I'll leave the version 5 up in case someone still needs it.

![Screenshot](subsonic6-fluid-screenshot.png "Subsonic desktop app in action")


Notes
-------
The easiest way I've found to manage integrating the script with Fluid is using an include statement in the script editor and pointing it to your .js files. ie window.fluid.include('/path/to/subsonic.js')


Install (SubSonic 6.0 HTML Player)
-------
- Purchase Fluid (afterwards recreate the SubSonic app).
- SubSonic -> In the tool bar (between Window & help), click on the lighting bolt -> Open Scripts Folder
  - Path: `/Users/<username>/Library/Application Support/Fluid/`
- Save the contents of [subsonic6.js](https://raw.githubusercontent.com/rossbates/subsonic-fluid/master/subsonic6.js) to: `./subsonic6.js`
  - Path: `/Users/<username>/Library/Application Support/Fluid/subsonic6.js`
- SubSonic -> Window -> Userscript
- (Bottom left), `+` (To create a new userscript) -> Patten `*<IP>:<port>*`
  - Example: `*192.168.1.10:8080*`
- Contents: `window.fluid.include('/Users/<username>/Library/Application Support/Fluid/subsonic6.js');`
- Quit and re-open SubSonic to double check (may take a few seconds for the script to start working)
- Enjoy