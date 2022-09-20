<div id="top"></div>
Live Project Link: https://www.mysimplenotes.app


# MySimpleNotes
Full stack application that uses REST API, Django and React to help create notes. 
Every guest can create an account where all private notes will be placed. 
Application also has implemented login/register/forget password system.

<p align="center">
  <img src="https://i.imgur.com/cw9tTVZ.png" width="80%" height="80%">
</p>
<p align="center">
  <img src="https://i.imgur.com/m4SplTP.png" width="80%" height="80%">
</p>
<p align="center">
  <img src="https://i.imgur.com/SAXgmrB.png" width="80%" height="80%">
</p>
 
 ## Table of contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)

## Technologies Used
* Python 3.9.5
* React v17
* Django 4.0.1
* Django REST 3.13.1
* PyJWT 2.4.0
* PostgreSQL 2.9.3
* HTML5
* CSS3
* Heroku
<p align="right">(<a href="#top">back to top</a>)</p>

## Features:
* User profile
  - Sign up
  - Log in
  - Create, browse, edit, delete notes
  - Support for forget password
  - Confirm / activate account via e-mail address provided during registration

* Other futures:
  - Inputs validation in forms
  - Demo mode to try app without account
  - Caching of notes on the client side
  - ReCaptcha to avoid bots on the site
  

<p align="right">(<a href="#top">back to top</a>)</p>

## Setup
- _To run this project, you need to install [Django](https://docs.djangoproject.com/en/4.0/intro/) then create and active virtual environment_
```
$ python3 -m venv env
```
- _Clone repo and install packages in requirements.txt_ 
```
$ git clone https://github.com/fortyfortyy/MyNotes.git
$ cd ../MyNotes
$ pip install requirements.txt
```
<p align="right">(<a href="#top">back to top</a>)</p>

- _Next_
1. Get a free Security Key at [https://djecrety.ir/](https://djecrety.ir/)
   
2. Enter your SECRET_KEY in `settings.py`
   ```py
   SECRET_KEY = 'ENTER YOUR API'
   ```
3. Run the project in project terminal
   ```
   python3 manage.py runserver
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Email -  d.pacek1@gmail.com

Live Project Link: https://www.mysimplenotes.app

<p align="right">(<a href="#top">back to top</a>)</p>
