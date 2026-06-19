import about from '../assets/about.png'
export default function About() {
    return<section className='flex bg-primary px-5'>
        <diV className='w-1/2'>
            <img src={about} />
        </diV>
        <div className='w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
             <h1 className='text-5xl text-white  mb-5 font-bold '>About Me</h1>
            <p className='text-black font-bold pb-6'><i>Hi, I'm Niranjan, a MERN Stack Developer with a strong passion for building scalable web applications and creating intuitive, user-centered digital experiences.</i> </p>
            <p className='text-black font-bold pb-6'><i>With experience in various programming languages and design tools, I strive to deliver high-quality work that meets the needs of clients and users alike.</i></p>
            <p className='text-black font-bold pb-6'><i>I am continuously improving my development skills through projects, self-learning, and hands-on practice. My goal is to gain real-world experience, work on exciting challenges, and grow as a software developer.</i></p>

        </div>
           
        </div>

    </section>

}