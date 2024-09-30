import React from 'react';
import './host-card.css';

function HostCard({title, portrait, highlight, type, text1, text2, text3}) {

  // TODO make/get svgs for the symbols in the top-right corner

  return(
    <div className="host-card-component" style={{"--highlight": `${highlight || '#4f0056'}`}}>
      <div className="title">
        <div className="doodad left"></div>
        {title}
        <div className="doodad right">
          <div className={`type-icon ${type}`}/>
        </div>
      </div>
      <div className="portrait" style={{backgroundImage: `url(${portrait})`}}/>
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