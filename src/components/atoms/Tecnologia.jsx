import Lenguaje from '../../assets/imgs/lenguajes.jpg'
import "../../assets/style/Tecnologia.css"
function Tecnologia() {
    return ( 
        <div class="Tecnologia">
            <h3> Todo lo  que he aprendido es: <br></br>
            Justinmind <br></br>
            Pseint<br></br>
            Javascript <br></br>
            C++ <br></br>
            Java <br></br>
            </h3>
            
            
            <div class="Lenguaje">
            <img src={Lenguaje} alt="Lenguajes" width="250" height="250"/>
            </div>
        </div>
     );
}

export default Tecnologia;