import React from 'react';
import preloader from './../../assets/LoadingSpinner.gif'

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt=""/>
        </div>
    );
};