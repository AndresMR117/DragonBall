
import "./about.css";

const About = () => {
    return (
        <main id="about-page">
            <h1>Acerca de la API de Dragon Ball</h1>
            <br />
            <hr />
            <section className="about-section">
                <h2>¿Qué es esto?</h2>
                <p>
                    La API de Dragon Ball es una API REST integral inspirada en la icónica serie de televisión Dragon Ball. Esta API brinda acceso a una extensa base de datos con cientos de personajes, imágenes, transformaciones y planetas del universo de Dragon Ball. Abarca información canónica derivada de varias series, como Dragon Ball Z, Dragon Ball GT, Dragon Ball Super, así como películas y un toque de Dragon Ball Heroes.
                </p> 

                <h2>¿Qué es Dragon Ball?</h2>
                <p>
                    <strong>Dragon Ball</strong> es una serie de manga y anime creada por Akira Toriyama en 1984. La historia sigue las aventuras de <strong>Goku</strong>, un guerrero Saiyajin criado en la Tierra, quien busca ser el luchador más fuerte del universo. Durante su vida, Goku se enfrenta a poderosos enemigos, encuentra amigos y aliados, y participa en grandes batallas para proteger el planeta y el universo.
                </p>
                <p>
                    A lo largo de los años, Dragon Ball ha evolucionado y ha dado lugar a varias series, cada una de ellas expandiendo el universo y los desafíos para sus personajes. La serie original fue seguida por <strong>Dragon Ball Z</strong>, donde Goku alcanza nuevos niveles de poder y se enfrenta a enemigos como Freezer, Cell y Majin Buu. Más adelante, <strong>Dragon Ball GT</strong> y <strong>Dragon Ball Super</strong> ampliaron la historia, con nuevos personajes, transformaciones y exploraciones de otros universos.
                </p>
                <p>
                    Con una influencia enorme en la cultura pop, Dragon Ball se ha convertido en un fenómeno mundial, inspirando videojuegos, películas y millones de fanáticos en todo el mundo. Su mezcla de acción, humor y lecciones sobre la amistad y la perseverancia han hecho de esta serie un clásico que sigue vigente.
                </p>
               
                <h2>¿Aspectos Técnicos?</h2>
                <p>
                    La API de Dragon Ball está desarrollada usando NestJS, que se basa en el motor Express. NestJS es un potente framework de TypeScript que ofrece una estructura sólida para construir aplicaciones web escalables. Utiliza MySQL como base de datos para almacenar la información y emplea la API de Cloudinary para manejar imágenes. La aplicación completa está alojada en una instancia de AWS EC2, aprovechando su escalabilidad y servicios en la nube.
                </p>
                <p>
                    La integración y despliegue continuo (CI/CD) se gestiona mediante un runner de GitHub Actions configurado en AWS, lo que garantiza una integración de código fluida y eficiente. Cualquier cambio realizado en el repositorio de GitHub se refleja automáticamente en la instancia de AWS, manteniendo la aplicación siempre actualizada.
                </p>
                <p>
                    En cuanto a la interfaz web, está construida con Vite y React, utilizando Material-UI para ofrecer un diseño atractivo y una experiencia de usuario intuitiva. La aplicación web está alojada en Netlify, lo que permite despliegues rápidos y gestión sencilla del dominio y el hosting.
                </p>      

                <h2>Derechos de Autor</h2>
                <p>
                    Todos los personajes, imágenes y contenido relacionado de Dragon Ball que aparecen en este proyecto son propiedad intelectual de sus respectivos creadores, Akira Toriyama y Toei Animation. Reconocemos y respetamos su trabajo creativo. Este proyecto es una iniciativa creada por fans y no tiene fines comerciales. No se pretende infringir los derechos de autor, y todos los derechos de Dragon Ball pertenecen a sus respectivos dueños.
                </p>
                <p>
                    Este proyecto es de código abierto y da la bienvenida a contribuciones de la comunidad. Puede encontrar el código fuente en el siguiente enlace. Siéntase libre de explorar, contribuir y mejorar el proyecto, mientras celebramos colectivamente nuestro amor por Dragon Ball. Consulte la licencia del proyecto para más detalles sobre su uso y distribución.
                </p>
            </section>
            <br />
            <hr />
            <footer className="footer">
                <p>&copy; 2024 Dragon Ball API. @Colombia.</p>
                <p>❄❅❆❉❊ Implementado por Jhon Andres Meneses Robis ❄❅❆❉❊</p>
            </footer>
        </main>
    );
};

export default About;

