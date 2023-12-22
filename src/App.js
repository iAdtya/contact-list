import { Provider } from "react-redux";
import { ContactList } from "./components/ContactList";
import { Navbar } from "./components/Navbar";
import { store } from "../src/redux/Store/store";
import { BrowserRouter, Route, Routes } from "react-router";
import { AddContact } from "./components/AddContact";
import { Edit } from "./components/Edit";

function App() {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Navbar />
      <Provider store={store}>
        <ContactList />
        {/* <BrowserRouter>
          <Routes>
            <Route path="" element={<ContactList />}></Route>

            <Route path="/add" element={<AddContact />}></Route>

            <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter> */}
      </Provider>
    </div>
  );
}

export default App;
