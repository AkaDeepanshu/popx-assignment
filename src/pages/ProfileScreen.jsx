import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/profile.png";
import editIcon from "../assets/camera.svg";

const ProfileScreen = () => {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam",
  });

  const [selectedImage, setSelectedImage] = useState(profileImg);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("popx-user"));
    if (saved) {
      setUser((prev) => ({
        ...prev,
        fullName: saved.fullName || prev.fullName,
        email: saved.email || prev.email,
      }));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[375px] min-h-screen bg-white p-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b pb-3">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 mt-6">
          <div className="relative">
            <img
              src={selectedImage}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div
              className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1 cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <img src={editIcon} alt="edit" className="w-4 h-4" />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900">{user.fullName}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 mt-6 leading-relaxed border-t pt-4">
          {user.description}
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
