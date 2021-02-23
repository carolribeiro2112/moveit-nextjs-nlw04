import {Header} from './styles';

export function ExperienceBar() {
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{width: '50%'}}/>
        <span style={{left: '50%'}}>300xp</span>
      </div>
      <span>600 xp</span>
    </Header>
  );
}