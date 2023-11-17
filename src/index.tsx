import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import store, {persistor} from "./redux/store/index"
import {SkeletonTheme} from "react-loading-skeleton";
import {PersistGate} from "redux-persist/integration/react";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Provider store={store}>
           <PersistGate persistor={persistor} loading={null}>
               <BrowserRouter>
                   <App />
               </BrowserRouter>
           </PersistGate>
        </Provider>
    </SkeletonTheme>
)
