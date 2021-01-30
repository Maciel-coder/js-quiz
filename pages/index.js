import styled from 'styled-components'
import dbJson from '../db.json';
import QuizBackground from '../src/conponents/QuizBackground';
import Widget from '../src/conponents/Widget';
import QuizLogo from '../src/conponents/QuizLogo';
import Footer from '../src/conponents/Footer';
import GitHubCorner from '../src/conponents/GitHubCourner';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



  export default function Home() {
  return (
    <QuizBackground backgroundImage={dbJson.bg}>
    <QuizContainer>
      <QuizLogo />
      <Widget>
        <Widget.Header>
          <h1>{dbJson.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{dbJson.description}</p>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>Quizes da Galera</h1>

          <p>lorem ipsum dolor sit amet...</p>
        </Widget.Content>
      </Widget>
      <Footer />
    </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/omariosouto" />
  </QuizBackground>
);
}
