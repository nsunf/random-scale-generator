import styled, { ThemeProvider } from 'styled-components';
import theme from './components/Theme';

import Bottom from './components/Bottom';
import Mid from './components/Mid';
import Top from './components/Top';
import SelectorPopup from './components/SelectorPopup';

const AppBlock = styled.div`
  height: 100%;
  width: 100%;

  display: felx;
  justify-content: center;
  align-items: center;

  background: #eee;
`;

  // max-height: 1133px;
  // max-width: 744px;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-height: 926px;
  max-width: 428px;
  
  background: white;


  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 429px) {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    border: 2px solid white;
    border-radius: 32px;
  }
`;

function App() {
  return (
    <AppBlock>
      <ThemeProvider theme={theme}>
        <Container>
          <Top/>
          <Mid/>
          <Bottom/>
          <SelectorPopup />
        </Container>
      </ThemeProvider>
    </AppBlock>
  );
}

export default App;
