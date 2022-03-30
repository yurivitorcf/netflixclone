# Cloning NETFLIX with REACT

_By Bonieky Lacerda_

> **https://www.youtube.com/watch?v=tBweoUiMsDg**

## API - JSON - Test API

> **API for movie and series database**

-  [x] **https://www.themoviedb.org** 

> **Manipulate JSON**

- [x] **http://jsonviewer.stack.hu** 

> **Testing Requisitions**

- [x] **http://resttesttest.com** 

> **Icons from Material-UI**

- [x] **https://material-ui.com/pt/components/material-icons/**



## Project

This project is a simple reproduction of **NetFlix** for studying React, it does not contain all the features. 

For the highlight area and list of movies and series, the **themoviedb** API was used.

## 1. Starting the project

```bash
$ npx create-react-app netflixclone
$ cd netflixclone
$ npm install @material-ui/core @material-ui/icons
$ npm start
```

## 2. File and folder structure

```bash
$ src
	$ components
		FeaturedMovie.css
		FeaturedMovie.js
		Header.css
		Header.js
		MovieRow.css
		MovieRow.js
	App.css
	App.js
	index.css
	index.js
	Tmdb.js
```

## App.js

The main screen has been divided into 3 components: 

* Header - **<Header />**
* Featured - **<FeaturedMovie />**
* List of movie and series - **<MovieRow />**



## ​Tmdb.js

This file contains the communication with the API of *themoviedb.org* that returns a catalog where we find information about movies and series.



## Header

This component only serves to compose the main screen. Contains only the **logo** and **icon** of the logged in user, it has no events.



## FeaturedMovie

This component is responsible for showing a featured movie or series.

Reporting: *score*, *release year*, *total seasons* and *a brief description*.

Every time the page is loaded the highlight changes.

## MovieRow

Este componente é responsavel por mostrar as listas de:

* Netflix Originals;
* Recommended ***trending***;
* Featured ***top rated***;
* Action;
* Comedy;
* Horror; 
* Romance;
* Documentary;

