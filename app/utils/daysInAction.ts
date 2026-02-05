/* eslint-disable @typescript-eslint/no-explicit-any */
 export const calculateDaysInAction = () => {
    const startDate: any = new Date(2024, 0, 1); // January 1, 2024
    const today: any = new Date();
    const diffTime: any = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };