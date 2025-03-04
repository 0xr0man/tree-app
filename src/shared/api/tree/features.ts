import queryString from "query-string"
import { API_ENDPOINTS } from "../constants"
import { IAddNewNodeParams, IDeleteNodeParams, IEditNodeParams } from "./models"


export const buildGetTreeQueryString = (treeName: string) => {
    return `${API_ENDPOINTS.GetTree}/${treeName}`
}

export const buildAddTreeQueryString = (props: IAddNewNodeParams) => {
    return `${API_ENDPOINTS.AddNode}?${queryString.stringify(props)}`
}

export const buildEditTreeQueryString = (props: IEditNodeParams) => {
    return `${API_ENDPOINTS.RenameNode}?${queryString.stringify(props)}`
}

export const buildDeleteTreeQueryString = (props: IDeleteNodeParams) => {
    return `${API_ENDPOINTS.DeleteNode}?${queryString.stringify(props)}`
}