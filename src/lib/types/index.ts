export interface urlParams {
  prefix: string;
  suffix: string;
}

export interface IDeployments {
  [key: number]: {
    [key: string]: {
      address: string;
      abi?: any;
    };
  };
}
