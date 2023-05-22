import React from 'react'

export default function About({setShowAboutModal}) {


    const aboutModalStyle = {
        background: 'rgba(0,0,0, 0.75)',
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        zIndex: "5",
        overflow: "hidden"
    }

    const authFormStyle = {
        backgroundColor: 'white',
        width: '45%',
        height: '65%',
        border: 'black ridge 1px',
        borderRadius: '10px',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5'
    }

    const closeButton = {
        color: "black",
        position: "fixed",
        background: "none",
        fontSize: "24px",
        zIndex: "5",
        top: "10px",
        left: "10px",
        border: "none",
        fontWeight: "bold",
        WebkitTextStroke: "0.10px white",
        cursor: 'pointer'
    }
    
    const aboutTitleStyle = {
        position: 'auto',
        padding: '35px'

    }

    const aboutBodyTextStyle = {
        position: 'auto',
        padding: '4%',

    }


    

    return(
        <>
            <div className="aboutModal" style={aboutModalStyle} onClick={() => setShowAboutModal(false)}>
            </div>
            <div className="aboutText" style={authFormStyle}>
                    <button className="closeButton" style={closeButton} onClick={() => setShowAboutModal(false)}>x</button>
                    <header className='aboutHeader'>
                        <h2 className='aboutTitle' style={aboutTitleStyle}>About</h2>
                        <div className='aboutBodyText' style={aboutBodyTextStyle}>
                            <p>This web application pulls trending 'memes' from the Imgur API. It is a personal project started by Gary Liang</p>
                            <p>to demonstrate the use of Node.js, React frontend, Flask backend, Redis, and MongoDB databases in a full-stack project.</p>
                            <p>The frontend is hosted on Netlify, and the backend is hosted on Railway app. For more information, check out the project repository at https://github.com/Gary-Liang/trending-memes. </p>
                            <p> © GARY LIANG 2023</p>
                        </div>
                    </header>    
            </div>
        </>
    )
}