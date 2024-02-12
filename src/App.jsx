import { useState } from 'react'

import './App.css'

function App() {
  const [name, setName] = useState("Ishika");
  const [showCards, setShowCards] = useState(false);

  const birthdayCards = [
    {
      id: 1,
      title: "Happy Birthday!",
      message: "Wishing a day filled with joy and laughter.",
    },
    {
      id: 2,
      title: "Cheers to Another Year!",
      message: "May this year bring success and happiness.",
    },
    {
      id: 3,
      title: "Birthday Bliss!",
      message: "May the day be as special as you are.",
    },
  ];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleShowCards = () => {
    setShowCards(true);
  };
  const backgroundImage = name.toLowerCase() === "ishika"
  ? "url('https://media-bom2-1.cdn.whatsapp.net/v/t61.24694-24/423956235_904257067822110_3308037852406737896_n.jpg?ccb=11-4&oh=01_AdTzG4h4RNyQz5r_dQTyesNI54BRClqSEqeNU22EJXYfiQ&oe=65D6D3E6&_nc_sid=e6ed6c&_nc_cat=102')"  // Replace with the actual path to your image
  : "none";
  const imageOpacity = name.toLowerCase() === "ishika" ? 0.7 : 1;
  const mainBackgroundImage = "url('https://imgs.search.brave.com/0M8DMcX5FujV8oj4znHTW1Yn-foei7lwLrBR2ebgPdM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTg2MzY1MDgtZTBk/YjM4MTRiZDFkP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4bGVIQnNi/M0psTFdabFpXUjhN/bng4ZkdWdWZEQjhm/SHg4ZkE9PQ')"; // Replace with the actual path to your image

const mainBackgroundStyle = {
  backgroundImage: mainBackgroundImage,
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
};

  return (
    <div className="birthday-wisher-container"style={mainBackgroundStyle}
    >
      <div className="birthday-card-container">
        <h1 className="header">Birthday Wisher</h1>
        <label className="label">
          Enter the name of the person:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="input"
          />
        </label>

        <button onClick={handleShowCards} className="button">
          Show Birthday Cards
        </button>

        {showCards && (
          <div className="cards-container">
            {birthdayCards.map((card) => (
              <div key={card.id} className="birthday-card" style={{ backgroundImage, opacity: imageOpacity }}>
                <h2 className="card-title">{card.title}</h2>
                <h3>{name}</h3>
                <p className="card-message">{card.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App
