# SFPOPOS: San Francisco Privately Owned Public Open Spaces

### POPOS are publicly accessible spaces in forms of plazas, terraces, atriums, small parks, and even snippets which are provided and maintained by private developers. In San Francisco, POPOS mostly appear in the Downtown office district area.

### These public spaces are nice places to visit, eat your lunch, meet with friends, or do some work outside the office. The problem is many of these spaces are hard to find or people don't know they exist. This new site is going to solve this problem by showing an image of the space, the name and address of the space, and more information such as the hours the space is open, a description and facilities available these would be things like coffee, bathroom, art, indoors or outdoors etc.

### People visiting this site could be almost anyone of almost any age. Recall the user stories you learned to write in SPD. Let's write some for possible users of our site:

* ### As a user I want to find all of the public open spaces in San Francisco
* ### As a user I want to find a public open space near me
* ### As a user I want to view details about pupblic open spaces I might want to visit.
-----------------------------------
## After settinmg up my routes, for some reason I'm still not sure of, I couldn't run the program, and was given the following error: 

# "opensslErrorStack: [ ‘error:03000086:digital envelope routines::initialization error’ ]"

## this issue is solved by adding '--openssl-legacy-provider'  in the terminal and then in the build and start scripts, as follows: "yarn start --openssl-legacy-provider ./node_modules/.bin/react-scripts 
