import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    enrollment: "",
    branch: "",
    semester: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-[#f8f5ef] flex items-center justify-center p-8">

      {/* Decorations */}
      <div className="absolute top-10 left-10 h-24 w-24 rotate-12 bg-yellow-300 border-[5px] border-black"></div>

      <div className="absolute bottom-10 right-10 h-32 w-32 -rotate-12 bg-pink-400 border-[5px] border-black"></div>

      <div className="w-full max-w-2xl bg-white border-[5px] border-black shadow-[12px_12px_0px_black] p-10">

        <h1 className="text-5xl font-black uppercase">
          Join DevCollective
        </h1>

        <p className="mt-2 font-semibold">
          Create your student account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Full Name */}

          <div>
            <label className="font-black uppercase text-sm">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="fullname"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold shadow-[6px_6px_0px_black] outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
            />
          </div>

          {/* Email */}

          <div>
            <label className="font-black uppercase text-sm">
              College Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="student@ghrcem.raisoni.net"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold shadow-[6px_6px_0px_black] outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
            />
          </div>

          {/* Enrollment */}

          <div>
            <label className="font-black uppercase text-sm">
              Enrollment Number
            </label>

            <input
              type="text"
              name="enrollment"
              placeholder="2201012345"
              value={formData.enrollment}
              onChange={handleChange}
              className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold shadow-[6px_6px_0px_black] outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
            />
          </div>

          {/* Branch + Semester */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="font-black uppercase text-sm">
                Branch
              </label>

              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold bg-white shadow-[6px_6px_0px_black] outline-none"
              >
                <option value="">Select Branch</option>
                <option>CSE</option>
              </select>

            </div>

            <div>

              <label className="font-black uppercase text-sm">
                Semester
              </label>

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold bg-white shadow-[6px_6px_0px_black] outline-none"
              >
                <option value="">Select Semester</option>
                {[1,2,3,4,5,6,7,8].map((sem)=>(
                  <option key={sem}>{sem}</option>
                ))}
              </select>

            </div>

          </div>

          {/* Password */}

          <div className="grid md:grid-cols-2 gap-5">

            <div>

              <label className="font-black uppercase text-sm">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold shadow-[6px_6px_0px_black] outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
              />

            </div>

            <div>

              <label className="font-black uppercase text-sm">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-2 w-full border-[4px] border-black px-4 py-3 font-semibold shadow-[6px_6px_0px_black] outline-none transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none"
              />

            </div>

          </div>

          {/* Terms */}

          <label className="flex items-start gap-3 font-semibold cursor-pointer">

            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 accent-black"
            />

            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>

          </label>

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-yellow-300 border-[5px] border-black py-4 font-black uppercase text-lg shadow-[8px_8px_0px_black] transition-all hover:translate-x-2 hover:translate-y-2 hover:shadow-none"
          >
            Create Account →
          </button>

        </form>

        <div className="my-8 border-t-[5px] border-black"></div>

        <div className="text-center">

          <p className="font-semibold">
            Already have an account?
          </p>

          <button
            className="mt-4 border-[4px] border-black px-6 py-3 font-black uppercase shadow-[6px_6px_0px_black] transition-all hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}
