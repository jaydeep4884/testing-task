import "./App.css";
import backgroundImg from "./assets/background.png";
import brand from "./assets/brand.png";

export default function App() {
  const fields = [
    { label: "Email", type: "email" },
    { label: "Full Name", type: "text" },
    { label: "Password", type: "password" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        {/* Left */}
        <div className="bg-[#084b3e] text-[#f9e2ba] px-8 py-4 flex flex-col justify-between items-start md:w-[40%]">
          <img src={brand} alt="logo" className="h-[65px] object-contain" />
          <h1 className="text-2xl font-semibold leading-snug">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </h1>
        </div>

        {/* Right */}
        <div className="p-7 md:w-[55%] flex flex-col gap-16 justify-center">
          <h2 className="text-2xl font-semibold">
            Let’s get started <br /> with a few simple steps
          </h2>

          <form className="flex flex-col gap-5">
            {fields.map(({ label, type }) => (
              <div key={label} >
                <label className="block text-xs font-medium">{label}</label>
                <input
                  type={type}
                  className="block w-full border-b border-gray-800 outline-none text-sm"
                />
              </div>
            ))}
            <button className="w-full bg-[#00c38b] hover:bg-[#00a877] text-white py-3 rounded-xl font-semibold transition-colors mt-3">
              Sign up
            </button>
          </form>

          <div className="text-xs text-[#bdbdbd] font-medium tracking-tight font-sans ">
            <p>
              By signing up, you agree to our{" "}
              <a href="/" className="underline">
                Terms of Service
              </a>
              .
            </p>
            <p>
              Already have an account?{" "}
              <a href="/" className="text-green-600 underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
