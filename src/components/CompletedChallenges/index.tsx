import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {DivCompletedChallenges} from './styles';

export function CompletedChallenges() {
  const {challengesCompleted} = useContext(ChallengesContext)

  return(
    <DivCompletedChallenges>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </DivCompletedChallenges>
  )
}