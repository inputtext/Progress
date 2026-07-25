import { useState } from "react";

export default function BrutalistLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-[#f8f5ef] flex items-center justify-center p-6">

      {/* Background Shapes */}
      <div className="absolute top-12 left-12 h-24 w-24 bg-yellow-300 border-4 border-black rotate-12"></div>
      <div className="absolute bottom-16 right-16 h-32 w-32 bg-pink-400 border-4 border-black -rotate-12"></div>

      {/* Login Card */}
      <div className="relative bg-white border-[5px] border-black shadow-[12px_12px_0px_black] p-10 w-full max-w-md">

        {/* Heading */}
        <h1 className="text-5xl font-black uppercase leading-none">
          LOGIN
        </h1>

        <p className="mt-2 text-sm font-semibold">
          Welcome back. Sign in to continue.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          {/* Email */}
          <div>
            <label className="font-bold uppercase text-sm">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="@gmail.com"
              className="
                mt-2
                w-full
                border-4
                border-black
                bg-white
                px-4
                py-3
                font-semibold
                outline-none
                focus:translate-x-1
                focus:translate-y-1
                focus:shadow-none
                shadow-[6px_6px_0px_black]
                transition-all
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-bold uppercase text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="
                mt-2
                w-full
                border-4
                border-black
                bg-white
                px-4
                py-3
                font-semibold
                outline-none
                focus:translate-x-1
                focus:translate-y-1
                focus:shadow-none
                shadow-[6px_6px_0px_black]
                transition-all
              "
            />
          </div>

          {/* Remember */}
          <div className="flex justify-between items-center text-sm font-bold">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 accent-black"
              />
              Remember me
            </label>

            <button
              type="button"
              className="underline hover:text-red-600 transition"
            >
              Forgot?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              bg-yellow-300
              border-4
              border-black
              py-4
              font-black
              uppercase
              text-lg
              shadow-[8px_8px_0px_black]
              hover:translate-x-2
              hover:translate-y-2
              hover:shadow-none
              transition-all
            "
          >
            Sign In →
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 border-t-4 border-black pt-6 text-center">

          <p className="font-semibold">
            Don't have an account?
          </p>

          <button
            className="
              mt-4
              border-4
              border-black
              px-6
              py-3
              font-black
              uppercase
              shadow-[6px_6px_0px_black]
              hover:bg-black
              hover:text-white
              hover:translate-x-1
              hover:translate-y-1
              hover:shadow-none
              transition-all
            "
          >
            Create Account
          </button>

        </div>

      </div>
    </div>
  );
}
