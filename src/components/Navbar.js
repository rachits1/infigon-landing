import React,{useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    function handleClick(){
        setClick(!click);
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src="/images/logo.jpeg" alt="logo" />
            </div>

            <div className={click ? "navbar__right active" : "navbar__right"}>
                <ul className="navbar__list">
                        <li>
                            <button className="btn navbar__list-btn">Home</button>
                        </li>
                        <li>
                            <button className="btn navbar__list-btn">How we help</button>
                        </li>
                        <li>
                            <button className="btn navbar__list-btn">Programs</button>
                        </li>
                        <li>
                            <button className="btn navbar__list-btn">FAQS</button>
                        </li>
                    </ul>

                <div className="navbar__button">
                    <button className="btn nav__btn">Get in Touch</button>
                </div>
            </div>

            <div className="hamburger">
                <button onClick={handleClick} className="hamburger__btn"><i className={click ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i></button>
            </div>
        </div>
    )
}

export default Navbar
