import { useState } from "react";

export const FetchContact = () => {
  let data = "https://jsonplaceholder.typicode.com/users/1";

  fetch(data)
    .then((response) => response.json())
    .then((json) => console.log(json));

  const addContact = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        username: "morpheus",
        email: "morpheus@gmail.com",
        contact: "1234567890",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <>
      <div className="flex mt-24 justify-center ">
        <button
          onClick={addContact}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 	"
        >
          Add Contact
        </button>
      </div>
    </>
  );
};
