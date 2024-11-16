

const Home = () => {
  return (
    <>
     
      <main className='flex flex-col bg-zinc-900 gap-10  min-h-screen  items-center justify-center -z-10'>
          <h1 className='text-[120px] shadow-md shadow-blue-500 p-4 font-semibold font-serif text-zinc-200'>MUSICC.IO</h1>
          <h2 className='text-[36px] m-3  font-medium text-zinc-200'>Your music. Your space.   <span className="text-blue-200">Together</span>.</h2>
          <div className='flex flex-wrap gap-10'>
          <button className='text-zinc-200 border border-zinc-200 rounded-sm w-auto p-10 shadow-lg shadow-blue-500/50 hover:shadow-blue-500 hover:scale-105 transition duration-300'>Create Room</button>
          <button className='text-zinc-200 border border-zinc-200 rounded-sm w-auto p-10 shadow-lg shadow-blue-500/50 hover:shadow-blue-500 hover:scale-105 transition duration-300'>Join Room</button>
          </div>
          
        </main>
    </>
  )
}

export default Home