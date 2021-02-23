import {CountdownContainer, Button} from './styles';

export function Countdown () {
  return(
    <div>
      <CountdownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </CountdownContainer>

      <Button>
        Iniciar um ciclo
      </Button>
    </div>
  )
}