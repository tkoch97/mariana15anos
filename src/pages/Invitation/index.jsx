import './style.scss'
import MarianaPhoto from '../../assets/mariana-photo-with-stars.png'
import { BirthInformations } from '../../components/BirthInformations'
import { RoundedButton } from '../../components/RoundedButton';
import PinIcon from '../../assets/pinIcon.svg';
import ConfirmPresenceIcon from '../../assets/confirmPresenceIcon.svg';
import BagCoinIcon from '../../assets/bagCoinIcon.svg';

export function Invitation() {

  return (
    <>
      <div className="invitationContentBox">

        <div className="invitationContentBox__photoAndInformation">

          <div className="invitationContentBox__photoSection">
            <img className='invitationContentBox__marianaPhoto' src={MarianaPhoto} 
            alt="Foto da Mariana sentada num gramado, posando com a mão no queixo e olhando parra o lado. 
            Vestindo uma blusa cinza. Na parte de baixo da foto existem algummas estrelas pratas e lilás 
            com gliter de diferentes tamanhos." />
          </div>
          <div className="invitationContentBox__informationSection">
            <BirthInformations/>
          </div>

        </div>

        <div className="invitationContentBox__actionButtons">
          <RoundedButton 
            image={PinIcon} 
            subtitle='Abrir local no mapa'
            externalLink='https://maps.app.goo.gl/q2hLQf12PeUkfK9KA'
          />
          <RoundedButton 
            image={ConfirmPresenceIcon} 
            subtitle='Confirmar presença'
            externalLink='https://w.app/RIvViW'
          />
          <RoundedButton 
            image={BagCoinIcon} 
            subtitle='Meu presente ideal: um Pix!'
            internalLink='/pix'
          />
        </div>
      </div>
    </>
  )
}