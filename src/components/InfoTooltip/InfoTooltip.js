import React from 'react';
import '../InfoTooltip/InfoTooltip.css'

function InfoTooltip(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__box">
        <div className=''>
          <div className={`popup__success ${props.isSuccess ? `popup__success_yes` : `popup__success_no`}`} />
          <p className="popup__title popup__title_center">
            {props.isSuccess ? 'Данные профиля изменены.' : 'Что-то пошло не так! Попробуйте ещё раз.'}
          </p>
        </div>
        <button type="button" className="popup__close-button" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;