# Aniflix

## Aniflix Overview

Aniflix is a full stack Netflix clone that specifically focuses on anime content. Signed in users can browse several shows with an abundance of 20+ shows avalible for viewing 
and enjoy video playing feature. Signed in users can also make their own watchlist to organize shows into custom lists and create user profiles for everyone to have their own cutomized watchlist and favorite shows.

## Features

### Profiles

* Logged in users are able to create, update, and delete profiles.

### Watchlist

* Logged in users are able to create, update, and delete watchlists and add shows to them.

### Watch Shows

* Logged in users can navigate to a shows page and watch a clip or a full episode by pressing the play button.

### Tags

* Logged in users can sort shows that are divided into 5 categories based on the studio to made the show.

## Application Architecture

Aniflix is built on a React frontend with a Flask backend, using PostgreSQL as a database.

## Frontend Overview

### React

Aniflix is a React application. All display logic is handled by the React libraries.

### Redux

Aniflix makes extensive use of Redux. All state management is handled with Redux, with thunks making API calls to the backend server for data.

### React Player

The React Player library is used to allow users to view a clip of the show of their choosing.

## Backend Overview

### Flask

Although Express could have done the job as well, Flask was my choice for this project. I didn't have as much experience with it yet as I did with Express and so I wanted to improve upon it. Flask was also easy to work with in that I was able to explicilty see what data would be sent back and what needed to be sent in from the front to work.

## PostgreSQL

PostgreSQL was the database of choice because it is simple to work with, and is easily manipulable using SQLAlchemy.

## SQLAlchemy

SQLAlchemy was the ORM of choice for Aniflix because of how nicely it integrates with PostgreSQL. All table management and data seeding was handled neatly and simply by way of SQLAlchemy.

## Future Plans

So far I am pleased with the progress made on Aniflix's functionality. In the future I would like to implement a search bar to allow users to search for a show on the site.
