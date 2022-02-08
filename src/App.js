import "./App.css";

import MyRoutes from "./MyRoutes";
import { createStore } from "redux";
import finalRootReducer from "./newReducers/finalRootReducer";
import { Provider } from "react-redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };
  const our_persistReducer = persistReducer(persistConfig, finalRootReducer); //here yo tai localstorage ma store garna ko lagi like combine storage huncha yesle config ma key ra storage provide garnu parcha
  //finalreducer tai localstorage ma jancha
  const my_store = createStore(our_persistReducer); //yesle nayastore banucha from using persiststore

  const persist_store = persistStore(my_store); //yo tao reducer ko instance bhyo//yo tai useSelector jasto bhyo

  //paila suru persisistreducer banauchu jasma hami our_persistreducer tai local storage bhyo
  //tei local storage hami abha store banuchayoum
  //now we use that value of store
  return (
    <Provider store={my_store}>
      {/* yo tai abha common store bhyo sab myroutes lai */}
      <PersistGate persistor={persist_store}>
        {/* here yo persist kai proivder store jasai afnai euta common store ho */}

        <MyRoutes />
      </PersistGate>
    </Provider>
  );
}

//abha yo app tai hamile index.js ma call garne

export default App;
