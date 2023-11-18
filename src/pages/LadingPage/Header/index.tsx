import {useNavigate} from 'react-router-dom'
import logo from "../../assets/logo_animal_saves.png";
import styles from "./index.module.css";

export const Header = () => {

  const navegate = useNavigate()

  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="Patinhas Livres"></img>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#SobreNos">Quem Somos</a>
        <a href="#Parceiros">Parceiros</a>
        <a onClick={() => navegate("/")}>Contato</a>
      </nav>
    </header>
  );
};