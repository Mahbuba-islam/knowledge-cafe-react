

const Header = () => {
  return (
    <header className="container mx-auto px-6 md:px-0 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Knowledge Nest
        </h1>

        {/* Tagline */}
     <p className="text-center md:text-left text-base md:text-lg 
     text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 drop-shadow-sm font-bold">
  “ Where ideas hatch and wisdom grows ”
  <span className="text-black ml-2">📚</span>
</p>


        {/* Profile Image */}
        <img
          src="/profile.png"
          alt="User profile"
          className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />
      </div>
    </header>
  );
};

export default Header;

