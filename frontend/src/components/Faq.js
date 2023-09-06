import React from "react";
import { Link } from "react-router-dom";

const FaqItem = ({ imgSrc, title, content }) => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white p-5 rounded-md relative h-full w-full">
        <span>
          <img
            className="bg-gray-200 p-2 mb-5 rounded-full"
            src={imgSrc}
            alt={title}
          />
        </span>
        <h1 className="pb-4 text-2xl font-semibold">{title}</h1>
        <div className="my-5">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12.5"
                  height={16}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                {item}
              </h4>
            </div>
          ))}
          <Link
            className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
            href="#"
          >
            <p>Show All</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4338CA"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={5} y1={12} x2={19} y2={12} />
                <line x1={15} y1={16} x2={19} y2={12} />
                <line x1={15} y1={8} x2={19} y2={12} />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      imgSrc: "https://i.ibb.co/27R6nk5/home-1.png",
      title: "Account Overview",
      content: [
        "Changing your profile picture and other information",
        "First time, what do I do next?"
      ],
    },
    {
      imgSrc: "https://i.ibb.co/GT4KHvJ/card-1.png",
      title: "Payment Options",
      content: [
        "First time, what do I do next?",
        "What is the refund policy if I have to cancel during the month"
      ],
    },
    {
        imgSrc: "https://i.ibb.co/HFC1hqn/people-1.png",
        title: "Profile Preferences",
        content: [
          "First time, what do I do next?",
          "I didnt get a confirmation email, what should I do next"
        ],
      },
      {
        imgSrc: "https://i.ibb.co/HFC1hqn/people-1.png",
        title: "Privacy and Cookies",
        content: [
          "First time, what do I do next?",
          "What is the refund policy if I have to cancel during the month"
        ],
      },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 md:px-8">
        <div className="px-4 xl:px-0 py-10">
          <div className="flex flex-col lg:flex-row flex-wrap">
            <div className="mt-4 lg:mt-0 lg:w-3/5">
              <div>
                <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                  Frequently asked questions
                </h1>
              </div>
            </div>
            <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
              <div className="pt-2 relative  text-gray-600">
                <input
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 xl:px-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} role="cell">
                <FaqItem
                  imgSrc={item.imgSrc}
                  title={item.title}
                  content={item.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
