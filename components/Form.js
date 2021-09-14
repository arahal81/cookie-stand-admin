export default function Form(props) {
  return (
    <div>
      <form
        className="grid items-center justify-center grid-cols-4 gap-5 p-5 mx-20 my-4 text-center bg-green-200 border-2 border-green-400 rounded-lg text-md gap-x-8"
        onSubmit={props.submitBranchHandler}
      >
        <div className="flex flex-col col-span-8 mb-4 ">
          <label
            className="mb-2 font-bold text-grey-darkest"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="px-3 py-2 mx-8 border text-grey-darkest"
            type="text"
            name="location"
            id="location"
            placeholder="Cookie Stand Location"
            // onChange={props.changeHandler}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label
            className="mb-2 font-bold text-grey-darkest width"
            htmlFor="minCustomers"
          >
            min Customers per Hour
          </label>
          <input
            className="px-3 mx-5 border text-grey-darkest"
            type="number"
            name="minCustomers"
            id="minCustomers"
            // onChange={props.changeHandler}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label
            className="mb-2 font-bold text-grey-darkest"
            htmlFor="maxCustomers"
          >
            max Customers per Hour
          </label>
          <input
            className="px-3 mx-5 border text-grey-darkest"
            type="number"
            name="maxCustomers"
            id="maxCustomers"
            // onChange={props.changeHandler}
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label
            className="mb-2 font-bold text-grey-darkest"
            htmlFor="avgCookies"
          >
            Average Cookies per Sale
          </label>
          <input
            className="px-3 mx-5 border text-grey-darkest"
            type="number"
            name="avgCookies"
            id="avgCookies"
            // onChange={props.changeHandler}
          />
        </div>

        <button
          className="px-5 py-5 bg-green-500 rounded text-green hover:bg-green-600"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
