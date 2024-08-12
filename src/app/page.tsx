import Link from "next/link";



export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center  items-center bg-gradient-to-tr from-slate-50 via-gray-200 to-orange-300 text-slate-700 bg-no-repeat bg-cover animate-slidein pt-10 drop-shadow-lg ">
    <p className="md:p-10 p-5 text-2xl drop-shadow-lg ">
    Si estás leyendo esto hay dos opciones:<br />
     o bien estamos intentando venderte la moto de un
  proyecto brutal, 
   o simplemente estamos dando a conocer nuestra pequeña familia
  emprendedora. <br /> Como no somos vendedores de motos, suponemos que será la segunda
  opción, así que puedes saber un poco más de nosotros <Link href="/nosotros"> <span className="font-extrabold animate-bounce text-pink-300">aquí.</span></Link> 

    </p>

  </div>
  );
}
