## Book Finder App

A simple and responsive React.js application to search for books in real-time using the Open Library API. The app allows users to type a book name and instantly fetch results with a clean and modern UI powered by Tailwind CSS.

## Features

# Real-time Book Search – Search as you type with live results.

# Responsive Design – Works seamlessly on mobile and desktop.

# Styled with Tailwind CSS – Clean and modern UI.

# React Functional Components & Hooks – Built with useState, useEffect, and useContext.

# Context API – Used for managing global search state.

# Loading State with Animated Loader – Displays a spinner while fetching data.

# Book Details with Images – Displays title, author, and cover image.

## Technologies & Dependencies

React (V18.2.0)

Tailwind CSS (v3)

React Icons

Open Library API

Context API for state management

## Project Structure

book-finder/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── NavBar.js
│   │   ├── Loader/
│   │   │   └── Loader.js
│   │   ├── SearchContext.js
│   |   ├── Home.js
│   │   
│   │
│   |
│   │   
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md


## How It Works

# User enters a search term in the input field.

# The NavBar component updates the global state via Context API.

# Home.js listens for the searchInput change and fetches data from Open Library API:

# https://openlibrary.org/search.json?q=${searchInput}

# Debounce: API calls are delayed using a timer to optimize performance.

# Loader shows while fetching, then results are displayed dynamically.


