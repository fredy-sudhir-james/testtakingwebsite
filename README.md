# Create React App Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# Project Specific Notes

Used [Material UI](https://mui.com) for styles.

No results or calculations are done.

### Available Pages

**1. Landing Page**

A simple landing page with Card like layout that takes the user to the test page based on selection.
![landing-page](https://user-images.githubusercontent.com/39754501/194738685-4b11d8a3-a1de-4d6b-8b20-1f56a125b4b7.png)

**2. Test page**

The actual test page with question and choices. There is no validation as of now, so the user can click the Next button even without making a selection. Once the user reaches the last question the button text changes to **Submit**
![test-page](https://user-images.githubusercontent.com/39754501/194738821-65621817-fe94-4600-965c-d03f2edf9866.png)

If the user refreshes while on the test page, an error like page is displayed
![test-page-refresh](https://user-images.githubusercontent.com/39754501/194738839-968f45bc-6330-4513-bd09-b8a5a078d7ea.png)

**3. Submission page**

A dummy page to represent the completion of the test submission and to show the test results. Currently just plain text with a link to go to the landing page.
![test-submission](https://user-images.githubusercontent.com/39754501/194738929-e36150fd-f7e3-4055-b980-f239c6f8bb70.png)

