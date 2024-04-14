import React from 'react'
import MetaData from './other/MetaData';


import Eror from "../assets/icons/icon-error.png"

//import css
import "../components/ErorPage.css";

const ErorPage = () => {
    return (

        <>
            <MetaData title={"Eror 404"} />
            <div className="eror-content">

                <div className="main-content">
                    <img src={Eror} alt="" className='img-eror' />
                    <p className='text-eror vibrate-1'>This page not exist</p>
                    <img src={Eror} alt="" className='img-eror' />
                </div>


            </div>
        </>
    )
}

export default ErorPage
