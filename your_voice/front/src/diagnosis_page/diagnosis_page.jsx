import React from 'react';
import { useLocation } from 'react-router-dom';
import './diagnosis_page.css';
import MenuBar from '../Route/menu';

function DiagnosisPage() {
  const location = useLocation();
  const { analysisResult } = location.state;

  return (
    <div className='diagnosis_page'>
      <MenuBar />
      <div className='diagnosis_head'>
        <h1>{analysisResult.title}</h1>
      </div>
      <div className='diagnosis_body_container'>
        <div className='diagnosis_img'>
          <img className='Sample1' src={analysisResult.image_url} alt="Analysis Result" />
        </div>
        <div className='diagnosis_body'>
          <h3>{analysisResult.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default DiagnosisPage;
