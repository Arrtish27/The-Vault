import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Characters.css';

const Characters = () => {
  return (
    <div className='characters-container'>
      <div className='main-col-1 bordered'>
        <div className='profile-row bordered'>
          <div className='profile-section bordered'>
            <div className='profile-pic bordered'></div>
            <div className='charc-intro bordered'>
                Nicol Bolas
            </div>
          </div>
          <div className='hp-ac-section bordered'>
            <table className='hp-ac-table'>
                <tbody>          
                    <tr>
                        <td>50/50</td>
                    </tr>
                    <tr>
                        <td>16</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className='stats-row bordered'>
          <div className='score-col bordered'>
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
          <div className='skill-col bordered'>
            <div className='profs-list'>
                <h3>Use Magical Device</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='main-col-2 bordered'>
        <div className='bonu bordered'>
            <table className='bonuses-table'>
                <tbody>          
                    <tr>
                        <td className='speed-init'>+2</td>
                        <td className='atk-bonus'>+5</td>
                        <td className='spell-no'>+8</td>
                        <td>
                            <table className='magic-items-table'>
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
        <div className='row-2-2 bordered'></div>
      </div>
      <div><Link to="/" className="button">Back to Home</Link></div>
    </div>
  );
};

export default Characters;
