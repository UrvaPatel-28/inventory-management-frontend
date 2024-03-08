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
    const res = await fetch(`${API_HOST}/${path}`, { credentials: "include" })
    if (res.status > 200) throw new Error('Request Failed')
    return await res.json()
  }

  async getMachineSuggestions(q: string): Promise<SuggestionEntry[]> {
    const machineSuggestions = await this.makeRequest<{ id: string, name: string }>(`procurement/machines/?q=${q}`)
    return machineSuggestions.data.map(({ id, name }) => ({ id, display: name }))
  }

  async getRawMaterialSuggestions(q: string, machine?: string): Promise<SuggestionEntry[]> {
    const url = `procurement/raw-materials/?q=${q}`
    const urlWithMachine = url + (machine ? `&machine=${machine}` : '')
    const rawMaterialSuggestions = await this.makeRequest<{ id: string, name: string }>(urlWithMachine)
    return rawMaterialSuggestions.data.map(({ id, name }) => ({ id, display: name }))
  }

  async getApprovableUsers(q: string): Promise<SuggestionEntry[]> {
    const users = await this.makeRequest<{ email: string }>(`auth/signup/get-approvable-requests?q=${q}`)
    return users.data.map(({ email }) => ({ id: email, display: email }))
  }

  async getProductSuggestions(q: string): Promise<SuggestionEntry[]> {
    type ProductInfo = { id: string, name: string, model: string, variant: string }
    const productSuggestions = await this.makeRequest<ProductInfo>(`manufacturing/search-products/?q=${q}`)
    return productSuggestions.data.map(({ id, name, model, variant }) => ({
      id,
      display: `${name} ${model} ${variant}`
    }))
  }
}


export const ApiSuggestions = new Suggestions()