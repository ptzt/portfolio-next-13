import styles from './About.module.css'
import me from './me.jpg'
import Image from 'next/image';



export default function About() {
    return (
        <div className="main">
            <p className={styles.title}>Sobre mi</p>
            <h3 className={styles.text}>Este soy yo 🐼</h3>
            <Image
                className={styles.image}
                alt="me"
                src={me}
            />
            <p className={styles.text}>Soy un programador Fullstack del Norte de Argentina mas precisamente de Tucuman!. Me preocupo por el código accesible y eficaz. Soy un gran admirador de leer y tengo pensado en contribuir al código abierto, me parece muy interesante y lindo ver a comunidades tan grandes trabajando juntas. Programo hace un año y medio, he aprendido mucho sobre principios de programación, escalado y arquitectura de sistemas. En este momento, estoy aprendiendo NextJs y Typescript con mucha calma pero me gustaria migrar este sitio a esas tecnologias en un tiempo.</p>
            <p className={styles.text}>
                No estoy 100% seguro de qué poner en esta página, no lo he considerado mucho. Si tenes alguna idea o queres darme algun feedback ,
                <a className={styles.link} href="/Contact">podes hacerlo aca!</a></p>
        </div>
    )
}
