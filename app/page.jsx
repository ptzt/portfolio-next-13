import {
    DiNodejs
} from 'react-icons/di'

import {
    SiNodejs,
    SiGit,
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiPostgresql,
    SiReact,
    SiTypescript,
    SiLinkedin,
    SiJavascript,
    SiMysql,
    SiNpm
} from 'react-icons/si';

import styles from './Page.module.css'


export default function Home() {
    return (
        <div>
            <header>
                <form className={styles.form} method="get" action="https://github.com/ptzt" target="_blank">
                    <button className={styles.icon}><SiGithub size={30} /></button>
                </form>
                <form className={styles.form} method="get" action="https://www.linkedin.com/in/tomasmillandev/" target="_blank">
                    <button className={styles.icon}><SiLinkedin size={30} /></button>
                </form>
                <h1 className={styles.title}>Hey, soy Tomas✌️</h1>
            </header>

            <div>
                <p className={styles.text}>Soy un programador de 20 años de Argentina. Estoy interesado en aplicaciones tanto frontend como backend, siempre usando codigo de calidad y trabajando en equipo😃.</p>
            </div>
            <div>
                <h2 className={styles.title}>¿Que hago?💭</h2>
                <p className={styles.text}>Actualmente programo en React en el frontend y Nodejs en el backend, y estoy aprendiendo NextJs por su amplia mejora al rendimiento de paginas. Pero me adapto a lo que se necesite en el momento, pueden consultar mi <a className="git" href="https://github.com/ptzt">Github</a> para ver mis proyectos y colaboracines.</p>
            </div>

            <div>
                <h2 className={styles.title}>Tecnologias💻</h2>
                <p className={styles.text}>Utilizo una amplia gama de herramientas para abordar cada obstáculo de la manera más eficiente posible, voy aprendiendo tecnologias nuevas con mucho esfuerzo y dedicacion, pero estas son las que mejor controlo hasta el momento.</p>
                <p className={styles.icons}>
                    <h3><SiReact size={35} /> React.js</h3>
                    <h3><SiGit size={35} /> Git</h3>
                    <h3><SiJavascript size={35} /> Javascript</h3>
                    <h3><SiMysql size={35} /> MySql</h3>
                    <h3><SiTypescript size={35} /> TypeScript</h3>
                    <h3><DiNodejs size={35} /> Node.js</h3>
                    <h3><SiMongodb size={35} /> MongoDB</h3>
                    <h3><SiPostgresql size={35} /> Postgresql</h3>
                    <h3><SiNextdotjs size={35} /> Next.js</h3>
                </p>
            </div>
        </div>
    )
}