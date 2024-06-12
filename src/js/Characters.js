import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Characters.css';

const Characters = () => {
  return (
    <div className='characters-container'>
      <div className='main-col-1 bordered'>
        <div className='row-1-1 bordered'>
          <div className='column-1-1-1 bordered'>
            <div className='row-1-1-1-1 bordered'></div>
            <div className='row-1-1-1-2 bordered'></div>
          </div>
          <div className='column-1-1-2 bordered'></div>
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
          <div className='proficiency-col bordered'></div>
        </div>
      </div>
      <div className='main-col-2 bordered'>
        <div className='row-2-1 bordered'>
          <div className='column-2-1 bordered'>{/* table of 1 * 4 (rows * columns) */}</div>
        </div>
        <div className='row-2-2 bordered'></div>
      </div>
      <div><Link to="/" className="button">Back to Home</Link></div>
    </div>
  );
};

export default Characters;
