import { Overlay, Container } from './styles';

export function LevelUpModal () {
  return (
    <Overlay>
      <Container>
        <header>2</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type='button'>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </Container>
    </Overlay>
  )
}