import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import NavBarAuth from "components/NavBarAuth/NavBarAuth"

export default function NavBar() {
    return (
        <div className={styles.wrapper}>
            <Link to="/">Phonebook</Link>
            <NavBarAuth/>
        </div>
    )
};
