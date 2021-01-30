import styled from 'styled-components'
import dbJson from '../db.json';

const BackgroundImage = styled.div`
  background-image: url(${dbJson.bg});
  flex: 1;
  background-size: cover;
  background-position: center;

`;

 const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  background-color: red;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


  export default function Home() {
  return (
    
    <BackgroundImage>
      <QuizContainer>
        dksdjkjçdsko
      </QuizContainer>
    </BackgroundImage>
    
  )
}
