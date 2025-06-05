import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, company, agency } = form;
    if (!fullName || !phone || !email || !password  || !agency) {
      alert("All fields are required");
      return;
    }
    localStorage.setItem("popx-user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white px-6 py-10">
       <h2 className="text-[28px] font-bold text-gray-900 leading-snug">
  Create your <br /> PopX account
</h2>


        <div className="mt-6">
          <label className="text-sm font-semibold text-violet-700">Full Name *</label>
          <input
            name="fullName"
            placeholder="Enter full name"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-violet-700">Phone number *</label>
          <input
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-violet-700">Email address *</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-violet-700">Password *</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-violet-700">Company name </label>
          <input
            name="company"
            placeholder="Enter company name"
            value={form.company}
            onChange={handleChange}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-gray-900">Are you an Agency? *</p>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === "yes"}
                onChange={handleChange}
                className="accent-violet-600"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === "no"}
                onChange={handleChange}
                className="accent-violet-600"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-violet-600 text-white font-semibold py-3 rounded-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;