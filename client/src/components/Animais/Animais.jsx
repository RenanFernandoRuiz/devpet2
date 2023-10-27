import animais from '../../assets/animais.png'
import racao1 from '../../assets/racao1.png'
import racao2 from '../../assets/racao2.png'
import racao3 from '../../assets/racao3.png'
import pote from '../../assets/pote.png'
import styles from "./Animais.module.css"

function Animais() {
    return (
        <>
            <div className={styles.animais}>
                <img src={animais} alt="imagem de vários animais juntos cachorros, gatos, coelho e pássaro." />
                <br />
                <br />
                <h3>PRODUTOS: </h3>
                <br />
                



                <div className={styles.container} >
                    <img src={racao1} alt="" />

                    <img src={racao2} alt="" />

                    <img src={racao3} alt="" />

                    <img src={pote} alt="" />
                </div>

            </div>
        </>
    );
}

export default Animais;