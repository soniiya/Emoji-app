# Building an Emoji application using Reactjs
This project is built using react.js using this api https://emojihub.yurace.pro/api/all to fetch all te emojis.

## Description
First, I created a different component that will render the api data named ApiData.js.Then I wrote the function getData() that will fetch the data from api. 
I used react hooks useEffect and useState in order to fetch and render data. I wrote code for the user interface part of rendered data.The app provides a user-friendly interface where emojis can be filtered based on their categories, and 10 emojis are displayed per page with pagination controls.

## Live preview
https://emoji-react-app.netlify.app

## Features:
Filter by Category: Users can select a category from the dropdown menu to filter the emojis based on their categories. The "All" option displays all emojis without any filter.

Pagination: The app displays 10 emojis per page. Users can navigate through different pages using the pagination controls, which dynamically adjusts the emojis shown on the page.

## Screenshots
I've uploaded screenshots as well, you can check!!

## Installation and setup
git clone https://github.com/soniiya/Emoji-app.git

## Navigate to project directory
cd react-app

## Install depedencies
npm install

## Run the development serer
npm sart

## API data 
The app fetches emoji data from the  'https://emojihub.yurace.pro/api/all' . The API data includes properties such as name, category, group, and htmlCode, which are used to display the emojis and filter them based on categories.

## Customization
You can customize the app by replacing the API URL in the Apidata.js component with your own API endpoint containing the emoji data.

## Contribution
Contributions to this project are welcome! Feel free to open issues, submit pull requests, or suggest improvements. Please follow the project's code of conduct.





