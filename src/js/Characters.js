import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Characters.css';

const Characters = () => {
  return (
    <div className='characters-container'>
      <div className='main-col-1 padded'>
        <div className='profile-row '>
          <div className='profile-section padded'>
            <div className='profile-pic bordered-black '></div>
            <div className='charc-intro bordered-black padded celadon_green'>
                Nicol Bolas
            </div>
          </div>
          <div className='hp-ac-section padded'>
            <table className='hp-ac-table'>
                <tbody>          
                    <tr>
                        <td className=' hp-bckground celadon_green'>50/50</td>
                    </tr>
                    <tr>
                        <td className=' ac-bckground pastel_pink'>16</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className='stats-row padded'>
          <div className='score-col dark_green'>
            <table className='stats-table'>
                <tbody>          
                    <tr>
                        <td>STR</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>DEX</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>CON</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>INT</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>WIS</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>CHA</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
          </div>
          <div className='skill-col '>
            <div className='profs-list bordered-black dark_green'>
                <h3>Use Magical Device</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='main-col-2 padded'>
        <div className='bonuses-row'>
            <table className='bonuses-table'>
                <tbody>          
                    <tr>
                        <td className='speed-init pink'>+2</td>
                        <td className='atk-bonus pink'>+5</td>
                        <td className='spell-no pink'>+8</td>
                        <td>
                            <table className='magic-items-table pink'>
                                <tbody>
                                    <tr>
                                        <td>Magic Item 1</td>
                                    </tr>
                                    <tr>
                                        <td>Magic Item 2</td>
                                    </tr>
                                    <tr>
                                        <td>Magic Item 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='extra-details bordered-black padded celadon_green'></div>
      </div>
      <div><Link to="/" className="button">Back to Home</Link></div>
    </div>
  );
};

export default Characters;
