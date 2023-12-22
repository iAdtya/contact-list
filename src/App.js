import { ContactList } from "./components/ContactList";
import { Navbar } from "./components/Navbar";
import { AddContact } from "./components/AddContact";
import { Edit } from "./components/Edit";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <h1>Not found</h1>,
      children: [
        {
          path: "/",
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
