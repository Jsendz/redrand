export default function Aftermovie() {
    return(
        <div className="w-full h-[800px] md:h-screen flex flex-col md:flex-row justify-center items-center p-5 bg-gradient-to-tr from-slate-50 via-gray-200 to-orange-200 text-slate-700  pt-20 animate-slidein">
            <div className="w-full">
            <video  width="350" height="240" controls preload="none" className="rounded-xl md:w-full p-5" >
            <source src="/aftermovie.mp4" type="video/mp4" /> 
            </video>
            </div>
            <div className="w-full p-5">
            <h2 className=" text-4xl py-20">Aftermovie - LaRandom 1</h2>
            <p className="py-10 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptas.</p>
            </div>
        </div>
    )
}