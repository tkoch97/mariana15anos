import './style.scss'
import CornerArtSupLeft from '../../assets/corner-art-sup-left.svg';
import CornerArtSupRight from '../../assets/corner-art-sup-right.svg';
import CornerArtInfLeft from '../../assets/corner-art-inf-left.svg';
import CornerArtInfRight from '../../assets/corner-art-inf-right.svg';

export function BirthInformations() {

  return (
    <div className="birthInformationsContent">
      <div className="birthInformationsContent__cornerSupArts">
        <img className='CornerSupLeft' src={CornerArtSupLeft} alt="adorno de canto superior esquerdo" />
        <img className='CornerSupRight' src={CornerArtSupRight} alt="adorno de canto superior direito" />
      </div>

      


      <div className="birthInformationsContent__cornerInfArts">
        <img className='CornerInfLeft' src={CornerArtInfLeft} alt="adorno de canto inferior esquerdo" />
        <img className='CornerInfRight' src={CornerArtInfRight} alt="adorno de canto inferior direito" />
      </div>
    </div>
  )
}