export interface PaginationType {
  limit?: number;
  offset?: number;
}

export interface WhiteHouseResponseType {
  code: number;
  status: string;
  results?: any;
  metadata?: ResponseMetadataType;
  errors?: any;
}

export interface ResponseMetadataType {
  total?: number;
  limit?: number;
  offset?: number;
}
