
import { IoMdPerson } from "react-icons/io";
import Logo from '../assets/logo.svg'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>

            <div className="w-full bg-[#141625]">

                <span>
                    Logo
                </span>
                <img src={Logo} alt="logo" className="w-12 h-12"/>


                    <Link to="#">
                        <IoMdPerson />
                    </Link>

            </div>
        </>
    );
}

export default Navbar;