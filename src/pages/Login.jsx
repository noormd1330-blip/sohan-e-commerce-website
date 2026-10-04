

const Login = () => {
  return (
    <div className="flex min-h-[calc(100vh-3.75rem)] items-center justify-center p-4">
        <form className="w-full max-w-sm">
        <div className="flex w-full flex-col items-center gap-5 rounded-2xl border-black bg-white p-6 shadow-2xl sm:p-10">
          <h1 className="text-3xl font-bold">Login</h1>
          <input className="w-full rounded-2xl border px-5 py-2" type="email" placeholder="Enter your Email"/>
          <input className="w-full rounded-2xl border px-5 py-2" type="password" placeholder="Enter your Password"/>
          <button className="border px-9 py-2 rounded-2xl cursor-pointer active:scale-95 bg-black font-semibold text-white">Submit</button>
          </div>
           </form>
    </div>
  )
}

export default Login
