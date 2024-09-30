import React from 'react';
import './host-card.css';
import mainImage from '../../img/synescape-temp.jpg';

function HostCard() {

  // TODO make/get svgs for the symbols in the top-right corner

  // TODO make into props
  const title = "Synescape"
  const text1 = "Bonus to obscure and bizarre noise track drop rate AOE bass effect can stun enemies for two rounds"
  const text2 = "Expert shitposter boosts dankness of all memes"
  const text3 = "Crafts runes on armour and crafts party gear"

  return(
    <div className="host-card-component">
      <div className="title">
        <div className="doodad left"></div>
        {title}
        <div className="doodad right">
          <div className="type-icon bug"/>
        </div>
      </div>
      <div className="portrait" style={{backgroundImage: `url(${mainImage})`}}/>
      <div className="description-container">
        <div className="description-background" />
        <div className="doodad left">
          <div className="doodad right small"/>
        </div>
        <div className="description-row">
          {text1}
        </div>
        <div className="doodad right" />
        <div className="doodad left">
          <div className="doodad right small"/>
        </div>
        <div className="description-row">
          {text2}
        </div>
        <div className="doodad right"/>
        <div className="doodad left">
          <div className="doodad right small"/>
        </div>
        <div className="description-row">
          {text3}
        </div>
        <div className="doodad right"/>
      </div>
    </div>
  );
}

export default HostCard;