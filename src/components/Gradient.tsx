import styled from 'styled-components';
import sampleImg from '../assets/sample.jpg';

const GradientDiv = styled.div`
    width: 100vw;
    height: 100vh;
`;

const QuarterCircle = styled.div`
    position: absolute;
    top: 500px;
    left: calc(50% - 150px);

    width: 300px;
    height: 300px;
  
    background-image: radial-gradient(circle 200px at 10px 10px, rgba(255,255,255,.5), rgba(255,255,255,0));
    border-radius: 10%;
    transform: rotate(45deg);
    overflow: hidden; 
`;

const ImgSample = styled.img`
    position: relative;
    top: 600px;
    left: calc(50% - 150px);
`;

function Gradient() {
    return (
        <GradientDiv>
            <QuarterCircle/>
            <ImgSample src={sampleImg} width={'300px'} />
        </GradientDiv>
    );
}

export default Gradient; 
