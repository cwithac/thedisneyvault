# The Disney Vault

### [Visit The Disney Vault : Hosted on Heroku](https://thedisneyvault.herokuapp.com/)

Build and explore the world of Disney's animated films and characters with The Disney Vault.  Catalog and organize characters into their films.  View the site content at any time.  Sign in to add, update or delete.

**Guest Sign In**:  username: guest | password: guest123

**Note**: Due to the privatization of OMDb API, calls to add to the film model are no longer availalbe.  

![](http://i.imgur.com/vxnAs2v.png)

### View by Film
![](http://i.imgur.com/aUTgaSl.png)

### Or by Character
![](http://i.imgur.com/oBYeJ32.png)

### Technologies Used

```
+ Node.js, Express, EJS
+ Mongo DB, Mongoose
+ OMDB API, AJAX
+ Javascript, jQuery
+ MVC Structure | Models - Users, Films & Characters
+ Partials: head, nav and footer
+ RESTful routes: Complete - Characters | Partial - Films, Users
+ bcrypt password encryption
+ Skeleton Framework | CSS | Responsive design
```

### Implementation Priorities
+ Registration completes login.
+ Ability to view/edit/delete user information.
+ Character with no content warning before adding with defaults.
+ User sees characters they have added (partial build in code).
+ Restrict users from seeing page with URL direct not logged in.

### Upcoming Features
+ Manual add of films option.
+ Hover name of images only on empty character profile pictures.
+ Link characters with tags outside of film (view all sidekicks, villains...).
+ Connect details between character pages (love interest to love interest).
+ Share with social media.

### Known Issues
+ OMDB data not exclusive to Disney and/or Disney animated films.
+ Duplicate data able to be added in both films and characters.
+ No review or validation of images or content for quality (site age rating).
+ No username/password restriction.
+ Film and character information not sorted (alphabetically, by release date...) in view or in dropdown in add.

---

*All images, films and characters property of [The Walt Disney Company](https://thewaltdisneycompany.com/).*

*[The Disney Vault](https://en.wikipedia.org/wiki/Disney_Vault) is the term used by Walt Disney Studios Home Entertainment for its policy of putting home video releases of Walt Disney Animation Studios's animated features on moratorium.*

+ [Disney Studio Licensing](http://www.disneystudiolicensing.com/)
+ [Disney Terms of Use](https://disneytermsofuse.com/)
+ [The Walt Disney Company (Wikipedia)](https://en.wikipedia.org/wiki/The_Walt_Disney_Company)

---
*For educational purposes only.*  

Cathleen Wright for [General Assembly](https://generalassemb.ly/), 2017
