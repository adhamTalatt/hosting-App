import LoginForm from "./LoginForm";

export default function page() {
  return (
    <section className=" fix-height container m-auto px-7 flex justify-center items-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Log In</h1>
        <LoginForm />
      </div>
    </section>
  );
}