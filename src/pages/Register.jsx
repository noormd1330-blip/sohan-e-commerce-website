

const Register = () => {
  return (
    <div className="flex min-h-[calc(100vh-3.75rem)] items-center justify-center p-4">
        <form className="w-full max-w-sm">
        <div className="m-0 flex w-full flex-col items-center gap-5 rounded-2xl border-black bg-white p-6 shadow-2xl sm:p-10">
          <h1 className="text-3xl font-bold">Register</h1>
          <input className="w-full rounded-2xl border px-5 py-2" type="text" placeholder="Enter your name" />
          <input className="w-full rounded-2xl border px-5 py-2" type="email" placeholder="Enter your email"/>
          <input className="w-full rounded-2xl border px-5 py-2" type="password" placeholder="Enter your password" />
          <button className="px-2 py-2 bg-black  cursor-pointer active:scale-95 hover:bg-red-950 text-white font-bold rounded-2xl">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register
