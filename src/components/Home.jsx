import React from 'react';
import Banner from './Banner';
import CardContainer from './CardContainer';

import Extended from './Extended';

const Home = () => {
    return (
        <div >
           <Banner/>
           <CardContainer></CardContainer>
           <Extended></Extended>
        </div>
    );
};

export default Home;