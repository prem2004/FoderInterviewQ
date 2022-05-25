
import { Fragment } from 'react/cjs/react.production.min';
import store from './redux-pract/redux/store';
import {Provider} from 'react-redux'
import CountryListComp from './redux-pract/component/CountryListComp'
import Home from './redux-pract/component/Home'
import explorer from './redux-pract/component/FolderData'

const App=()=>{

  return(
  <Fragment>
    <h1>Hello</h1>
  
  <Provider store={store}>
    <Home explorer={explorer}></Home>
   {/* <CountryListComp/> */}
   
  </Provider>

  </Fragment>
  )
}
export default App;
