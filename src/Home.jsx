import './home.css'
import React from "react";

const Header = ()=>{
    return(
        <div className='main-home' onClick={()=>{
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                    let dropdowns = document.getElementsByClassName("dropdown-content");
                    let i;
                    for (i = 0; i < dropdowns.length; i++) {
                        let openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }
        }}>
        </div>
    )
}

export default Header;