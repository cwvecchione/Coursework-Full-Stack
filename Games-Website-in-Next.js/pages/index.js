import logoImage from '../images/logo.png';
import dragonImage from '../images/dragonImage.png';
import oasisImage from '../images/oasisImage.png';
import riverImage from '../images/riverImage.png';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'
 
const GameBlock = (props) => (
 
    <div className='gameBlock'>
        <Link as={`/p/${props.title}`}
        href={`/gamePage?title=${props.title}
        &image=${props.image}&description=${props.description}`}>
            <img src={props.image} alt='game image' onClick=''/>
        </Link>
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
 
)
 
export default () => (
 
    <div>
        <header>
            <img src={logoImage} alt='logo' id='logoImage' />
        </header>
        <h1>My Games Page</h1>
        <style jsx global>{`
 
            header {
                background-color: grey;
                height: 80px;
                text-align: center;
                padding: 10px;
            }

            #logoImage {
                height: 60px;
            }

            h1 {
                text-align: center;
                font-size: 40px;
                margin: 10px;
            }

            .gameBlock {
                display: flex;
                margin: 20px;
            }
            
            .gameBlock h2, p {
                margin: 20px;
            }
            
            .gameBlock img {
                height: 200px;
                float: left;
                border-width: 2px;
                border-color: black;
                border-style: solid;
            }

            `}</style>
        <GameBlock image={dragonImage}
        title='Dragon Game'
        description='Fight the dragon and rescue the princess' />
        <GameBlock image={oasisImage}
        title='Oasis Game'
        description='Build an oasis and watch over your followers' />
        <GameBlock image={riverImage}
        title='River Game'
        description='Cross the river to reach the reward on the other side' />
    </div>
 
)
