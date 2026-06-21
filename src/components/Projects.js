import about from '../assets/about.png'
import hero from '../assets/HeroImg.png'
export default function Projects() {
    return <section className="flex flex-col px-5 py-5 bg-secondary justify-center">
        <div className="w-1/2">
        <di  className="flex  justify-center ">
             <h1 className="text-4xl text-white  mb-5 font-bold ">PROJECTS </h1>
             

        </di>
         </div >
        <div className='w-1/2'>
            <div className='flex px-10 gap-1'>
                <div>
                    <img className='h-[300px]' src={hero}></img>
                    <div>
                        <p>l</p>
                    </div>
                </div>
                <div>
                    <img className='h-[200px]' src={hero}></img>
                </div>
               <div>
                 <img className='h-[200px]' src={hero}></img>
               </div>

            </div>

        </div>


         


        

    </section>

}