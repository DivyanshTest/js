import React from 'react';
import Color from '../HOC/colorHoc.js';

 function About() {
    return (
        <div className='conatiner'>
            <h1 className='center'>About</h1>
            <p className='center'>inside a About page</p>
            
            
        </div>
    )
}

export default Color(About);