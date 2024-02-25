import React from 'react'
import "./header.css";
import img from '../../image/plant 1.png'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdList } from "react-icons/io";

export default function Header() {
  return (
    <div id='header'>
        <div className='container'>
            <div className='header'>
                <div className='newDiv'>
                <img className='newImage' src={img} alt="" />
                <h1 className='h10'>Planto.</h1>
                </div>
                <nav>
                    <NavLink>Home</NavLink>
                    <NavLink>Plants Type</NavLink>
                    <NavLink>More</NavLink>
                    <NavLink>Contact</NavLink>
                </nav>
                <div className='buttonIC'>
                <button>{<CiSearch />}</button>
                <button>{<IoBagHandleOutline />}</button>
                <button>{<IoMdList />}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
