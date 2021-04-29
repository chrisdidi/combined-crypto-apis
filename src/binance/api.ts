import { Apis, WsOptions } from '../types';

export interface BinanceProps {
  apiKey: string;
  apiSecret: string;
}

export const Binance = ({}: BinanceProps): Apis => {
  const wsDepth = ({ symbol, cb }: WsOptions<any>) => {
    if (cb) {
      cb(symbol);
    }
    return {
      close: () => {
        console.log(symbol + ' closed!');
      },
    };
  };

  return {
    wsDepth,
  };
};
