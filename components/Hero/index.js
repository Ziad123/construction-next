
import { Fade } from 'react-slideshow-image'
import styled from 'styled-components'


const Button = styled.a`
    margin-top: 22px;
    line-height: 24px;
    color: #ffffff;
    z-index: 11000;
    font-size: 1em;
    font-weight: 500;
    background: #62be1e;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    --webkit-transition: all 0.3s ease;

    &:hover {
        background: #FEAB48 !important;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.6em;
        padding: 6px 20px;
    }
`;


export default function Hero() {

    const slides = [
        {
            title: "JARDINS EXPERTS MAROC",
            titleColor: '#ffffff',
            button: "Besoin de Services d'Urgence?",
            href: '/',
            imgPath: '/slider/slider-1.jpg',
        }, {
            title: 'Hello there',
            titleColor: "#FFF",
            button: 'Hell',
            href: '/',
            imgPath: '/slider/slider-1.jpg'
        }
    ]



    return (
        <>
            <Fade className="slider-wrapper">
                {
                    slides.map((slide, index) =>
                        <div key={index}
                            className="slider-content"
                            style={{
                                background: `url('${slide.imgPath}') black`,
                                height: '70vh',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "cover",
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                
                                justifyContent: 'center',
                                color: `${slide.titleColor}`,
                                flexFlow: 'column'
                            }}>
                            <div className="inner" style={{ minWidth: '40%' }}>
                                <h1 style={{
                                    fontSize: '2em',
                                }}>{slide.title}</h1>
                                {slide.city && <h2>{slide.city}</h2>}
                                <p style={{
                                    fontSize: '20px'
                                }}>{slide.description}</p>
                                {slide.button && <Button href={slide.href}>{slide.button}</Button>}
                            </div>
                        </div>
                    )
                }
            </Fade>
            
        </>
    )
}