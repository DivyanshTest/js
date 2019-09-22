import React from 'react';
 
 const Color=(Wrappedcomp)=>{

    const color=["blue","red","orange","yellow",'pink'];
    const randomColor=color[Math.floor(Math.random() *5)];
    const className=randomColor + "-text" ;

return(props)=>{
    console.log('hoc');

    return(
        <div className={className}>
            <Wrappedcomp {...props}/>
        </div>
    )}
    }

 export  default Color;