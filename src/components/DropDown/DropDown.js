import React from 'react';
import arrowDown from '../../img/arrow_down.svg';
import './DropDown.css';

const DropDown = (description) => {
  let isClickedDescription = false;
  function handleClickDescription() {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let container = document.querySelector('.dropdown-title');
      container.style.borderRadius = '10px 10px 0 0';
      let content = document.querySelector('.description');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow');
      arrow.classList.toggle('rotate');
    } else {
      let container = document.querySelector('.dropdown-title');
      container.style.borderRadius = '10px';
      let content = document.querySelector('.description');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow');
      arrow.classList.toggle('rotate');
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown-title">
        <h2>Description</h2>
        <div className={'arrow-dropdown arrow'}>
          <img
            src={arrowDown}
            alt="arrow down"
            onClick={() => handleClickDescription()}
          />
        </div>
      </div>
      <div className={'dropdown-content description '}>
        <p>{description.description}</p>
      </div>
    </div>
  );
};

export default DropDown;
