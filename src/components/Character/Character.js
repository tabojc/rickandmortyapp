import React from 'react';
import classNames from 'classnames';
import './Character.css';

const Character = ({image, name, cssClass}) => {
  return (
    <div className='Character'>
      <div className='Character__image'>
        <img
          className={classNames('Character__image', cssClass)}
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
}

export default Character;
