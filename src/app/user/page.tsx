const UserPage = () => {
  return (
    <div className="min-h-screen bg-indigo-800 text-white flex items-center justify-center px-4">
      <div className="bg-indigo-700/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        
        <h1 className="text-3xl font-bold mb-2 text-center">
          User Dashboard
        </h1>

        <p className="text-center text-indigo-200 mb-6">
          Welcome back! Manage your profile and activity.
        </p>

        <div className="space-y-4">
          <div className="bg-indigo-600/30 p-4 rounded-xl">
            <p className="text-sm text-indigo-200">Name</p>
            <p className="font-semibold">Surafel Mengist</p>
          </div>

          <div className="bg-indigo-600/30 p-4 rounded-xl">
            <p className="text-sm text-indigo-200">Email</p>
            <p className="font-semibold">surafel@example.com</p>
          </div>

          <div className="bg-indigo-600/30 p-4 rounded-xl">
            <p className="text-sm text-indigo-200">Role</p>
            <p className="font-semibold">Full Stack Developer</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-white text-indigo-800 font-semibold py-2 rounded-xl hover:bg-indigo-100 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserPage;