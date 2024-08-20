import Link from "next/link"




export default function Nosotros() {
    return (
        <div className="w-full h-full  flex flex-col justify-center items-left p-5 bg-gradient-to-tr from-slate-50 via-gray-200 to-orange-200 text-slate-700  pt-20 animate-slidein">
            <p className="text-xl  pb-5  ">Si te gustan los gatos, estás a un <Link href="/nosotros/gatitos"> <span className="font-bold animate-bounce text-pink-300">clic </span> </Link> de amarlos aún más. </p>
                <p className="pb-10  text-xl " >{' '}

Vamos al grano. No somos una empresa gigante, no somos La Bresh, ni tampoco el ROW,
ni siquiera Lyrical Lemonade (aunque nos inspira mucho).</p> <p className="pb-10  text-xl"> 
 Somos un colectivo creativo con
ganas de cambiar la corriente socio-cultural de un país entero. Nuestro país. ANDORRA. Y
hacemos cosas como <Link href="/nosotros/aftermovie"> <span className=" animate-bounce text-pink-300">estas</span></Link>  (aftermovie).</p>
<p className="pb-10 text-xl" >

Nos gusta hacer las cosas diferente, a nuestra manera, un poco <Link href="/nosotros/meme"> <span className="font-bold animate-bounce text-pink-300">así</span></Link> </p>
<p className="pb-10  text-xl" > (colar meme de monos
trabajando en un call-center), y vamos a transformar la escena del ocio en Andorra hasta
que no la reconozca ni el Yeti.</p>

<p className="pb-10 text-xl">Nos gusta hacer las cosas diferente, a nuestra manera, un poco así (colar meme de monos
trabajando en un call-center), y vamos a transformar la escena del ocio en Andorra hasta
que no la reconozca ni el Yeti.
Porque eso es lo que le hace falta a Andorra: un cambio.
Y ahí entramos nosotros.</p>
<p className="pb-10  text-xl">
La Random pretende dar voz, plataforma, fuerza y unión a los colectivos más
desfavorecidos del país, debido a una falta de interés por parte, ya sea de la administración,
o de la dejadez general que asola el país en estos últimos años.
Y todo esto a nuestra manera. Con networking, con donuts, con charlas motivacionales,
humor, con mucha música y mucho baile.
Imagínate que estás en un evento como este (foto de American Dream), escuchando
música tal que ésta (California - Dr. Dre), y de repente pasa esto (batalla de baile de las
chicas).
</p>
<p className="pb-10 text-xl">
Y el siguiente episodio de La Random? Pues algo más o menos así, pero con nuestros
mejores artistas locales. De batallas de gallos a colaboración y hermandad. Virtus Unita
Fortior.
Un CYPHER único en el país, uniendo las mejores voces del hip hop, y cerrándose con un
set al más puro estilo "Boiler Room". Hip Hop y Techno un jueves random de verano. ¿Qué
más se puede pedir?
¿Queréis formar parte de la revolución socio-cultural de un país entero? Entonces sólo
tenéis que llamar a este (Alex) número de teléfono, o mandar un email aquí
(larandomcollective@gmail.com) y seréis parte intrínseca de la revolución.

Os dejamos un vídeo que nos encanta. (Fichamos por Red Bull by The Grefg).
Estamos a punto de despegar hacia el infinito. Sólo nos hacen falta las alas.</p>
        </div>
    )
}