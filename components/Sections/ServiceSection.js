import styled from 'styled-components'
import AutoContainer from '../AutoContainer';


const ServiceSection = styled.section`
    padding: 81px 0px;
    position: relative;
    box-sizing: border-box;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    flex-direction: column;
`;

const Col50 = styled.div`
    width: 100%;
    position: relative;
    min-height: 1px;
    display: flex;
    @media (min-width: 768px ) {
        width: 50%;
    }
`;

const ServiceBannerBG = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    background-image: url("https://ld-wp73.template-help.com/wordpress/prod_11363/v2/wp-content/uploads/2019/08/home-1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 2px 2px 2px 2px;
    width: 100%;

    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    margin: 0px 20px 0px 9px;
    padding: 38px 173px 42px 40px;
`;


const ServiceBannerTextFirst = styled.div`
    width: 100%;
    position: relative;

    margin-bottom: .7em;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.44em;
`;

const ServiceBannerTextSecond = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: .7em;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.3em;
`;

const ServiceBannerParagraph = styled.div`
    margin-bottom: .7em;
    position: relative;

    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65em;
    width: 74%;
`;

const CtaBtnContainer = styled.div`
    width: 100%;
    position: relative;
    text-align: left;
    box-sizing: border-box;
`;

const Button = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: .48px;
    fill: #62be1e;
    color: #62be1e;
    background-color: #ffffff;
    border-radius: 2px 2px 2px 2px;
    padding: 13px 30px;
    width: 60%;

    &:hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #FEAB48;
        transition: background 0.5s ease-in-out, color 0.4s ease-in-out;

    }
`;

const ButtonContentWrapper = styled.span`
    text-decoration: inherit;
    display: flex;
    justify-content: center;
`;

const ButtonText = styled.span`
    text-decoration: inherit;
    flex-grow: 1;
    order: 10;
    display: inline-block;
`;

const ColumnGap = styled.div`
    padding: 0px 20px 0px 20px;
`;

const ColumnWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnContent = styled.div`
    margin-bottom: 20px;
    width: 100%;
    position: relative;
`;

const ImageFigure = styled.div`
    margin: 0;
    display: inline-block;

    img {
        height: auto;
        max-width: 100%;
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
`;

const TextContent = styled.div`
    width: 100%;
    text-align: left;
    h3 {
        margin: 15px 0;
        color: #232323;

        @media (min-width: 1200px) {
            font-size: 22px;
        }
    }
    p {
        color: #79787F;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.64em;
        margin: 0;

    }
`;

const ServiceDetailBtnWrapper = styled.div`
    width: 100%;
    position: relative;

`;

const BtnContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

const Btn = styled.a`
    text-decoration: none;
    box-shadow: none;
    background-color: #02010100;
    opacity: 1;
    color: #FE8A01;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 0.48px;
    text-align: left;
    order: 1;

    &:hover {
        cursor: pointer;
    }
`;






const Services = () => {
    return (
        <>
        <ServiceSection>
            <AutoContainer>
                <Row>
                    <Col50>
                        <ServiceBannerBG>
                            <ServiceBannerTextFirst className="clearfix">
                                ON VOUS OFFRE
                            </ServiceBannerTextFirst>
                            <ServiceBannerTextSecond className="clearfix">
                                DES SERVICES EXPETIONNEL
                            </ServiceBannerTextSecond>
                            <ServiceBannerParagraph>
                            Nous offrons une large gamme de services d'aménagement paysager pour créer une atmosphère 
                            belle et confortable dans votre jardin.
                            Nos experts travaillent avec les plantes avec soin et attention.
                            </ServiceBannerParagraph>
                            <CtaBtnContainer>
                                <Button>
                                    <ButtonContentWrapper>
                                        <ButtonText>
                                            nos réalisations
                                        </ButtonText>
                                    </ButtonContentWrapper>
                                </Button>
                            </CtaBtnContainer>
                        </ServiceBannerBG>
                    </Col50>
                    <Col50>
                        <Row>
                            <Col50>
                                <ColumnGap>
                                    <ColumnWrap>
                                        <ColumnContent>
                                            <ImageFigure>
                                                <img src='/img/service-1.jpeg' alt="Plant Removal" />
                                            </ImageFigure>
                                            <TextContent>
                                                <h3>Service 1</h3>
                                                <p>
                                                Si vous souhaitez que votre jardin soit bien entretenu et que vous ayez besoin d'arbres et de plantes à enlever, tailler ou fertiliser, 
                                                notre équipe de professionnels fera tout pour vous, vous n'aurez donc aucun souci.
                                                </p>
                                            </TextContent>
                                        </ColumnContent>
                                        <ServiceDetailBtnWrapper>
                                            <BtnContainer>
                                                <Btn>
                                                    Voir details
                                                </Btn>
                                            </BtnContainer>
                                        </ServiceDetailBtnWrapper>
                                    </ColumnWrap>

                                </ColumnGap>
                            </Col50>
                            <Col50>
                            <ColumnGap>
                                    <ColumnWrap>
                                        <ColumnContent>
                                            <ImageFigure>
                                                <img src='/img/service-1.jpeg' alt="Plant Removal" />
                                            </ImageFigure>
                                            <TextContent>
                                                <h3>Service 2</h3>
                                                <p>
                                                Si vous souhaitez que votre jardin soit bien entretenu et que vous ayez besoin d'arbres et de plantes à enlever, tailler ou fertiliser, 
                                                notre équipe de professionnels fera tout pour vous, vous n'aurez donc aucun souci.
                                                </p>
                                            </TextContent>
                                        </ColumnContent>
                                        <ServiceDetailBtnWrapper>
                                            <BtnContainer>
                                                <Btn>
                                                    Voir details
                                                </Btn>
                                            </BtnContainer>
                                        </ServiceDetailBtnWrapper>
                                    </ColumnWrap>

                                </ColumnGap>
                            </Col50>
                        </Row>
                    </Col50>
                </Row>
            </AutoContainer>
        </ServiceSection>
        </>
    )
}


export default Services