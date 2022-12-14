import { useEffect, useState, useCallback } from "react";
import {redirect, useNavigate,} from 'react-router-dom';
import {FaCocktail} from "react-icons/fa"
import ("./NavBar.css")


const NavBar = () => {
    const [toggle, setToggle] = useState(true)
    const navigate = useNavigate();

    const handleOnClick = useCallback(() => navigate(`/`, {replace: false}), [navigate]);
    const handleOnClick2 = useCallback(() => {
        navigate(toggle ? `/random1` : `/random2` , {replace: false}) 
        setToggle(!toggle)}, [navigate]) 
    return (
    <div className="nav">
        <h1 onClick={() => handleOnClick()}><FaCocktail/> Cocktail Guru</h1>
        <button onClick={() => handleOnClick2()}>Random Cocktail</button>
    </div>
    )
}

export default NavBar

