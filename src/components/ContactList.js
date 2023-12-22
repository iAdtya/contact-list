// ContactList.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchContacts,
  contactSelector,
} from "../redux/Reducers/contactReducers";

export const ContactList = () => {
  const contacts = useSelector(contactSelector);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li className="text-white mt-10 " key={contact.id}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
