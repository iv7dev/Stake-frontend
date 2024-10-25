import './FeatCards.css';
import back1 from './back1.png';
import back2 from './back2.png';
import c1_1 from './c1-1.png';
import c1_2 from './c1-2.png';
import c1_3 from './c1-3.png';
import c1_4 from './c1-4.png';
import c2_1 from './c2-1.png';
import c2_2 from './c2-2.png';
import c2_3 from './c2-3.png';
import c2_4 from './c2-4.png';
import p1 from './p-1.png';
import p2 from './p-2.png';

const FeatCards = () => {
  return (
    <div className="feat-cards" style={{ backgroundColor: '#081c2c' }}>
      <div className="card" style={{ backgroundImage: `url(${back1})` }}>
        <div className="card-content">
          <h2>Thousands of thrilling games.<br />Thousands of ways to win big.</h2>
          <div className="features">
            <div className="feature">
              <img src={c1_1} alt="New Releases" />
              New Releases
            </div>
            <div className="feature">
              <img src={c1_2} alt="Slots" />
              Slots
            </div>
            <div className="feature">
              <img src={c1_3} alt="Live Casino" />
              Live Casino
            </div>
            <div className="feature">
              <img src={c1_4} alt="Table Games" />
              Table Games
            </div>
          </div>
          <button className="explore-button">Explore Casino</button>
        </div>
        <img src={p1} alt="Person" className="person-image" />
      </div>
      <div className="card" style={{ backgroundImage: `url(${back2})` }}>
        <div className="card-content">
          <h2>Watch and bet on the biggest events across sports and beyond</h2>
          <div className="features">
            <div className="feature">
              <img src={c2_1} alt="Sports" />
              Sports
            </div>
            <div className="feature">
              <img src={c2_2} alt="Esports" />
              Esports
            </div>
            <div className="feature">
              <img src={c2_3} alt="Horse Racing" />
              Horse Racing
            </div>
            <div className="feature">
              <img src={c2_4} alt="Live Streams" />
              Live Streams
            </div>
          </div>
          <button className="explore-button">Explore Sports</button>
        </div>
        <img src={p2} alt="Person" className="person-image" />
      </div>
    </div>
  );
};

export default FeatCards;