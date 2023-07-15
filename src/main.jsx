import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {Provider} from 'react-redux';
import { store } from "./store/store.js";

const root = ReactDOM.createRoot(
    document.getElementById('root'),
  );
  
  root.render(
      <Provider store={store}>
        <App />
      </Provider>
  );