import logo from '../../assets/FINAL_logo-01.svg'
import './Navbar.scss'

const Navbar = () => {

    let pages = ['ABOUT', 'FAQ', 'SCHEDULE', 'SPONSORS', 'TEAM']
    return (
        <nav class='nav text-3xl'>
            <img src = {logo} class='nav-logo hover:cursor-pointer'></img>
            <div>
                {pages.map(
                    (value, index) => {
                        return (
                            <a href={'#'+value.toLowerCase()}
                            class = 'transition-all duration-300 hover:text-accent'
                            >{value}</a>
                        )
                    }
                )}
            </div>
        </nav>
    );
};
  
export default Navbar;