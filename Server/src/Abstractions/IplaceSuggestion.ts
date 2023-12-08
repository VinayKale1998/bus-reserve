export interface IPlaceSuggestion {
  description: string;
  place_id: string;
  [key: string]: any;
}

export interface IPlacesAPiResponse {
  predictions: Array<IPlaceSuggestion>;
  status: string;
}
