// Inside GamePage.js
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const GamePage = () => {
  const [balloonSize, setBalloonSize] = useState(50);

  const handlePump = () => {
    // Increase balloon size on pump
    setBalloonSize((prevSize) => prevSize + 10);

    // Check if the balloon is too big (popped)
    if (balloonSize >= 150) {
      toast("Balloon popped!");
      // Handle game over logic here
      setBalloonSize(50); // Reset balloon size
    }
  };

  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <h2 className="text-4xl font-bold mb-10">Welcome, {user.displayName}!</h2>

      <div
        className="w-4 mb-10 h-4 bg-[#1967d2]  cursor-pointer"
        style={{
          borderRadius: "50%",
          width: balloonSize + "px",
          height: balloonSize + "px",
        }}
        onClick={handlePump}
      ></div>

      <button
        onClick={handleSignOut}
        className="btn capitalize bg-[#1967d2] text-white hover:bg-[#1967d2]"
      >
        Logout
      </button>
    </div>
  );
};

export default GamePage;
