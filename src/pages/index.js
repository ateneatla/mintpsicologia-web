import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';


export default function Home() {
  const buttonClasses = `button button--primary button--lg ${styles.button}`
  return (
    <Layout
      description="Psicóloga online. Especialista en depresión, trastornos de ansiedad y trastornos de personalidad.">
      <main>
        <div className={styles.hero}>
          <div className={styles.buttons}>
            <ul className="menu__list">
              <li className="menu__list-item">
                <Link
                  className={buttonClasses}
                  to="/la-psicologa">
                  La psicóloga
                </Link>
              </li>
              <li className="menu__list-item">
                <Link
                  className={buttonClasses}
                  to="/los-pacientes">
                  Los pacientes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
