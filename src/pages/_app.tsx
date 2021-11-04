import GlobalStyle from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ChallengesProvider>
  )
}

export default MyApp
