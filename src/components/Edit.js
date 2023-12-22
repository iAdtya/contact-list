export const Edit = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="card card-compact w-96 mt-20 bg-base-100 shadow-xl">
          <h1 className="text-4xl mb-6 mt-10 text-center text-white">
            Edit Contact
          </h1>
          <form className="bg-yellow shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          </form>
          <div className="flex justify-evenly mb-4 ">
            <button className="btn btn-primary">Update Contact</button>
            <button className="btn btn-error ">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};
