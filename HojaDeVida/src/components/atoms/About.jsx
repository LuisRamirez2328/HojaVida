import Habilidad from '../../assets/imgs/Habilidades.jpg'
import  '../../assets/style/Datos.css'
function About() {
    return (  
        <div class="About">
        
            <h3> Habilidades <br></br>
            Creativo <br></br>
            Resolucion de Problemas<br></br>
            Jugar Futbol <br></br> 
             Capacidad de trabajar en equipo <br></br>
            Mente abierta <br></br>
            </h3>
            <img src={Habilidad} width="250" height="250"/>
                
        </div>
         
    );
}

export default About;