## Getting Started

1. Install dependencies using `npm install`
2. Start the app using `npm start` 
3. Go to <http://localhost:3000/> in the browser.

## Answers to the questions: 

1. Assuming the API is slow, some optimizations that could be implemented to improve the user experience: 
- I think the app should always reuse the data from the API and only request the API when new data is needed. 
- Also, showing a loader when retrieving data can let users know the page is currently loading when the API is slow. 

2. Improvements: 
- Currently, it does not support direct access to specific urls such as 'http://localhost:3000/people/2/' because these pages only display the data which is passed by the film component and they don't request data from the APIs by itself. Therefore, it could be improved by checking if any data is passed to this component. If there is no passed data, send a get request based on the url and retrive the data so that it could show on the page. 

- Everytime I click to go back to the film detail page or the film list page, the page needs to reload and retrieve the data from the API again. Therefore, I think the app could be improved by restoring the previous page state but currently I am still trying to figure out how to do it.