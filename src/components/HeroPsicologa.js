import React from 'react';

function HeroPsicologa() {
  const description = (
    <>
      <p>
        Hola, entiendo que si estás aquí, si has pulsado en "la psicóloga",
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
      <p>
        Tambíen escribo un blog que puedes leer a continuación.
      </p>
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
        </div>
      </section>
    </div>
  );
}

export default HeroPsicologa;
