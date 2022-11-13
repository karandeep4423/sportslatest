import React from 'react'

const Register = () => {
  return (
    <div>
      
      <div>
        <div className="flex  justify-around min-h-screen   items-center ">
      <div className=" bg-blue-100 max-w-96 rounded-2xl p-10 flex items-start justify-start">
        <div className="relative">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_umwjpnnn.json"
            style={{ height: "400px", width: "300px", marginTop: "10px" }}
          ></Player>
        </div>
        <form className="absolute -my-2  bg-[rgba(0,0,0,0.5)] -mx-3 flex rounded-2xl flex-col gap-4  flex-wrap p-5  ">
          <h1 className="text-3xl -mt-2 text-center">Register</h1>
          <div className="relative cursor-pointer">
            <input
              className="h-11 w-72 px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
              type="text"
              name="email"
              required
            ></input>
            <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
              Email
            </span>
          </div>
          <div className="relative">
            <input
              className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
              type="password"
              name="password"
              required
            ></input>
            <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
              Password
            </span>
          </div>
          <button className="text-xl text-white rounded-3xl h-11 w-72 hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Login
          </button>
          <div className="mt-6 grid grid-cols-3 items-center text-white">
            <hr className="border-white" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-white" />
          </div>
          <button className="text-xl h-11 w-72 text-white rounded-3xl  hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Continue with Google
          </button>
          <button className="text-xl h-11 w-72 rounded-3xl text-white hover:bg-[rgba(0,0,0,0.5)]   border-2 border-white">
           <Link to="/register">Register</Link> 
          </button>
        </form>
         <div className="invisible md:visible">
          <img className=" md:w-96 md:mt-8 md:ml-10" src="ball.svg"></img>
        </div>
      </div>
        </div>
          <h1> hello</h1>
          <button onClick={()=>{submit();setIsFlipped((prev) => !prev)}}>go back</button>
        </div>
    </div>
  )
}

export default Register





{/* <div>
    <div className=" flex justify-around    min-h-screen   items-center ">
      <div className=" max-w-96 bg-blue-100 p-10 rounded-3xl   flex items-start justify-start">
        <div className="relative">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_umwjpnnn.json"
            style={{ height: "400px", width: "300px", marginTop: "10px" }}
          ></Player>
        </div>
        <div className={state? "absolute -my-2  bg-[rgba(0,0,0,0.5)] -mx-3 flex rounded-2xl duration-1000  flex-col gap-4  flex-wrap p-5 ":" -ml-[400px] absolute -my-2  bg-[rgba(0,0,0,0.5)]  flex rounded-2xl flex-col gap-4  flex-wrap p-5 "}>
        <div className="border-2 flex h-11 relative w-72  border-white rounded-2xl">
          <button className="bg-sky-500 text-xl  duration-1000 ease-in h-full w-36  rounded-2xl text-center" onClick={loginButton}>Login</button>
          <button className=" text-xl h-full w-36  duration-1000 ease-in rounded-2xl  text-center" onClick={registerBtn}>Register</button>
          </div>
        <form className={state?"flex flex-col duration-100 gap-4":"-ml-[400px]" }>
          <div className="relative cursor-pointer">
            <input
              className="h-11 w-72 px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
              type="text"
              name="email"
              required
            ></input>
            <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
              Email
            </span>
          </div>
          <div className="relative">
            <input
              className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
              type="password"
              name="password"
              required
            ></input>
            <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
              Password
            </span>
          </div>
          <button className="text-xl text-white rounded-3xl h-11 w-72 hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Login
          </button>
        </form>
        <div className="mt-6 grid grid-cols-3 items-center text-white">
            <hr className="border-white" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-white" />
          </div>
          <button className="text-xl h-11 w-72 text-white rounded-3xl  hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Continue with Google
          </button>
          <button  className="text-xl h-11 w-72 rounded-3xl text-white hover:bg-[rgba(0,0,0,0.5)]   border-2 border-white">
          Register
          </button>
        </div>
        <div className={state?"ml-96 absolute -my-2  bg-[rgba(0,0,0,0.5)]  flex rounded-2xl flex-col gap-4  flex-wrap p-5":" absolute -my-2 duration-1000  bg-[rgba(0,0,0,0.5)] -mx-3 flex rounded-2xl flex-col gap-4  flex-wrap p-5 "}>
        <div className="border-2 flex h-11 relative w-72  border-white rounded-2xl">
          <button className=" text-xl h-full w-36  rounded-2xl   text-center"onClick={registerBtn}>jhjh</button>
          <button className={state?"text-xl h-full w-36  rounded-2xl  text-center":"bg-sky-500 text-xl h-full w-36  rounded-2xl  text-center" }>Register</button>
          </div>
        <form className="flex flex-col  gap-4" >
          <div className="relative cursor-pointer">
            <input
              className="h-11 w-72 px-6 text-xl text-white  bg-[rgba(0,0,0,0.5)]   border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500   transition duration-200"
              type="text"
              name="email"
              required
            ></input>
            <span className="text-xl -my-3    pointer-events-none  text-white absolute left-5 top-5 px-1 transition duration-200 input-text">
              Email
            </span>
          </div>
          <div className="relative">
            <input
              className="h-11 w-72 px-6 text-white bg-[rgba(0,0,0,0.5)] text-xl  border-black border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200 "
              type="password"
              name="password"
              required
            ></input>
            <span className="text-xl  pointer-events-none -my-3 text-white  absolute left-5 top-5 px-1 transition duration-200 input-password ">
              Password
            </span>
          </div>
          <button className="text-xl text-white rounded-3xl h-11 w-72 hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Login
          </button>
        </form>
        <div className="mt-6 grid grid-cols-3 items-center text-white">
            <hr className="border-white" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-white" />
          </div>
          <button className="text-xl h-11 w-72 text-white rounded-3xl  hover:bg-[rgba(0,0,0,0.5)]  border-2 border-white">
            Continue with Google
          </button>
          <button  className="text-xl h-11 w-72 rounded-3xl text-white hover:bg-[rgba(0,0,0,0.5)]   border-2 border-white">
           Register
          </button>
        </div>
         <div className="invisible md:visible">
          <img className=" md:w-96 md:ml-14" src="ball.svg"></img>
        </div>
      </div>
        </div>
       
    </div> */}