import React from 'react'
import Card from './components/Card';
import Contact from './components/Contact';
import About from './components/About';

const Web = () => {

    let arr = [ 1,2,3,6,7,9,3,5,4,3,6,6,7,8,8,9,10];



    return (
    <div>
        {arr.map((elem,index)=>{
            return <Card key={index}></Card>// key is an attribute which is passed as a unique key to make eveyr elem unique ,key is a prop
        })}
    </div>
    )
};

export default Web
