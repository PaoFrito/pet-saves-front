import styles from "./index.module.css";

type ContainerProps = {
    children: React.ReactNode | React.ReactNode[];
}

const Container = ({ children } : ContainerProps) => {
  return (
    <div className={styles.container}>
        { children }
    </div>
  );
};  

export default Container;