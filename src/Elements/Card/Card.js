import React from 'react';
import tachyons from 'tachyons';
import './Card.css';

import Icon from '../Icon/Icon';

const Card = () => {
  return(
    <div className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you"/>
        <h1 class="f3 mb2">Mimi W.</h1>
        <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
      </div>
    </div>
  );
}

export default Card;