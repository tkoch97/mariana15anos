import './style.scss'
import CornerArtSupLeft from '../../assets/corner-art-sup-left.svg';
import CornerArtSupRight from '../../assets/corner-art-sup-right.svg';
import CornerArtInfLeft from '../../assets/corner-art-inf-left.svg';
import CornerArtInfRight from '../../assets/corner-art-inf-right.svg';
import {MarianaTitle} from '../MarianaTitle';

export function BirthInformations() {

  return (
    <div className="birthInformationsContent">
      <div className="birthInformationsContent__cornerSupArts">
        <img className='CornerSupLeft' src={CornerArtSupLeft} alt="adorno de canto superior esquerdo" />
        <img className='CornerSupRight' src={CornerArtSupRight} alt="adorno de canto superior direito" />
      </div>

      <div className="birthInformationsContent__dateAndHour">
        <p className="date">31.08.2024</p>
        <p className="dayAndHour">
          Sábado as 18h
        </p>
      </div>

      <MarianaTitle className="marianaTitleContent--onInvitation"/>

      <p className="birthInformationsContent__InvitionPhrase">
        Convido você para comemorar comigo esse dia único e inesquecível!
      </p>

      <p className="birthInformationsContent__partyAddress">
        Sítio N.S. de Fátima,<br/> Rua Mal Deodoro, lt 04, Qdra 01 - Parque Equitativa,<br/> Duque de Caxias
      </p>

      <p className="birthInformationsContent__dresscode">
        Traje: esporte fino.
      </p>


      <div className="birthInformationsContent__cornerInfArts">
        <img className='CornerInfLeft' src={CornerArtInfLeft} alt="adorno de canto inferior esquerdo" />
        <img className='CornerInfRight' src={CornerArtInfRight} alt="adorno de canto inferior direito" />
      </div>
    </div>
  )
}