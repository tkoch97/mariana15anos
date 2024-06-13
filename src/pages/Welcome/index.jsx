import './style.scss'
import '../../components/MarianaTitle';
import { MarianaTitle } from '../../components/MarianaTitle';
import CornerArtSupLeft from '../../assets/corner-art-sup-left.svg';
import CornerArtSupRight from '../../assets/corner-art-sup-right.svg';
import CornerArtInfLeft from '../../assets/corner-art-inf-left.svg';
import CornerArtInfRight from '../../assets/corner-art-inf-right.svg';
import { RetangularButton } from '../../components/RetangularButton';
import { useNavigate } from 'react-router-dom';

export function Welcome() {

  const navigate = useNavigate();

  return (
    <>
      <main className='contentBox'>
        
        <div className="contentBox__container">
          <div className="contentBox__cornerSupArts">
            <img className='CornerSupLeft' src={CornerArtSupLeft} alt="" />
            <img className='CornerSupRight' src={CornerArtSupRight} alt="" />
          </div>
          <h1 className='contentBox__welcomeMessage'>Bem-vindo(a) ao meu convite!</h1>
          <MarianaTitle/>
          <h1 className="contentBox__15thBirth">
            Faz 15!
          </h1>
          <div className="contentBox__ButtonToEnterOnInvitation">
            <RetangularButton title='Abrir convite' onClick={() => navigate(`/invitation`)}/>
          </div>
          <div className="contentBox__cornerInfArts">
            <img className='CornerInfLeft' src={CornerArtInfLeft} alt="" />
            <img className='CornerInfRight' src={CornerArtInfRight} alt="" />
          </div>
        </div>

      </main>
    </>
  )
}


