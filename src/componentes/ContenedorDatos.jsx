import Dashboard from "./contenedor";


const Plantilla = () => {
    return(

        <div className="flex flex-column  w-full h-full">
            <div className=" justify-around w-full m-1 border-4 rounded-md bg-teal-700 ">
                <Dashboard/> 
            </div>
        </div>
    );
};

export default Plantilla;