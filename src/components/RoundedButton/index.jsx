import { useNavigate } from 'react-router-dom';
import './style.scss';

export function RoundedButton(props) {

  const {image, subtitle, internalLink, externalLink, ...rest} = props;

  const navigate = useNavigate()

  const handleClick = () => {
    if (internalLink) {
      navigate(internalLink);
    } else if(externalLink) {
      window.open(externalLink, '_blank');
    }
  };

  return(

    <div className="roundedButtonContainer" 
      onClick={handleClick} 
      {...rest}
    >
      <div className="roundedButtonContainer__circle">
        <img src={image} alt="ícone" className="roundedButtonContainer__icon" />
      </div>

      <p className="roundedButtonContainer__subtitle">{subtitle}</p>
    </div>
  )
}