// ContactList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  contactSelector,
  deleteContact,
} from "../redux/Reducers/contactReducers";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const notify = () => toast.success("Deleted Successfully");

export const ContactList = () => {
  const contacts = useSelector(contactSelector);
  const navigate = useNavigate();

  //todo to check if the data is in the state
  // console.log(contacts);
  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    // e.preventDefault();
    dispatch(deleteContact(id));
    console.log("delete");
    navigate("/");
  };

  // useEffect(() => {
  //   console.log(contacts);
  // }, [contacts]);

  return (
    <>
      <div className="flex justify-center mt-24  relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-3/5  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contacts) &&
              contacts.map((contact, id) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact.name}
                  </th>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.phone}</td>
                  <td className="flex items-center px-6 py-4">
                    <NavLink
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      to={`/edit/${contact.id}`}
                    >
                      Edit
                    </NavLink>

                    <button
                      onClick={() => {
                        handleSubmit(contact.id);
                        notify();
                      }}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
