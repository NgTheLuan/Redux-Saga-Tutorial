export interface IParamsPagination {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: IParamsPagination;
}

export interface ListParams {
  _limit: number;
  _page: number;
  _sort: string;
  _order: 'asc' | 'desc';

  [key: string]: any; //name key, type random
}
