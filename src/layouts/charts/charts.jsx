import React from "react";
import ReactDOM from "react-dom";

// Set up any imports needed for react-vis
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from "react-vis";

// Set up the dataset for the left part.
const greenData = [{ x: "A", y: 2 }, { x: "B", y: 7 }, { x: "C", y: 15 }];

// Set up the dataset for the right part.
const blueData = [{ x: "A", y: 14 }, { x: "B", y: 12 }, { x: "C", y: 11 }];

// Set up labels.
const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));


const Charts = () => {
  const BarSeries = VerticalBarSeries;
  console.log(labelData);
  return (
    <div className="App">
      <XYPlot
        animation
        xType="ordinal"
        width={800}
        height={800}
        xDistance={100}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries className="vertical-bar-series-example" data={greenData} />
        <BarSeries data={blueData} />
        <LabelSeries data={labelData} getLabel={d => d.x} />
      </XYPlot>
    </div>
  );
}

export default Charts