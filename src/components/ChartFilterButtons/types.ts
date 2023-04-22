export interface ChartFilterButtonsProps {
  onClick(interval: string): void;
}

export interface Return {
  activeIndex: number;
  handleFilterButton: (interval: string, index: number) => void;
}