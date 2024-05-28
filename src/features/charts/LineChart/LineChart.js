import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const LineChart = ({xdata=[],ydata=[]}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: 'category',
        data:xdata ,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data:ydata,
          type: 'line',
        },
      ],
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default LineChart;
