function UserProfile() {
  return (
    <div
      className="bg-gray-100 
                 p-4 sm:p-4 md:p-8 
                 max-w-xs sm:max-w-xs md:max-w-sm 
                 mx-auto my-10 
                 rounded-lg shadow-lg text-center"
    >
      {/* Responsive image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto 
                   w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
      />

      {/* Responsive heading */}
      <h1
        className="text-lg sm:text-lg md:text-xl 
                   text-blue-800 my-4 font-semibold"
      >
        John Doe
      </h1>

      {/* Responsive paragraph */}
      <p
        className="text-sm sm:text-sm md:text-base 
                   text-gray-600"
      >
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  )
}

export default UserProfile
