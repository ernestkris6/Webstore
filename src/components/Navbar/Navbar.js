import logo from '../../assets/logo.png'

const Navbar = () => {
    return ( 
<>
    <div className="bg-black w-full p-2">
        <h3 className="text-white font-inter text-1xl font-bold text-center lmobile:text-2xl">Welcome ALL</h3>
    </div>

    <div className="flex justify-around items-center">
        <div>
            <img className="h-28 w-full" src={logo} alt="store" />
        </div>
        <div>
            <button className='bg-black text-white p-2 border'>Log out</button>
        </div>
    </div>

    <div className='bg-black w-full p-1'>
        <h4 className='text-white 
        text-center font-inter text-sm'>AFFORDABLE PRICES AT IT'S PEAK</h4>
    </div>
</>
    
    );
}
 
export default Navbar;