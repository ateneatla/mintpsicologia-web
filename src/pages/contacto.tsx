import clsx from 'clsx';
import Layout from '@theme/Layout';
import React from 'react';

import styles from './contacto.module.css';


function ContactoHeader() {
  return (
    <header className="hero hero--secondary">
      <div className="container">
        <h1 className="hero__title">Como contactar conmigo</h1>
      </div>
    </header>
  );
}

function ContactoData() {
  return (
    <section>
      <div className="margin-vert--xl padding--lg">
        <h2>
          <ul className={styles.list}>
            <li>📞 635 05 75 73</li>
            <li>✉️ mintpsicologia@gmail.com</li>
          </ul>
        </h2>
      </div>
    </section>
  )
}

function Criticame() {
  const buttonClasses = `button button--secondary button--lg`

  const criticame = (
    <section>
      <div className="padding--xl">
        <p>
          Si eres mi paciente y tienes alguna opinión que quieras comunicarme
          de manera <b>anónima</b> siempre estoy dispuesta a crecer:
        </p>
        <div>
          <a href="https://forms.gle/ugw5oKBgFZXxKAc99"
            className={buttonClasses}>
            Critícame
          </a>
        </div>
      </div>
    </section>
  )

  return (
    <div>
      <section className="row" >
        {criticame}
      </section>
    </div>
  )
}

function Contacto(): JSX.Element {
  return (
    <Layout
      title="Contacto"
      description="Ponte en contacto con María Teresa López Alonso psicóloga.">
      <ContactoHeader />
      <div className="container margin-vert--lg">
        <main>
          <div className="row">
            <div className="col col--6">
              <img src="/img/maria-teresa-lopez-alonso.jpg" alt="María Teresa López Alonso" />
            </div>
            <div className="col col--6">
              <ContactoData />
              <Criticame />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Contacto;
