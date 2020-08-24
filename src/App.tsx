import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './App.css';

const options: Highcharts.Options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3],
    },
  ],
};

const App = (props: HighchartsReact.Props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Dashboard with Highcharts</h1>
        <HighchartsReact highcharts={Highcharts} options={options} {...props} />
      </header>
    </div>
  );
};

export default App;
