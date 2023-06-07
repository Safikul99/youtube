import Logo from '../images/YTlogo.png'
import '../styles/navbar.css'
import Noti from '../images/Bell.png'
import VideoLogo from '../images/Videoicon.png'


function Navbar(){
    return(
        
        <div className="navbar">
            <div className="logo">
                <img width={80} src={Logo} alt="image " />
            </div>
            <div className="SearchBar"> 
            <input type="text" placeholder='Search' />
            </div>
            <div className="UserOptions">
                <img  width={35} src={Noti} alt="" />
                <img width={35} src={VideoLogo} alt="" />
                <div className='profile'>
                    <h2>S</h2>
                    </div>
            </div>
         </div>
        
    )
}
export default Navbar;