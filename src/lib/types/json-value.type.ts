type JSONPrimitives = number | string

export type JSONObject = { [key: string]: JSONObject | JSONObject[] | JSONPrimitives }