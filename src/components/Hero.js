import HeroImg from '../assets/HeroImg.png';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export default function Hero() {    
    return <section className="flex px-5 py-32 bg-secondary">
        <div className="w-1/2 px-3">
             <h1 className="text-white text-6xl justify-center font-bold">Hi,<br/>Im a <span className="text-black">Niranjan</span>
        <p className="text-2xl">i am a software developer and a designer</p>
        </h1>
        <div className="flex py-5 gap-1">
            <a className="hover:text-blue-500" href="#"><FaSquareXTwitter size={30} /></a>
            <a  className="hover:text-blue-500" href="#"><FaLinkedin size={30}/></a>
            <a  className="hover:text-blue-500" href="#"><FaGithubSquare size={30}/></a>
        </div>

        </div>
       
        <img className="w-1/2"src={HeroImg} />




    </section>

}