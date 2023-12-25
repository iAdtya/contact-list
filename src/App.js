import { ContactList } from "./components/ContactList";
import { Navbar } from "./components/Navbar";
import { AddContact } from "./components/AddContact";
import { Edit } from "./components/Edit";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./components/Error";

import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/Reducers/contactReducers";
import { useEffect } from "react";
import  { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <ContactList />,
        },
        {
          path: "/add",
          element: <AddContact />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="absolute inset-0 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
