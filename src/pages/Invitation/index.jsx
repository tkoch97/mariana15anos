import './style.scss'
import MarianaPhoto from '../../assets/mariana-photo-with-stars.png'

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

          </div>

        </div>

        <div className="invitationContentBox__actionButtons">

        </div>
      </div>
    </>
  )
}