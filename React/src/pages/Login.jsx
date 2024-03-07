export function Login() {
  return (
    <>
      <div
        className="login w-[320px] h-[400px] bg-gradient-to-r from-blue-400 to-blue-300 rounded-3xl  flex items-center 
        justify-center h-screen shadow-black shadow-xl 
        hover:bg-gradient-to-l
        "
      >
        <button
          className="w-28 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white 
                hover:shadow-black hover:shadow-2xl hover:bg-gradient-to-l"
        >
          Login
        </button>
      </div>
    </>
  );
}
