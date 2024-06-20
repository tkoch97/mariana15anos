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
      <main className='welcomeContentBox'>
        
        <div className="welcomeContentBox__container">
          <div className="welcomeContentBox__cornerSupArts">
            <img className='CornerSupLeft' src={CornerArtSupLeft} alt="adorno de canto superior esquerdo" />
            <img className='CornerSupRight' src={CornerArtSupRight} alt="adorno de canto superior direito" />
          </div>
          <h1 className='welcomeContentBox__welcomeMessage'>Bem-vindo(a) ao meu convite!</h1>
          <MarianaTitle/>
          <h1 className="welcomeContentBox__15thBirth">
            Faz 15!
          </h1>
          <div className="welcomeContentBox__ButtonToEnterOnInvitation">
            <RetangularButton title='Abrir convite' onClick={() => navigate(`/invitation`)}/>
          </div>
          <div className="welcomeContentBox__cornerInfArts">
            <img className='CornerInfLeft' src={CornerArtInfLeft} alt="adorno de canto inferior esquerdo" />
            <img className='CornerInfRight' src={CornerArtInfRight} alt="adorno de canto inferior direito" />
          </div>
        </div>

      </main>
    </>
  )
}


