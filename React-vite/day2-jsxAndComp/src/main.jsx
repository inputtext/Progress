import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./About.jsx"

createRoot(document.getElementById('root')).render(<App />);//app as a functional component which updates in real time
//createRoot(document.getElementById('root')).render(App());//App as a normal function call , not updates in realtime

//About Functional component
//calling a function as an element of the html =jsx functional component -> ex) <App/> where App is a function
/* the first letter of the functinal component where it is made would always be capital
 */




/* hmr =hot module replacement-algo maybe of the vite which tracks the changes in the virtual Dom tree
it performs :
Reconscialiation
render phase
diffing algo
real dom chnge commit phase
paint on screen


 */











//<App/> is a JSX
//React is a single page app , it can only render a single component (here app) at a time and show on the screen

//index.css & main.jsx is all we need


/*  Things to do as per start of the project :
1.Strict mode removefrom the import at main.jsx
2.Remove/Delete app.css from the file
3.Modify the app.jsx by removing the import.app.css
4.Remove the content of app.jsx
*/

/* Sirf app.jsx main.jsx ur index.css hi dilkhni chahiye src mei  */











//import { StrictMode } from 'react' // checks the code by running react 2 times
