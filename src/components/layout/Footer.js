import {FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer (){
return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaInstagram />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Dev for Nathan Maria da Silva</span> &copy; 2023
        </p>
    </footer>)
}

export default Footer