import { SuggestionEntry } from "../components/AutoCompleteInput";
import { API_HOST } from "./Constants"

export type ApiResponse<T> = SuccessApiResponse<T> | FailedApiResponse

type SuccessApiResponse<T> = {
  success: true;
  data: T;
}

type FailedApiResponse = {
  success: false;
  message: string;
}

class Suggestions {
  private async makeRequest<T>(path: string): Promise<SuccessApiResponse<T[]>> {
    const res = await fetch(`${API_HOST}/${path}`)
    if (res.status > 200) throw new Error('Request Failed')
    return await res.json()
  }

  async getMachineSuggestions(q: string): Promise<SuggestionEntry[]> {
    const machineSuggestions = await this.makeRequest<{ id: string, name: string }>(`procurement/search-machine/?q=${q}`)
    return machineSuggestions.data.map(({ id, name }) => ({ id, display: name }))
  }

  async getRawMaterialSuggestions(q: string): Promise<SuggestionEntry[]> {
    const rawMaterialSuggestions = await this.makeRequest<{ id: string, name: string }>(`procurement/search-raw-materials/?q=${q}`)
    return rawMaterialSuggestions.data.map(({ id, name }) => ({ id, display: name }))
  }

  async getProductSuggestions(q: string): Promise<SuggestionEntry[]> {
    throw new Error('TODO:')
  }
}


export const ApiSuggestions = new Suggestions()