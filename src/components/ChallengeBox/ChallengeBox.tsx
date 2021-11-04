import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { ChallengeBoxContainer, ChallengeNotActive, ChallengeIsActive, FailedButton, CompletedButton } from "./style";

export function ChallengeBox() {
  const contextData = useContext(ChallengesContext)

  const hasActiveChallenge = true;

  return (
    <ChallengeBoxContainer>
      { hasActiveChallenge ? (
        <ChallengeIsActive>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <FailedButton type="button">Falhei</FailedButton>
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