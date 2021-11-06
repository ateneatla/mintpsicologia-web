import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';


export default function Home() {
  const buttonClasses = `button button--primary button--lg ${styles.button}`
  return (
    <Layout
      description="Psicología online<head />">
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
        <div>
        <iframe src="//www.doctoralia.es/ajax/marketing/doctor/widget/big_with_calendar/maria-teresa-lopez-alonso/null?customUtm=null&amp;id=6ey2gr190l&amp;header=null&amp;content=null&amp;fullwidth=null&amp;referer=https%3A%2F%2Fmintpsicologia.grigri.cloud%2F&amp;hide_branding=true&amp;widget_position=bottom&amp;opinion=false" sandbox='allow-scripts allow-same-origin' />
        </div>
      </main>
    </Layout>
  );
}
