export const Hearder = ()=>{


    return (
        <div className= "sm:hidden bg-black/20 md:flex justify-between min-w-screen sm:bg-amber-200 md:bg-amber-600 lg:bg-blue-300 xl:bg-emerald-300 space-x-2 py-5 items-center md:block ">
            <div className=" ml-7 cursor-pointer">
                <img src="/src/assets/react.svg" alt="logo" />
            </div>
            <div>
                <ul className="flex decoration-0 space-x-16 cursor-pointer">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>



            <h1 className="mr-7 cursor-pointer">login</h1>
            
        </div>
    )
}