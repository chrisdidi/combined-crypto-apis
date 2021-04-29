interface WsReturnObject {
  close: () => void;
}

export interface WsOptions<CbOptions> {
  symbol: string;
  cb?: (options: CbOptions) => any;
  transform?: boolean;
}

export interface Apis {
  wsDepth: (options: WsOptions<unknown>) => WsReturnObject;
}
