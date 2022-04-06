import React from 'react';
import Chart from '../../components/chart/Chart';
import Featureboxes from '../../components/featuresBoxes/Featureboxes';
import { userData } from '../../dummyData';

import './home.css';

const Home = () => {
  return (
    <>
      <div className='home'>
        <Featureboxes />
        <Chart
          data={userData}
          title='User Analytics'
          grid
          dataKey='Active User'
        />
      </div>
    </>
  );
};

export default Home;
