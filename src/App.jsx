import "./App.css";
import backgroundImg from "./assets/background.png";
import brand from "./assets/brand.png";
import { Field, Form, Formik } from "formik";
import { Link } from "react-router";

export default function App() {
  // Initial form values
  const ini = { Email: "", FullName: "", Password: "" };

  // Form submission handler
  const handleFormData = (values, { resetForm }) => {
    console.log(values); // Check Form Data in Console
    alert("Form Submitted Successfully !!");
    resetForm();
  };

  // Form fields configuration
  const fields = [
    { label: "Email", type: "email", name: "Email" },
    { label: "Full Name", type: "text", name: "FullName" },
    { label: "Password", type: "password", name: "Password" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-4 sm:p-6"
      style={{ backgroundImage: `url(${backgroundImg})` }} // Background image
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
        {/* Left Section - Heading */}
        <div className="bg-[#084b3e] text-[#f9e2ba] px-6 py-3 sm:px-8 sm:py-4 flex flex-col justify-between items-start gap-2 md:w-[35%]">
          <img src={brand} alt="logo" className="h-[65px] object-contain" />
          <h1 className="lg:text-3xl md:text-2xl text-[22px] font-medium sm:font-semibold leading-snug">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </h1>
        </div>

        {/* Right Section - Signup Form */}
        <div className="px-6 py-4 sm:py-7 sm:px-10 md:w-[60%] flex flex-col gap-8 sm:gap-16 justify-center">
          <h2 className="text-2xl sm:text-[28px] lg:text-[34px] text-[#232323] font-semibold">
            Let’s get started <br /> with a few simple steps
          </h2>

          {/* Signup Form */}
          <Formik onSubmit={handleFormData} initialValues={ini}>
            <Form className="flex flex-col gap-6 sm:gap-9">
              {fields.map(({ label, type, name }) => (
                <div key={name}>
                  <label className="block text-base font-semibold">
                    {label}
                  </label>
                  <Field
                    type={type}
                    name={name}
                    className="block w-full border-b border-gray-800 outline-none focus:border-[#00c38b] text-sm"
                    required
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-[#00c38b] hover:bg-[#00a877] text-white py-3 sm:py-4 rounded-xl font-semibold transition-colors mt-3"
              >
                Sign up
              </button>
            </Form>
          </Formik>

          {/* Footer Links */}
          <div className="text-sm text-[#bdbdbd] font-medium tracking-tight font-sans space-y-1">
            <p>
              By signing up, you agree to our{" "}
              <Link to="/terms" className="underline">
                Terms of Service
              </Link>
              .
            </p>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-[#00c38b] underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
