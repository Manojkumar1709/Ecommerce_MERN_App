import Faq from "../components/Faq";
import '../App.css'

const ContactPage = () => {
  
  return (
   <>
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Faq />
      </div>
      <div className="bg-gray-600 flex flex-col justify-center" id="box1">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-[500px] w-full mx-auto rounded-lg bg-gray-800 p-8 px-8"
          id="box2"
        >
          <h3 className="text-teal-500 text-4xl font-bold text-center my-3">
            Contact Us
          </h3>
          <p className="text-white text-center">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
          <div className="flex flex-col text-white my-3">
            <label className="font-medium text-white">Full name</label>
            <input
              type="text"
              required
              placeholder="Enter your Name"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-white my-3">
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your Email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-white my-3">
            <label className="font-medium">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-white my-3">
            <label className="font-medium">Message</label>
            <textarea
              required
              placeholder="Enter your message"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:outline-none"
            ></textarea>
          </div>
          <button className="w-full my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Submit
          </button>
        </form>
      </div>
   
    </div>
  
   </>
  );
};

export default ContactPage;
