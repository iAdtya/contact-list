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
      <div>
        <button onClick={addContact} className="text-white 	">
          Add Contact
        </button>
      </div>
    </>
  );
};
