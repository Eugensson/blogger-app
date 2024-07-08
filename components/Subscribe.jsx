"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post("/api/email", formData);

    if (response.data.success) {
      toast.success(response.data.message);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

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
        onSubmit={onSubmitHandler}
        className="mb-14 flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_rgba(0,0,0,0.5)]"
      >
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
