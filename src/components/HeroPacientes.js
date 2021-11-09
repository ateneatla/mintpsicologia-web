import React from 'react';
import styles from './HeroPacientes.module.css';


function HeroPacientes() {
  return (
    <section>
      <header className={`hero shadow--lw ${styles.pacientes}`}>
        <h1 className={styles.header}>
          Los pacientes
        </h1>
      </header>
      <p className={styles.description}>
      Aquí los pacientes comparten reflexiones y testimonios de forma anónima. Me siento muy honrada ante su generosidad, espero que tú también sepas apreciarlo porque esto que hacen es muy valiente.
      </p>
    </section>
  );
}

export default HeroPacientes;
