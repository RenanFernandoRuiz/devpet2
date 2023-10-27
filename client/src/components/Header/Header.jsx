import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
        <span> LITTLE PET</span>
        <nav>
            <a href="#">INICIO</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">PRODUTOS</a>
            <a href="#">LOCALIZAÇÃO</a>
            <a href="#">CONTATO</a>

        
        </nav>
        </header>
    )
}

export default Header;