import './style.scss'
import '../../components/MarianaTitle';
import { MarianaTitle } from '../../components/MarianaTitle';
import CornerArtSupLeft from '../../assets/corner-art-sup-left.svg';
import CornerArtSupRight from '../../assets/corner-art-sup-right.svg';
import CornerArtInfLeft from '../../assets/corner-art-inf-left.svg';
import CornerArtInfRight from '../../assets/corner-art-inf-right.svg';
import { RetangularButton } from '../../components/RetangularButton';

export function Welcome() {

  return (
    <>
      <main className='contentBox'>
        <div className="contentBox__cornerArts">
          <img className='CornerSupLeft' src={CornerArtSupLeft} alt="" />
          <img className='CornerSupRight' src={CornerArtSupRight} alt="" />
          <img className='CornerInfLeft' src={CornerArtInfLeft} alt="" />
          <img className='CornerInfRight' src={CornerArtInfRight} alt="" />
        </div>
        <h1 className='contentBox__welcomeMessage'>Bem-vindo(a) ao meu convite!</h1>
        <MarianaTitle/>
        <h1 className="contentBox__15thBirth">
          Faz 15!
        </h1>
        <div className="contentBox__ButtonToEnterOnInvitation">
          <RetangularButton title='Abrir convite'/>
        </div>
      </main>
    </>
  )
}


