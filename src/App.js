import { useState } from 'react';
import './App.css';
import FeedItem from './components/feedItems';
import foods from './data/foods';

function App() {
  const [lvl, setLvl] = useState(0);
  const [currentImage, setCurrentImage] = useState('/imgs/mooAlive.png');

  function onClickFood(theFood) {
    let updatedLvl = lvl;

    if (theFood === 'grass') {
      updatedLvl += 20 * 3;
    } else if (theFood === 'pumpkin') {
      updatedLvl += 10 * 3;
    } else if (theFood === 'melon') {
      updatedLvl += 5 * 3;
    } else if (theFood === 'poison') {
      updatedLvl = null;
    }

    setLvl(updatedLvl);
    updateImage(updatedLvl);
  }

  const increaseSize = Math.min(300, Math.max(lvl === 0 ? 30 : lvl + 30, lvl !== null ? lvl : 300));

  function updateImage(lvl) {
    let newImage;

    if (lvl === null) {
      newImage = '/imgs/MooDied.png';
    } else if (lvl >= 300) {
      newImage = '/imgs/pack_icon.png';
    } else if (lvl >= 285) {
      newImage = '/imgs/mooAlert.png';
    } else if (lvl > 0) {
      newImage = '/imgs/mooAlive.png';
    }

    setCurrentImage(newImage);
  }

  const foodElements = foods.map((food, index) => (
    <FeedItem key={index} food={food} onClickFood={onClickFood} />
  ));

  return (
    <div className='App'>
      <div className='level'>
        <h1>Level {lvl !== null ? Math.round(lvl / 3) : '0'}</h1>
      </div>
      <div className='moo-malee'>
        <div className='bg-box'>
          <div className='box-something'>
            <img 
              style={{ height: increaseSize, width: increaseSize }} 
              src={currentImage} 
              alt='' 
            />
          </div>
        </div>
      </div>
      <div className='grid-css'>
        {foodElements}
      </div>
    </div>
  );
}

export default App;
