import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenu = useSelector((store) => store.app.isMenuOpen);

  if (!isMenu) return null;

  return (
    <div className="fixed top-[64px] left-0 w-60 h-full bg-white shadow z-40 overflow-y-auto">
      <div className="shadow m-5 w-48 p-3 rounded-xl bg-white">
        {/* Main */}
        <ul className="space-y-2 border-b pb-2">
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🏠 Home
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🎵 Music
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🎬 Shorts
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            📺 Subscriptions
          </li>
        </ul>

        {/* Library */}
        <ul className="mt-3 space-y-2 border-b pb-2">
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            📂 Library
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🕑 History
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            ▶️ Your Videos
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            ⏱ Watch Later
          </li>
        </ul>

        {/* Explore */}
        <ul className="mt-3 space-y-2">
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🔥 Trending
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            🎮 Gaming
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            📰 News
          </li>
          <li className="hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
            ⚽ Sports
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
