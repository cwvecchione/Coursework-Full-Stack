import logoImage from '../images/logo.png';
import Link from 'next/link';
 
export default (props) => (
 
    <div id='main'>
        <header>
            <Link href='/'>
                <button id='homeButton' type="button" className="btn btn-light">Home</button>
            </Link>
            <img src={logoImage} alt='logo' id='logoImage' />
        </header>
        <h1>{props.url.query.title}</h1>
        <img src={props.url.query.image} alt='game image' id='gameImage'/>
        <p>{props.url.query.description}</p>
        <style jsx global>{`
 
            #main {
                text-align: center;
            }
        
            header {
                background-color: grey;
                height: 80px;
                padding: 10px;
            }

            #homeButton {
                left: 10px;
                margin: 10px;
                position: absolute;
            }
        
            #logoImage {
                height: 60px;
            }
        
            h1 {
                font-size: 40px;
                margin: 20px;
            }
        
            #gameImage {
                height: 300px;
                border-width: 2px;
                border-color: black;
                border-style: solid;
                margin-bottom: 20px;
            }
        
        `}</style>
    </div>
 
)