import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeIsActive, FailedButton, CompletedButton } from "./style";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)


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
              onClick={resetChallenge}
            >
              Falhei
            </FailedButton>

            <CompletedButton type="button">Completei</CompletedButton>
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