export const Subscribe = () => {
  return (
    <section className="text-center">
      <h1 className="capitalize text-3xl sm:text-5xl font-semibold">
        Latest blogs
      </h1>
      <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
        distinctio ad architecto quam minima unde provident neque, quis ut. At
        velit exercitationem eligendi voluptatem consequuntur aperiam sunt, non
        consectetur!
      </p>
      <form
        action=""
        className="mb-14 flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_rgba(0,0,0,0.5)]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 outline-none "
        />
        <button
          type="submit"
          className="border-1 border-black bg-black text-white p-4 sm:px-8 hover:bg-black/80 active:bg-black/80"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};
