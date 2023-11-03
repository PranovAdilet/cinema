import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import store from "./redux/store/index"
import {SkeletonTheme} from "react-loading-skeleton";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </SkeletonTheme>
)
