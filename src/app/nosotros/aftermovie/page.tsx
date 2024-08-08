export default function Aftermovie() {
    return(
        <div className="w-full h-[800px] md:h-screen flex flex-col justify-center items-center p-5 bg-gradient-to-tr from-slate-50 via-gray-200 to-red-200 text-slate-700  pt-20 animate-slidein">
            <h2 className=" text-4xl py-20">Aftermovie - LaRandom 1</h2>
            <video  width="350" height="240" controls preload="none" className="rounded-xl" >
            <source src="/aftermovie.mp4" type="video/mp4" /> 
            </video>
            <p className="py-10 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptas.</p>
        </div>
    )
}