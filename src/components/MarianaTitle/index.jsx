import './style.scss';

export function MarianaTitle(props) {

  const {...rest} = props;

  return(
    <>
        <div className="marianaTitleContent" {...rest}>
        <p className="marianaTitleContent__text">Mariana</p>

        <div className="marianaTitleContent__linesWithStar">
          <div className="line1"></div>
          <div className="star">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0L11.0206 6.56434H17.5595L12.2694 10.6213L14.2901 17.1857L9 13.1287L3.70993 17.1857L5.73056 10.6213L0.440492 6.56434H6.97937L9 0Z" fill="#B967D8"/>
            </svg>
          </div>
          <div className="line2"></div>
        </div>
      </div>
    </>
  )

}