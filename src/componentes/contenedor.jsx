




const Dashboard = () => {
    return(
    <div className="flex flex-row  w-full h-44">
        <div className="flex justify-around w-full m-1 border-4 rounded-md bg-teal-700 ">
            <div class="mt-2 relative group cursor-pointer overflow-hidden duration-500 w-40 h-4/5 bg-zinc-800 text-gray-50 p-6 rounded-md">
                <div class="">
                    <div class="group-hover:scale-110 w-full h-20 bg-lime-200 duration-500"></div>
                    <div class="absolute w-30 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div class="absolute -z-10 left-0 w-30 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                        <span class="text-xl font-bold">DATO</span>                    
                    </div>
                </div>
            </div>
        <div class="mt-2 relative group cursor-pointer overflow-hidden duration-500 w-40 h-4/5 bg-zinc-800 text-gray-50 p-6 rounded-md">
                <div class="">
                    <div class="group-hover:scale-110 w-full h-20 bg-blue-400 duration-500"></div>
                    <div class="absolute w-30 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div class="absolute -z-10 left-0 w-30 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                        <span class="text-xl font-bold">DATO</span>                    
                    </div>
                </div>
            </div>
            <div class="mt-2 relative group cursor-pointer overflow-hidden duration-500 w-40 h-4/5 bg-zinc-800 text-gray-50 p-6 rounded-md">
                <div class="">
                    <div class="group-hover:scale-110 w-full h-20 bg-blue-400 duration-500"></div>
                    <div class="absolute w-30 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div class="absolute -z-10 left-0 w-30 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                        <span class="text-xl font-bold">DATO</span>                    
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Dashboard;