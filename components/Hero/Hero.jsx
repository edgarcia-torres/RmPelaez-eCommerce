import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import bateria from './images/bateria1.png'
import alternator from './images/alternator2.webp'
import lights from '../Hero/images/lights2.jpg'

export default function Hero() {

    return (
        <Carousel fade>
            <Carousel.Item>
                <Image className="d-block w-100" src={bateria} alt="First slide" />
                <Carousel.Caption>
                    <h3>BATERIAS</h3>
                    <p>Trae tu bateria usada y recibe descuento de <strong>20.000</strong> pesos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100" src={alternator} alt="Second slide" />
                <Carousel.Caption>
                    <h3>ALTERNADORES</h3>
                    <p>Alternadores para carros de todas las marcas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src={lights} alt="Third slide" />
                <Carousel.Caption>
                    <h3>PARTES ELECTRICAS</h3>
                    <p>
                        Toda clase de partes electricas para auto.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}