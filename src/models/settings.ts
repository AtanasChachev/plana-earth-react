/* Type for each country. */
export type Countries = {
  id: string;
  name: string;
};

export type Settings = {
  theme: {
    palette: {
      primary: {
        main: string;
        contrastText: string;
      };
    };
  };
  countries: Countries[];
  chartColors: {
    average: string;
    count: string;
    min: string;
    max: string;
    standarddeviation: string;
  },
  chartFilterButtons: string[];
  toastAutoDuration: number;
  chartOptions: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: boolean;
          };
        },
      ];
      xAxes: [{
        ticks:{
          display: boolean;
        };
      }];
    };
  };
};