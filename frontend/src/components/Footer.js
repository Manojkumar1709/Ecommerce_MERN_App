import React from "react";

const Footer = () => {
  const submitButton = () => {
    alert("you have subscribed");
  };

  return (
    <footer className="bg-gray-600 text-center">
      <div className="px-6 pt-6">
        <form action="">
          <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
            <div className="md:mb-6 md:ml-auto">
              <p className="text-gray-300">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div
              className="relative md:mb-6 text-gray-300"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInput1"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.5] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
              >
                Email address
              </label>
            </div>

            <div className="mb-6 md:mr-auto">
              <button
                type="button"
                className="inline-block rounded bg-teal-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={submitButton}
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
        © 2023 Copyright: Ecommerce Application
      </div>
    </footer>
  );
};

export default Footer;
