import Head from 'next/head';
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

          </div>
        </section>
      </div>
    </>
  )
}
