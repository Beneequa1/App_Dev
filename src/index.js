import react from 'react';
import reactDOM from 'react-dom/client';
import brooklyn from './brooklyn.jpg'

//-----FUNCTION COMPONENT--------------
// Content in the app
const App= function(){
    //create a constant variable
    const divText='I am a text in a variable'
    //create a style variable
    const styleJSX={color:'purple', fontFamily:'cursive'}
    return(
        <div>
            <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to react JS</h1>
            <p>Let's be familar with JSX element</p>
            <h2>Fun things to do</h2>
            <ul>
                <li>Go to the movies</li>
                <li>Bowling</li>
                <li>go out to eat</li>
                <li>spend time with family</li>
            </ul>
            <h2>Inline styling</h2>
            <label for="email" style={{color:"purple", padding:"o.5em 1em"}}>Enter e-mail</label>
            <input id='email' type='text' placeholder='Type your email' style={{backgroundColor:'red', padding:'0.5em' ,borderRadius:'0.5em'}}/>
            <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em 1em',borderRadius:'0.5em', color:'white'}}>Submit form</button>
            <figure>
                <img src={brooklyn} style={{width:'50%'}}/>
            </figure>
            <p className='title'>Adding a class name to a JSX element</p>
            <p className='txtVar'>{divText}</p>
            <p style={styleJSX}> {divText}</p>
        </div>
    )
}

//rooting the app
const root =reactDOM.createRoot(document.querySelector('#root'))
root.render(App())