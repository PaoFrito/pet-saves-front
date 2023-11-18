import styles from "./index.module.css";
import patinha from "../../assets/patinha.png";
import dogcat from "../../assets/dog-cat.png";
import arrow from "../../assets/arrow.svg";
import Container from "@/components/Container";

export const MainContent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <Container>
          <div className={styles.content}>
            <div className={styles.left_div}>
              <div className={styles.main_col}>
                <h1 className={styles.p}>
                  <p>Se estiver na dúvida,</p>
                  <p>ajude. Na certeza,</p>
                  <p>adote.</p>
                </h1>
                <div className={styles.bt}>
                  <div>
                    <button className={styles.button}>Como ajudar</button>
                  </div>
                  <img src={arrow} alt="arrow" className={styles.arrow} />
                </div>
              </div>
            </div>
            <div className={styles.img_div}>
              <img className={styles.patinha2} src={patinha} />
              <img className={styles.dogcat} src={dogcat} alt="crown" />
            </div>
          </div>
        </Container>
      </div>
      <img className={styles.patinha1} src={patinha} />
    </main>
  );
};