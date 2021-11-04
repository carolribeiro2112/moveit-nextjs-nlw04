import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountDownContext } from "../../contexts/CountdownContext";
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeIsActive, FailedButton, CompletedButton } from "./style";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountDownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }


  return (
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeIsActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailedButton 
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </FailedButton>

            <CompletedButton 
              type="button"
              onClick={handleChallengeSucceded}
            >
              Completei
            </CompletedButton>
          </footer>
        </ChallengeIsActive>
        ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="level-up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  )
}