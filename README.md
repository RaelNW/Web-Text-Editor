# Web-Text-Editor

This application provides a seamless and convenient way to create, modify, and manage text content without the need for external software, enhancing the overall text editing experience

# Table of Contents

1. [User Stories](#user-stories)
2. [Acceptance Criteria](#acceptance-criteria)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)
6. [Contributors](#contributors)
7. [License](#license)
8. [Links](#links)

## User Stories

AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

- GIVEN a text editor web application
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application
- THEN I should have a registered service worker using workbox
- WHEN I register a service worker
- THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Heroku
- THEN I should have proper build scripts for a webpack application

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:RaelNW/Web-Text-Editor.git
   ```
2. Navigate to the project directory.

3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Run the application:

   ```
   npm start
   ```

2. Access the application at `http://localhost:3000`.

## Technologies Used

- CodeMirror
- IndexedDB
- webpack
- Service Worker (Workbox)
- Next-gen JavaScript
- HTML and CSS

## Contributors

- For inquiries, please contact Rael Wanjala

- Your Contact Information https://github.com/RaelNW

## License

This project has no license

## links

- Repo https://github.com/RaelNW/Web-Text-Editor

- Heroku https://textitnow-6619f5741e70.herokuapp.com/

- Screeenshot
  ![Screenshot 2023-11-01 at 11 57 37 PM](https://github.com/RaelNW/Web-Text-Editor/assets/125225839/84d1bdb9-43ec-445e-a3ae-f62392fc26ef)
