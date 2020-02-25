# Travelarivo

Second project for the Code Institute is a travel blog with sign-up forms. IT employ two APIs. 1) Google Maps API 2) EmailJS API. You can try loading it by clicking [here](https://podvistorcheto.github.io/Milestone-Project-2.0/)
After the page is loaded it introducess a three-stage slider which makes the interface more dynamic with appealing images related to the travel topic. 
# Usage or UX

Upon loading, the website provides the standard slideshow with shortened interval between the slides thanks to a small javascript input in `carousel.js` file. Each slide represents 
different level of interaction. The first slide provides a module to sign up for newsletter stories. Slide two guides the user to explore the world map world with the places visited by 
the site creator while the last deck hints for the forthcoming travel stories to be. 
The navigation bar is consistent along the slideshow. By implementing a slideshow carousel the mobile user type has enhanced experience using the slidescreen option the mobile display.

       - Each slide also includes controls and indicators to provide different users with various types to access to navigate the page. They will be able to do that either by chosing to click on the "< >" arrows or " _ _ _ " indicators.
       - If no controls input is provided by the user the landing page loads the first slide of carousel with relavely smooth interval thanks to a small jquery input.

The purpose of the website is to deliver an seemless experience for different type of visitors. Firstly, it targets  a type of user who are frequent visitors-readers on websites. 
Next to reading a travel story and look into the gallery page, such user type is provided with a sign-up option to receive a newsletter with future stories. 
Secondly, a different level of interaction between the user and the website comes with the inclusion of the Google Maps API. The page has pinpoint markers incldued for each place visited 
around the globe by the site creator. The second online form available ther allows more intrigued type of users to submit a request for receiving a free customised screenshot with their 
trails left around the globe. I beleive this feature suggests a more complete and interactive option for a better user experience.


# Features 

- Sign-up form - allows the user to subscrbe for the newsletter by filling the simple form with required fields
- Gallery - provides more insight on the places visitet
- Explore the map - appeals to the customer to fill out the form with the places visited and will tailored screenshot with trails around the globe
- Contact - provide the user alternative ways to contac the creator of the app

# Features Lef to Implement

- Publish the travel stories in slide 3 subsection accessible via the read stories button to enhance the content
- Publish the active search engine that allows the guest to use it for plannig the next visit with where to stay on the map

# Technologies used

1. HTML
2. CSS
3. Bootstrap (3.3.7)
4. [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
  - The project uses this API to introduce better the purpose of website travelling and the stories from the trips.
5. [EmailJS](https://dashboard.emailjs.com/account/create)
  - The project uses the EmailJS to facilitate the sign-up form submission and send email request 

# Testing

###### screenshots

<img src="images/desktop.PNG" width=350> <img src="images/md.PNG" width=75> <img src="images/sd.PNG" width=50>

### Test 1 Version differences 

The page was successfully tested for compatabiltiy on different browsers like with Chrome, Firefox, Safari and Microsoft Edge. 
When opened in mobile screen the navbar shrinks to button with a dropdown menu.

Three different versions of the website are incldued using media queries. 
- Desktop version: A Standard version for desktop which focuses on the pictures featured and direct gallery access. 
- Mobile version: All slide texts and active buttons remain visible on devices with at least 376px width which means that relatively newer 6-inch mobile displays types will have direct access the subsection (screenshotin the middel.
- Small Mobile version: The content is adapted for smaller displays by not displaying main headline (e.g. ) and shrinking the navigation bar to a dropdown access.

The gallery page shrinks to two columns when accessed from mobile but retains the same amount of content. It shows there columns on a tablet and four columns when opened in a desktop version.


### Test 2 Contact forms

1. Sign up form:
    1. Is tested by clicking to the "Sign up" or just follow the link in the explore map page and then 'click here' 
    2. If the user tries to submit an empty form "!Please fill out this field" pops up.
    3. Trying to submit the form without valid email inpute or missing info in the rest of the blanks results in an unsuccesfull submission
    4. In case a valid input is provided in all fields both forms work properly and can send emails successfully.


# Deployment

The website is pushed online and uploaded from Github. The deployment comes directly from the master branch. 
New features or updates to the deployed version can be made using the command `git commit -m "update"` which will commit the changes over the uploaded version in the master branch. 
To make these changes live the command is git push.

The deployed version can be cloned and run in local environment by typing the command `git clone https://github.com/podvistorcheto/Milestone-Project-2.0.git`. in the editor's terminal. 
If the user wants to remove the connection with this repository can paste in the command `git remote rm origin` in the terminal.


# Content and Media

Pictures on the slides landing pages are take and free to use from [Pexels](https://www.pexels.com/). 
The rest of content from the gallery comes from my personal archive and all texts are written entirely by me.


# Acknowledgements

Thanks to the tutors of the Code Institute for helping to overcome the difficulties about rendering the Google Map API  

The improvement for the interval comes a small piece of code taken from [here](https://getbootstrap.com/docs/4.0/components/carousel/) in Bootstrap.

### adding photo tag

Is this an example Demo of what you'd like to achieve?
`https://www.jqueryscript.net/demo/Image-Hover-Effect-jQuery-Cardify/`
Note: that's a jQuery script, but you don't need a full script to do this, it's simple enough without a script.

Each img tag should actually be something like this:

`<figure>`
 ` <img src="gallery/EFFECTS.jpg" alt="Effects Image">`
  `<figcaption>Some text here about this image.</figcaption>`
`</figure>`

Then, using that layout with jQuery, you could do some logic like this:

`$("figure").hover(function() {`
    `$(this).children("figcaption").show();});`

But you would need to use a bit of CSS to make sure that the figcaption is set inside of the image with an absolute positioning, sizing, etc. (and default should have figcaption as hidden)