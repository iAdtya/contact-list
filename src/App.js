import { Provider } from "react-redux";
// import { FetchContact } from "./components/fetchContact.js";
import { ContactList } from "./components/ContactList.js";
import { Navbar } from "./components/Navbar.js";
import { store } from "../src/redux/Store/store";
function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Provider store={store}>
        <Navbar />
        {/* <FetchContact /> */}
        <ContactList />
      </Provider>
    </div>
  );
}

export default App;
