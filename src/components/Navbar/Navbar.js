import logo from '../../assets/logo.png'

const Navbar = () => {
    return ( 
        <>
    <div className="bg-black w-full p-2">
        <h3 className="text-white font-inter text-2xl font-bold text-center">Welcome all</h3>
    </div>

    <div className="flex justify-around items-center">
        <div>
            <img className="h-28 w-full" src={logo} alt="store" />
        </div>
    </div>
</>
    
    );
}
 
export default Navbar;