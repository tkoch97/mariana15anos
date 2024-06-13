import './style.scss';

export function RetangularButton(props) {

  const {title, ...rest} = props;

  return(
    <>
      <button className="container"
      {...rest}
      >
        <p className="container__title">{title}</p>
      </button>
    </>
  )

}