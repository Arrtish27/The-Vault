import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CharacterList = () => {
  const navigate = useNavigate(); // Get the navigate function from the hook

  // Function to handle button clicks and navigate to Character component with ID
  const handleButtonClick = (id) => {
    // Navigate to the Character component with the specific ID
    navigate(`/characters/${id}`);
  };

  return (
    <div className='character-list-container'>
      <h2>Character List</h2>
      <div className='button-container'>
        <button onClick={() => handleButtonClick(1)}>Character 1</button>
        <button onClick={() => handleButtonClick(2)}>Character 2</button>
        <button onClick={() => handleButtonClick(3)}>Character 3</button>
        <button onClick={() => handleButtonClick(4)}>Character 4</button>
        <button onClick={() => handleButtonClick(5)}>Character 5</button>
      </div>
      <Link to="/home" className="button">Back to Home</Link>
    </div>
  );
};

export default CharacterList;
