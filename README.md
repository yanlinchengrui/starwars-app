## Getting Started

1. Install dependencies using `npm install`
2. Start the app using `npm start` 
3. Go to <http://localhost:3000/> in the browser.

## Answers to the questions: 

1. Assuming the API is slow, some optimizations that could be implemented to improve the user experience: 
- When the API is slow, I think the app should always reuse the data from the API and only send requests to the API when new data is needed in order to show the data to users as soon as possible. 
- I think instead of displaying a loading spinner until all the data is retrieved, we can gradually display the content which is successfully retrieved from the APIs first and show the loading spinner on the rest of the content. Another way is to display placeholder dummy content to users while waiting for the real content to load. This can set user expectation of where the content will appear and distracts them with something else to look at.

2. Improvements I would make to this application: 
- Currently, it does not support direct access to specific urls such as 'http://localhost:3000/people/2/' because these pages only display the data which is passed by the film component and they don't request data from the APIs. Therefore, it could be improved by checking if any data is passed to this component. If there is no passed data, send a get request based on the url and retrieve the data so that it could show on the page. 

- When I click to go back to the film detail page or the film list page, the page needs to reload and retrieve the data from the API again. Therefore, I think the app could be improved by restoring the previous page state instead of requesting data again but currently I am still trying to figure out a good way to do it.

## Screenshots
!["MainPage"](https://github.com/yanlinchengrui/starwars-app/blob/master/docs/main.png)
!["FilmDetail"](https://github.com/yanlinchengrui/starwars-app/blob/master/docs/filmDetail.png)
!["CharacterDetail"](https://github.com/yanlinchengrui/starwars-app/blob/master/docs/characterDetail.png)