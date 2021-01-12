import React from 'react';
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory';

export default class BarChart extends React.Component {
  render() {
  return(
    <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={10}
>
  <VictoryBar
    style={{ data: { fill: "#c43a31" } }}
    data={[25,25,25,25]}
  />
</VictoryChart>
)
}
}