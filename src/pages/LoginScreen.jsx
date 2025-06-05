import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("popx-user"));
    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }
    if (savedUser.email === email && savedUser.password === password) {
      navigate("/profile");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white px-6 py-10">
        <h2 className="text-[28px] font-bold text-gray-900">
          Signin to your<br /> PopX account
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-6">
          <label className="text-sm font-semibold text-violet-700">Email address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-violet-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-3 border rounded w-full"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-violet-600 text-white font-semibold py-3 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;