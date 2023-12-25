import { useDispatch } from "react-redux";
import { updateContact } from "../redux/Reducers/contactReducers";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const updatedContact = {
      id: id,
      name,
      email,
      phone,
    };

    console.log(updatedContact);

    dispatch(updateContact(updatedContact));
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="card card-compact w-96 mt-20 bg-base-100 shadow-xl">
          <h1 className="text-4xl mb-6 mt-10 text-center text-white">
            Edit Contact
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-yellow shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                required
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="number"
                required
                placeholder="Phone"
              />
            </div>
            <div className="flex justify-evenly ">
              <button type="submit" className="btn btn-primary">
                Update Contact
              </button>
              <button className="btn btn-error ">
                <NavLink to="/">Cancel</NavLink>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
