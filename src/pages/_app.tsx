import GlobalStyle from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { Countdownprovider } from '../contexts/CountdownContext';



function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Countdownprovider>
      <Component {...pageProps} />
      <GlobalStyle/>
      </Countdownprovider>
    </ChallengesProvider>
  )
}

export default MyApp
