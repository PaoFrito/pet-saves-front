import styles from "./index.module.css";
import dog from "../../assets/dog.png";
import bubble1 from "../../assets/bubbles/twu_bubbles_lr_ud.svg";
import bubble2 from "../../assets/bubbles/three_bubbles.svg";
import bubble3 from "../../assets/bubbles/two_bubbles_up.svg";

export const AboutUs = () => {
  return (
    <div id="SobreNos" className={styles.root}>
      <section className={styles.s1}>
          <h2 className={styles.to_left}>Quem Somos?</h2>
          <p>Ajudamos animais de estimação a <br/> encontrar um lar amoroso e responsável</p>
          <img src={bubble1} className={styles.bubble1}/>
      </section>
      <section className={styles.s2}>
        <div>
          <img src={dog} alt="dog" className={styles.dog}/>
        </div>
        <div className={styles.s2_col2}>
          <img src={bubble2} className={styles.bubble2}/>
          <h2 className={styles.to_right}>Nosso objetivo</h2> 
          <p className={styles.to_right}>Nosso objetivo é prestar ajuda <br /> qualificada a quem ajude os animais</p>
        </div>
      </section>
      <section className={styles.s3}>
        <div>
          <p>Somos uma organização de <br/> arrecadação de recursos</p>
          <img src={bubble3} className={styles.bubble3}/>
        </div>
      </section>
    </div>
  );
};