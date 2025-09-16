import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetContact, searchContact } from "../features/contact/contactSlice";

const AutoSuggest = ({ query, setPayload }) => {
  const { data, loading, error, success } = useSelector(
    (state) => state.contact
  );

  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (success) {
      if (data?.isContactSearchd) {
        setContacts(data?.contacts);
      }
    }
    dispatch(resetContact());
  }, [data, error, success]);

  useEffect(() => {
    dispatch(searchContact(query));
  }, [query]);

  if (!contacts.length) return;

  const exists = contacts.some((c) => c.contactEmail === query);

  if (exists) return;

  return (
    <ul
      className={`py-[10px] list-none absolute top-[48px] right-0 left-0 w-full bg-white border-b border-[#d4d7d9]`}
    >
      {contacts?.map((contact, key) => {
        return (
          <li
            onClick={() =>
              setPayload((prev) => ({
                ...prev,
                emailTo: contact.contactEmail,
              }))
            }
            key={key}
            className={` ${
              key === 0 ? "bg-[#3767ea] text-white" : " bg-white text-black"
            } text-[14px] ps-[10px] truncate relative hover:bg-[#3767ea] hover:text-white py-[2px] cursor-pointer`}
          >
            {contact.contactEmail} {contact.firstname} {contact.lastname}
          </li>
        );
      })}
    </ul>
  );
};

export default AutoSuggest;
