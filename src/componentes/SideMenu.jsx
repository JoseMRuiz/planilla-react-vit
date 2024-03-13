import Logo from './imagenes/Logo.png'


const SideMenu = () => {
    return(
    <aside className='w-30 h-full'>
        <nav className='size-30 h-full	 flex flex-col bg-teal-600 rounded-2xl shadow shadow-green-100'>
            <div className='p-4 pb-2 flex judtify-between items-center'>
                <button>
                    <img src={Logo}
                    className='size-24'
                    />
                </button>
                <button className='p-1.5 rounded-lg bg-sky-400 hover:bg-cyan-200'>
                ⭅
                </button>
            </div>
            <ul className='size-36 h-full items-center '>{}
            <div class='flex flex-col items-center'>
            <button class=" mb-14 mt-4 bg-cyan-600 text-green-50 border border-cyan-200 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-cyan-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
            <button class=" mb-14 mt-4 bg-cyan-600 text-green-50 border border-cyan-200 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-cyan-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
            <button class=" mb-14 mt-4 bg-cyan-600 text-green-50 border border-cyan-200 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-cyan-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
            <button class=" mb-14 mt-4 bg-cyan-600 text-green-50 border border-cyan-200 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-cyan-400 shadow-blue-600 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
            </button>
            </div>
            </ul>
        </nav>
    </aside>
    );
};

export default SideMenu;