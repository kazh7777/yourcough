import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './diagnosis_page.css';
import MenuBar from '../Route/menu';
import BounceLoader from "react-spinners/BounceLoader";

const DiagnosisPage = () => {
  const location = useLocation();
  const { analysisResult } = location.state || { analysisResult: null };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(analysisResult);

  return (
    <div className='diagnosis_page'>
      <MenuBar />
      {!analysisResult ? (
        <h1>No analysis result found</h1>
      ) : (
        <div className='diagnosis_body_container'>
          <h3 className='contentDg'> 기침소리 상태 결과 <br /></h3>
          <h1 className='resultDg'>{(analysisResult.prediction)}</h1>
          <div className='Dgcontent_box'>
            {windowWidth > 600 && (
              <div className='spinnerDg'>
                <BounceLoader
                  className='bounce'
                  size={230}
                  color="#6375ff"
                />
              </div>
            )}
            <div className='Dg'>
              <h3>{(parseFloat(analysisResult.probabilities[analysisResult.prediction]) * 100).toFixed(2)}%</h3>
              <br />
              <h3>{analysisResult.diagnosis_message}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisPage;
