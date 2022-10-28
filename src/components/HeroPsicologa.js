import React from 'react';
import styles from './HeroPacientes.module.css';

function HeroPsicologa() {
  const buttonClasses = `button button--primary button--lg ${styles.button}`

  const description = (
    <>
      <p>
        Entiendo que si estás aquí, si has pulsado en "la psicóloga",
        quizá sea porque buscas una psicóloga con la que iniciar un proceso de
        terapia y quieres fabricarte una idea de quién o cómo soy (o para
        reafirmarte o cambiarla si ya me conocías de antes).
      </p>
      <p>
        De esa representación de mí dentro de tu cabeza derivan al menos dos
        posibles acciones: bien sales de esta página, y eso está bien porque no
        deberíamos elegir una psicóloga que no concuerde con nosotros, o bien
        permaneces con la web abierta porque no me has descartado.
      </p>
      <p>
        Sería poco habitual elegirme a ciegas para ser tu psicóloga así que te
        facilito una primera sesión gratuíta para que ese primer contacto arroje
        un poco más de luz. Puedes solicitarla usando mi horario.
      </p>
    </>
  )
  const criticame = (
    <>
      <p>
        Si eres mi paciente y tienes alguna opinión que quieras comunicarme
        de manera <b>anónima</b> siempre estoy dispuesta a crecer:
      </p>
      <div className={styles.buttons}>
        <a href="https://forms.gle/ugw5oKBgFZXxKAc99"
          className={buttonClasses}>
          Critícame
        </a>
      </div>
    </>
  )
  return (
    <div>
      <section className="row" >
        <div className="col col--6" >
          <iframe
            scrolling="no"
            allowtransparency="true"
            src="//www.doctoralia.es/ajax/marketing/doctor/widget/big_with_calendar/maria-teresa-lopez-alonso"
            sandbox='allow-scripts allow-same-origin allow-popups'
            className="doctoralia" />
        </div>
        <div className="col col--6" >
          {description}
          {criticame}
        </div>
      </section>
    </div>
  );
}

export default HeroPsicologa;
