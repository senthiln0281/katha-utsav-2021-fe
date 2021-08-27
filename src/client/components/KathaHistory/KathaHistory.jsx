import React from 'react';
import Image1 from '../../assets/images/history-1.png';
import Image2 from '../../assets/images/history-2.png';
import Image3 from '../../assets/images/history-3.png';
import Image4 from '../../assets/images/history-4.png';
import Image5 from '../../assets/images/history-5.png';
import Image6 from '../../assets/images/history-6.png';
import Image7 from '../../assets/images/history-7.png';

const KathaHistory = () => {
    return (
      <React.Fragment>
          <div className='katha-history'>
              <h3> From Previous Years</h3>
              <section id="photos">
                  <img src={Image1} alt=""/>
                  <img src={Image5} alt=""/>
                  <img src={Image2} alt=""/>
                  <img src={Image3} alt=""/>
                  <img src={Image4} alt=""/>
                  <img src={Image7} alt=""/>
                  <img src={Image6} alt=""/>
              </section>
          </div>
      </React.Fragment>
    );
}

export default KathaHistory;