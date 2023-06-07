import React from 'react';

function HeroPsicologa() {
  const description = (
    <>
      <p>
        Hola, encantada.
        Entiendo que si estás aquí, si has pulsado en "la psicóloga",
        quizá sea porque buscas una psicóloga con la que iniciar un proceso de
        terapia y quieres fabricarte una idea de quién o cómo soy (o para
        reafirmarte o cambiarla si ya me conocías de antes).
      </p>
      <p>
        Si has llegado hasta aquí probablemente sea porque algún 
        expaciente me ha recomendado y quieres saber más. 
      </p>
      <p>
        Esta web es para eso y para que puedas encontrar toda la
        información que necesites con total transparencia antes 
        de que empecemos terapia.
      </p>
      <p>
        Si quieres coger cita, puedes contactar conmigo
        o seleccionarla directamente en mi horario.
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
