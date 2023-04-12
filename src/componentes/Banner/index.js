import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou David Rodrigo de Oliveira,
          fazendo curso de Front-end da Alura. Aqui busco vários conhecimentos,
          espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="cirtuloColorido"
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src="https://github.com/davidroliveira.png"
          alt="Foto David"
        />
      </div>
    </div>
  );
}
