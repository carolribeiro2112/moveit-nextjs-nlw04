import GlobalStyle from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { Countdownprovider } from '../contexts/CountdownContext';



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
   </>
  )
}

export default MyApp
