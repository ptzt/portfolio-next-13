import Link from "next/link"
import styles from './Navigation.module.css'

const links = [{
    label: 'Home',
    route: '/'
},
{
    label: 'About',
    route: '/About'
},
{
    label: 'Contact',
    route: '/Contact'
}
]

export default function Navigation() {
    return (
        <header>
            <nav>
                <ul className={styles.navigation}>
                    {links.map(({ label, route }) => (
                        <li className={styles.text} key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}