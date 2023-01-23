import contactos from '../../assets/imgs/contactos.jpg'
import "../../assets/style/Contacto.css"
function Contactos() {
    return ( 
    
        <div class="Contactos">
                <img src={contactos} width="150" height="150"/>
            <h2> Contactos:</h2>
            <h3>Tel: (+52) 961-449-18-91<br></br></h3>
            <h3> Facebook: Luis Ramirez<br></br></h3>
            <h3> Correo:luisantonionucamendi@gmail.com<br></br></h3>
            <h3> Instagram:luisramirez2304<br></br></h3>

        </div>
     );
}

export default Contactos;