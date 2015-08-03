Setup Filewatchers in PhpStorm

Open the filewatchers panel in your preferences

Menu PhpStorm
    -> Preferences
        -> Tools
            -> File Watchers
            
at the bottom of the panel click on the "Import" icon and select the
watchers.xml file located in the /utils folder of this project

This will setup the following filewatchers:
    sass ( using libsass )
    jade
    coffeescript
                
Initialize the Bower Dependencies

Open the "Terminal" panel at the bottom of the PhpStorm window
type "bower install". All the necessary bower components will be 
loaded into the src/bower_components directory



LiveEdit configuration

Go to the Run->Edit Configurations panel
Click the "+" icon and select "Javascript Debug" from the popup menu
Give the new configuration a name like "home"
Click the "..." icon to the right of the url field, select the index.html file from the file selector
Ok, your Run/Debug configuration is set, close the panel
Now click on the green debugger icon. Make changes to your index.jade file. Watch Chrome update the page!