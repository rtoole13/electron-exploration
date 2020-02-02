# e-sports GUI prototype

## GUI
vertical taskbar on the left, running the height of the main window, link to each window
remainder of area dominated by whatever window is selected
Exit button in upper right, overlaying window

### Windows
#### Library
Vertical "thumbnails" running vertical extent of main window for each game in library
- Drag panels to reorganize order
- On select, panel expands to occupy large percentage of window real estate, other panels compress
#### Streams
Selection of saved streams. Basically iframes to urls of favorite streamers

#### Account
Adjust profile pic
    - new window
Adjust username
    - new window
change password
    - new window
Location
Hosted streams (option to add stream(s) tied to you. Users can add your stream to their stream
page by the social tab)

#### Social
Friends list and following list are panels occupying 30% of the horizontal real estate, stacked on
top of one another.
- ***NOTE*** Each occupies 50% of the entire real estate when no user is selected. On select of a friend/follower, that user's page is displayed, occupying 70% of space, friends list and following list are shifting into their vertical orientation on left.
- *Friends list*
    - Add Friends
    - Remove Friends
    - Friends who've accepted a request show up in list. Can invite to watch an event together


- *Following list*
    - Follow folks, friends or otherwise. A follow is viewable on externally viewed user page

- *Main window*
    - Display selected user's outward facing page. Displays profile pic, basic info shared, any streams, follower count (can select to see who), following count (can select to see who), whether online, whether streaming, frequented streams or games on app.

#### Settings
Display version number
App settings
    - various interactivity settings (no idea yet, will discover options as we go)
Audio settings
    - various interaction sound levels
Addons
    - display installed packages
    - whether to enable/disable
Themes
    - display installed themes
    - select an active theme
Updates
    - display whether updates are available
    - install updates

#### Help
Link to github page
Submit an error/bug report - Allow one to quickly email devs of a bug and/or last caught error stack

### Taskbar
background color: muted blue
default button color: black
selected button color: white

#### Features
Links to all Windows, selected any displays window in main area
On mouse over, button glows
On select, button depresses
Selected button has a minimal glow and white in color

***taskbar mouse-over***
Library - submenu to add a game or remove a game, display type for games (list, thumbnails, etc)
Streams - submenu to add a stream, remove a stream, or add a hosted stream
Account - NONE
Social - NONE
Settings - NONE
Help - NONE
