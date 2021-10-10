

<h4 align="center">A Clone of google forms in React and Nodejs.</h4>

<p align="center">
    The work is modified on great work by <a href="https://github.com/rohitsaini1196/google-forms">rohitsaini1196</a> with minor change made to enable anonymous user accessing the forms.
</p>
      
<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#author">Author</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

---

## About

<table>
<tr>
<td>
  
Hey, It is a clone of _Google Forms_ , it's completely open source and have some extra features. Used React JS with Material UI for front-end and Used NodeJS and MongoDB as backend. Some of the designs and logics are inspired by google forms. You can direct use Form snippet as plugin in your project.  

</td>
</tr>
</table>

## Installation

##### Downloading and installing steps:

* Download or Clone the latest version of the Code.

```console
$ cd google-forms
$ npm install && cd server && npm install 
$ cd ..
$ npm start dev
```

Optionally, use yarn
  
```console
$ npm i -g yarn
```

```console
$ cd google-forms
$ yarn install && cd server && yarn install 
$ cd ..
$ yarn dev
```

 **Boom** it will automatically start the local server for backend and frontend. 
 > *Default Frontend port is 3000 and backend port is 5000*

MongoDB would be used, default connects to `mongodb://localhost:27017/gf`, to change, set an environment variable `MONGO_URL`.



## Features
| All basic and important features|
| :------------- | 
| Google authentication (Login with google) and authorization|
| Search and sort between from by name, date, last modified|
| User profile and settings |
| Answer or fill others form (submit response)|
| Different form types (Anyone with link, Anonymous, some perticular can answer etc.)|
| Can add unlimited questions and maximum 5 options to each question|
| Add image to questions and options (Upload images question and option wise)|
| Deleteting and duplicating the question|
| Drag and Drop questions to sort them accordingly|

etc.

## Screenshots

![Home Page](https://github.com/chiu0602/google-forms/blob/master/screenshots/homepage.png)

![User Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/userview.png)

![User Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/createview.png)

![Submit Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/submitview.png)

![Basic question perview](https://github.com/chiu0602/google-forms/blob/master/screenshots/basic-user-question.png)

![Creater Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/createView-withImage.png)

![Share Link](https://github.com/chiu0602/google-forms/blob/master/screenshots/sharelink.png)

![Creater Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/image-user-view.png)

![Response Preview](https://github.com/chiu0602/google-forms/blob/master/screenshots/response.png)






[See more](https://github.com/chiu0602/google-forms/tree/master/screenshots).






## Author

| [![Rohit Saini](https://res.cloudinary.com/stillhungry/image/upload/c_scale,w_150/v1588051252/cycles/2020-04-28T05:20:52.231Z.jpg)](https://www.linkedin.com/in/rohitsaini1196/) 	|
|:---------------------------------------------------------------------------------------------------------:	|
|                                            **Rohit Saini**                                            	|

## Support

Reach out to me at one of the following places:

- Website at [stillthristy.in](https://www.stillthristy.in/)
- Github at **[rohitsaini1196](https://github.com/rohitsaini1196)**
- E-Mail: **sidsaini1196@gmail.com**


## License

[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://github.com/rohitsaini1196/google-forms/blob/master/licence.md)

- Copyright © [Rohit Saini](https://stillthristy.in/ "Rohit Saini").
