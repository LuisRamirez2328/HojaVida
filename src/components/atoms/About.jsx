import Habilidad from '../../assets/imgs/Habilidades.jpg'
import  '../../assets/style/Datos.css'
function About() {
    return (  
        <div class="About">
            <h2> Tengo 19 años estoy estudiante de cuarto cuatrimestre de la carrera ingenieria en desarrollo de software <br></br>
            </h2>
            <h2> Habilidades</h2>
            <h3> Creativo <br></br>
            Capacidad de trabaja en equipo <br></br>
            Mente Abierta <br></br>
            Resolucion de problemas <br></br></h3>
            <img src={Habilidad} width="250" height="250"/>
                
        </div>
         
    );
}

export default About;