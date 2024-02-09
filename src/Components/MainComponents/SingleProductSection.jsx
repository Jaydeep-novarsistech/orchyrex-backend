import React from "react";

export default function SingleProductSection() {
  return (
    <>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100 mt-20 mb-8">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold mb-4 dark:text-gray-100 mt-[9rem] md:mt-[0rem]">
              Nightwear
            </h2>
            <p className="mb-4 dark:text-gray-300">
              Create your own look with the perfect blend of style and
              confidence with M&S nightwear for men.
            </p>
            <button
              type="button"
              className="w-full py-2 font-semibold rounded bg-violet-400 dark:text-gray-900"
            >
              Shop now
            </button>
          </div>

          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 mt-4 xl:mt-0 dark:bg-gray-500"
          />
        </div>
      </section>
    </>
  );
}
