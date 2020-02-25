# Travelarivo

Second project for the Code Institute is a travel blog with sign-up forms. IT employ two APIs. 1) Google Maps API 2) EmailJS API. You can try loading it by clicking [here](https://podvistorcheto.github.io/Milestone-Project-2.0/).
Upon loading, it introduces a three-stage slider to make the interface more dynamic with appealing images related to the travel topic. 

# User experience

The purpose of the website is to deliver an seemless experience for different type of visitors. Firstly, it targets  a type of user who are frequent visitors-readers on websites. 
Next to reading a travel story and look into the gallery page, such user type is provided with a sign-up option to receive a newsletter with future travel stories. 
Secondly, a different level of interaction between the user and the website comes with the inclusion of the Google Maps API. The map page has rendered pinpoint markers incldued for each place  
around the globe visited by the site creator. A second online form is available on this page allows more intrigued type of users to submit a request for receiving a free customised screenshot with their 
trails left around the globe. I beleive this feature suggests a more complete and interactive option for better user experience.

The website provides the standard slideshow with shortened interval between the slides thanks to a small javascript input in `carousel.js` file. Each slide represents 
different level of interaction. The first slide provides a module to sign up for newsletter stories. 
Slide two guides the user to explore the world map world with the places visited by 
the site creator while the last deck hints for the forthcoming travel stories to be. 
The navigation bar is consistent along the slideshow. By implementing a slideshow carousel this project aims at the users of mobile devices. 
This feature enhances the experience when users slide over the mobile display.

- Each slide also includes controls and indicators to provide different users with various types to access to navigate the page. User can do that either by clicking on the "< >" arrows or " _ _ _ " indicators.
- If no controls input is provided by the user the landing page loads the first slide with relavely smooth interval thanks to a small jquery input.


# Features 

- Sign-up form - allows the user to subscrbe for the newsletter by filling the simple form with required fields
- Gallery - provides more insight on the places visited
- Explore the map - appeals to the customer to fill out the form with the places visited and will tailored screenshot with trails around the globe thanks to the embedded Google Maps Javascript API
- Contact - provide the user alternative ways to contac the creator of the app
- jQuery - helps with modifing the slideshow interval

## Features Left to Implement

- Publish travel stories in slide 3 subsection accessible via the read stories button to enhance the content
- Add active map search engine like 'Places API' that allows the guest to use it for planning the next visit with where to stay on the map

# Technologies used

1. HTML
2. CSS
3. Bootstrap (4.4.1)
4. [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial):
   - The project uses this API to introduce better the purpose of website travelling and the stories from the trips.
5. [EmailJS](https://dashboard.emailjs.com/account/create)
    - The project uses the EmailJS to facilitate the sign-up form submission and send email request 

# Testing

###### screenshots

<img src="images/desktop.PNG" width=350> <img src="images/md.PNG" width=75> <img src="images/sd.PNG" width=50>

### Test 1 Version Differences 

To make sure and deliver the intended experience the page was successfully tested for compatabiltiy on different browsers like with Chrome, Firefox, Safari and Microsoft Edge. The navbar menu is actvie in all pages where included with active links. 
By convention the navbar home link takes the user to the `index.html` file. When opened in mobile screen the navbar shrinks to button with a dropdown menu (second and third screenshot). The second slide's subsection provide access to the map interface. 
The user needs to enlarge the map to interact with the API and see all the markers.
On slide, three When users enter the subsection by clicking to read the travel stories will notice hints on what the stories will be about and that the stories are 'coming soon'. 


Three different versions of the website are incldued using media queries. 
- Desktop version: A standard version for desktop which focuses on the pictures and direct gallery access with three columns
- Mobile version: All slide texts and active buttons remain visible on devices with at least 376px width. Hence content stays relatively consistent over 6-inch mobile display.
- Small Mobile version: The content is adapted for smaller displays by not displaying main headline (e.g. )and shrinking the navigation bar to a dropdown access.

The gallery page shrinks to two columns when accessed on mobile but retains the same amount of content. It shows three columns on a medim-sized display.

### Test 2 Contact forms

1. Sign up form:
    1. Tested by clicking to the "Sign up" or follow the link in the explore map page and then blue text'click here'.
    2. If the user tries to submit an empty form, an alert "!Please fill out this field" pops up.
    3. Trying to submit the form without valid email input or missing info in the rest of the blanks results in an unsuccesfull submission
    4. In case a valid input is provided in all fields both forms are tested to work properly and can send real-time emails successfully.


# Deployment

The website is pushed online and uploads from Github. The deployment comes directly from the master branch. 
New features or updates to the deployed version can be made using the command `git commit -m "update"`. Running the command will commit the changes over the uploaded version in the master branch. 
To make these changes live the command is git push.

The deployed version can be cloned and run in local environment by typing the command in the editor's terminal`git clone https://github.com/podvistorcheto/Milestone-Project-2.0.git`. 
If the user wants to remove the connection with the repository can paste in the command `git remote rm origin` in the terminal.


# Content and Media

Pictures on the slide pages are free to use and taken from [Pexels](https://www.pexels.com/). 
The rest of content from the gallery comes from my personal archive and all texts are written entirely by me.


# Acknowledgements

Special thanks to the tutors of the Code Institute for helping to overcome the difficulties about rendering the Google Map API  

The improvement for the slide interval comes from small piece of code taken from [here](https://getbootstrap.com/docs/4.0/components/carousel/) in Bootstrap.
