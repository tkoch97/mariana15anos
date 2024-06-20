import './style.scss';
import CornerArtSupLeft from '../../assets/corner-art-sup-left.svg';
import CornerArtSupRight from '../../assets/corner-art-sup-right.svg';
import CornerArtInfLeft from '../../assets/corner-art-inf-left.svg';
import CornerArtInfRight from '../../assets/corner-art-inf-right.svg';
import { RetangularButton } from '../../components/RetangularButton';
import QRCode from '../../assets/qrCode.svg';
import { useNavigate } from 'react-router-dom';

export function Pix() {

  const navigate = useNavigate();
  function backPage() {
    navigate(-1)
  }

  return (
    <div className="pixContentBox">
      <div className="pixContentBox__container">

        <div className="pixContentBox__cornerSupArts">
          <img className='CornerSupLeft' src={CornerArtSupLeft} alt="adorno de canto superior esquerdo" />
          <img className='CornerSupRight' src={CornerArtSupRight} alt="adorno de canto superior direito" />
        </div>

        <h2 className="pixContentBox__thankMessage">Muito obrigado pelo presente!</h2>

        <p className="pixContentBox__instructionMessage">Escaneie o QR Code ou copie a chave pix</p>

        <div className="pixContentBox__qrCodeAndPixKey">
          <img src={QRCode} alt="" className="pixContentBox__qrCode" />

          <div className="pixContentBox__pixKeyInformations">
            <p className="keyTitle">Chave:</p>

            <p className="pixKey">21976274191</p>

            <p className="nameOfAccountHolder">Edilene Rego de Souza</p>
            <p className="bankName">Banco Itaú</p>

          </div>
        </div>

        <div className="pixContentBox__backButton">
          <RetangularButton title='Voltar ao convite' onClick={backPage}/>
        </div>

        <div className="pixContentBox__cornerInfArts">
          <img className='CornerInfLeft' src={CornerArtInfLeft} alt="adorno de canto inferior esquerdo" />
          <img className='CornerInfRight' src={CornerArtInfRight} alt="adorno de canto inferior direito" />
        </div>
        
      </div>
    </div>
  )
}