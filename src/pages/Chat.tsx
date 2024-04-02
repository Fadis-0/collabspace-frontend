const Chat = () => {
  
  return (
    <div className="flex flex-col h-screen pt-16 px-2">

      <div className="mb-6 pt-2">
        <p className="text-md text-gray-400 pl-0.5">
          
        </p>
        <p className="text-3xl font-bold tracking-tight text-slate-900">
          Chats
        </p>
      </div>

      <div className="flex h-full">
        <aside className="h-full w-1/5 relative">      
          
          <div className="hover:shadow-sm text-center m-2 transition-all duration-200 py-3 px-1 rounded cursor-pointer hover:bg-neutral-100 flex items-center">
            <div className="bg-neutral-300 rounded-full w-8 h-8 mx-2">
            </div>
            <div className="font-medium text-center ml-2 mt-0.5 mr-1 text-neutral-400">
              Groupe PFE
            </div>
          </div>

          <div className="hover:shadow-sm text-center m-2 transition-all duration-200 py-3 px-1 rounded cursor-pointer hover:bg-neutral-100 flex items-center">
            <div className="bg-neutral-300 rounded-full w-8 h-8 mx-2">
            </div>
            <div className="font-medium text-center ml-2 mt-0.5 mr-1 text-neutral-400">
              Bourouaieh Douadi
            </div>
          </div>


          <div className="hover:shadow-sm text-center m-2 transition-all duration-200 py-3 px-1 rounded cursor-pointer hover:bg-neutral-100 flex items-center">
            <div className="bg-neutral-300 rounded-full w-8 h-8 mx-2">
            </div>
            <div className="font-medium text-center ml-2 mt-0.5 mr-1 text-neutral-400">
              Gasmi Anis
            </div>
          </div>



        </aside>
        <main className="bg-violet-50 rounded-t-xl h-full w-4/5 relative">
        </main>
      </div>

    </div>
  )
}

export default Chat