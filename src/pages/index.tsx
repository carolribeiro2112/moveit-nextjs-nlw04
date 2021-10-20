import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBar/>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </div>
    </>
  )
}
