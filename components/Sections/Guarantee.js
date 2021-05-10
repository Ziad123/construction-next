import styled from "styled-components";
import AutoContainer from "../AutoContainer";


const Section = styled.section`
    position: relative;
    padding: 10px 0 0 0;
`;

const Row = styled.div`

    position: relative;
    display: flex;
    width: 100%;

    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }

`;

const ContentColumn = styled.div`
    position: relative;
    display: flex;
    min-height: 1px;
    width: 100%;
    @media (min-width: 768px) {
        width: 64.853%;
    }
`;

const ImgColumn = styled.div`
    position: relative;
    display: flex;
    min-height: 1px;
    width: 100%;

    @media (min-width: 768px) {
        width: 34%;
    }
`;

const ContentWrap = styled.div`

    position: relative;
    display: flex;
    padding: 1.5em;
    align-items: center;
    align-content: center;

    background-color: #d6d6d600;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

    width: 100%;
    flex-wrap: wrap;
`;

const BackgroundOverlay = styled.div`
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    background-image: url("https://templatekits.themewarrior.com/lawnia/wp-content/uploads/sites/18/2021/03/bg-guaranted.png");
    background-position: center left;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;

    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;

const ContentSection = styled.section`
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 0;
    width: 100%;
    position: relative;
    display: flex;
    margin-right: auto;
    margin-left: auto;
`;

const IconColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 1px;
    @media (min-width: 768px) {
        flex-direction: row;
        width: 23.026%;
    }
`;

const IconWrap = styled.div`
    width: auto;
    max-width: 100%;
    text-align: center;
    position: relative;

    img {
        max-width: 100px;
        vertical-align: middle;
        display: inline-block;
        height: auto;
        border: none;
        border-radius: 0;
        box-shadow: none;
    }
`;

const HeaderColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 1px;
    width: 100%;
    @media (min-width: 768px) {
        width: 76.8%;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: #232323;

        span {
            color: #7FAC01 !important;
        }
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2em;
        font-weight: bold;
        color: #232323;
    }
`;

const ButtonWrapper = styled.div`
    a {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        fill: #88b600;
        color: #88b600;
        background-color: #FCFFF300;
        padding: 0;
    }
`;


const Guarantee = () => {
    return (
        <>

        <Section>
            <AutoContainer>
                <Row>
                    <ContentColumn>
                        <ContentWrap>
                            <BackgroundOverlay></BackgroundOverlay>
                            <ContentSection>
                                <IconColumn>
                                    <ContentWrap>
                                        <IconWrap>
                                            <img width="100" height="107" src="https://templatekits.themewarrior.com/lawnia/wp-content/uploads/sites/18/2021/03/icon-guaranted.png" />
                                        </IconWrap>
                                    </ContentWrap>
                                </IconColumn>
                                <HeaderColumn>
                                    <h3>100%<span> Garantie</span></h3>
                                    <p>Si vous n'êtes pas satisfait, nous vous rembourserons votre argent à 100%. Aucune question posée!</p>
                                    <ButtonWrapper>
                                        <a href="/">LIRE PLUS</a>
                                    </ButtonWrapper>
                                </HeaderColumn>
                            </ContentSection>
                        </ContentWrap>
                    </ContentColumn>
                    <ImgColumn>
                        <img height="350" width="350" src="/img/guarantee.jpeg" />
                    </ImgColumn>
                </Row>
            </AutoContainer>
        </Section>


        </>
    )
}


export default Guarantee;