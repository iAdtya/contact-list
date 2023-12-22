// ContactList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  contactSelector,
} from "../redux/Reducers/contactReducers";
import { Link } from "react-router-dom";

export const ContactList = () => {
  const contacts = useSelector(contactSelector);
  // console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div class="flex justify-center mt-36  relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-3/5  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contacts) &&
              contacts.map((contact, id) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact.name}
                  </th>
                  <td class="px-6 py-4">{contact.email}</td>
                  <td class="px-6 py-4">{contact.phone}</td>
                  <td class="flex items-center px-6 py-4">
                    <a
                      href="/"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    {/* <Link
                      to={`/edit/${contact.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link> */}
                    {/* <a
                      href="/"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a> */}
                    <button
                      type="button"
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
