import React, {useState} from 'react';
import Step2 from '../../assets/images/step-2.png';
import Step3 from '../../assets/images/step-3.png';

const TableOfContents = ({header, content}) => {

    function returnValue(content, key) {
        return <li key={key}>{content}</li>
    }

  return (
      <div>
          <h4>{header}</h4>
          <ul>
              {content.map(returnValue)}
          </ul>
      </div>
  );
};

const Process = () => {
    const [option, setOption] = useState(0);
    const contents = [
        {
            header: 'Here’s what we’re looking for in your entries',
            content: [
                'Fiction / Non-Fiction / Poems (up to 1200 words)',
                'Writing that delves deep into personal experiences, memories, feelings, pleasures, and imagination.',
                'Upbeat writing, nothing too serious',
                'Most importantly, be You! Submit stories that represent your inner voice, your talent and your originality.'
            ]
        },
        {
            header: 'Here’s not what we’re looking for in your entries',
            content: [
                'Fiction / Non-Fiction / Poems (up to 1200 words)',
                'Writing that delves deep into personal experiences, memories, feelings, pleasures, and imagination.',
                'Upbeat writing, nothing too serious',
                'Most importantly, be You! Submit stories that represent your inner voice, your talent and your originality.'
            ]
        },
        {
            header: 'Here’s',
            content: [
                'Fiction / Non-Fiction / Poems (up to 1200 words)',
                'Writing that delves deep into personal experiences, memories, feelings, pleasures, and imagination.',
                'Upbeat writing, nothing too serious',
                'Most importantly, be You! Submit stories that represent your inner voice, your talent and your originality.'
            ]
        }
        ];
    return (
        <React.Fragment>
            <div id='process' className='process'>
                <h3>Process</h3>
                <div className='process__container'>
                    <div className='process__buttons'>
                        <button className={`process__buttons--button ${option == 0 && 'yellow'}`} onClick={() => setOption(0)}>
                            <div className='button-box'>
                                <img src={Step2} alt="" />
                                <div><h5>STAGE 1</h5><p>Upload Stories</p></div></div>
                        </button>
                        <button className={`process__buttons--button ${option == 1 && 'yellow'}`} onClick={() => setOption(1)}>
                            <div className='button-box'>
                                <img src={Step2} alt="" />
                                <div><h5>STAGE 2</h5><p>Know Your Stories</p></div></div>
                        </button>
                        <button className={`process__buttons--button ${option == 2 && 'yellow'}`} onClick={() => setOption(2)}>
                            <div className='button-box'>
                                <img src={Step3} alt="" />
                                <div><h5>STAGE 3</h5><p>Be The Writer</p></div>
                            </div>
                        </button>
                    </div>
                    <div className='process__content'>
                        <TableOfContents header={contents[option].header} content={contents[option].content}/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Process;