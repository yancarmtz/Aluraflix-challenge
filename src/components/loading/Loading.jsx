import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='containerLoading'>
          <img src="/Loading.gif" style={{width: '50vw'}} alt="Cargando..." />
          <p className='mensajeCargando'>Espere Cargando...</p>
        </div>
      )
};

export default Loading;

