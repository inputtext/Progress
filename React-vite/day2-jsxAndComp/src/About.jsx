let About =({width, age , height , elem,children} )=>{  // destructured the prop/object
    console.log(width,age,height,elem,children); //empty object or the object


    return(

    <nav>
        <h1>Hi this is about</h1>
        {children}
    </nav>

    )
};

export default About ;

