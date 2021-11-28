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
    [key: string]: string;
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