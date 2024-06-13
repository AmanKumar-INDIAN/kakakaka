import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#001fff', '#83ff00',"#98FF90"],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    foreColor:"#ffffff",
    
    dropShadow: {
      enabled: true,
      color: '#001fff',
      top: 10,
      blur: 1,
      left: 1,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
          
          
        },
      },
    },
  ],
  stroke: {
    width: [2, 3,4],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#cb0541',
    strokeColors: ['#3056D3', '#80CAEE',"#98FF90"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
        
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },

  },
  yaxis: {
    title: {
      style: {
        fontSize: '2px',
        fontWeight:'1px'
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Bitcoine',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 80],
      },

      {
        name: 'Ethrieum',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
        {
        name: 'Qtum',
        data: [20, 15, 76, 33, 5, 15, 90, 51, 50, 16, 1, 59],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="mx-2 my-7 col-span-12 rounded-sm border border-stroke bg-gradient-to-l hover:scale-105 cursor-pointer from-black text-white px-5 pt-7.5 pb-5 shadow-default  sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
  

      </div>

      <div>
        <div id="chartOne" className="-ml-5 my-2 text-black">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
            
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
