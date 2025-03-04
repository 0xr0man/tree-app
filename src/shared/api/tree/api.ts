import fetch from "../../../lib/fetch";
import { API_METHODS } from "../constants";
import { buildAddTreeQueryString, buildDeleteTreeQueryString, buildEditTreeQueryString, buildGetTreeQueryString } from "./features";
import { IAddNewNodeParams, IDeleteNodeParams, IEditNodeParams, ITree } from "./models";


export const getTree = async (treeName: string): Promise<ITree> => {
    try {
        const response = await fetch(buildGetTreeQueryString(treeName),
            { 
                method: API_METHODS.GET,
            },
        )

        return response
    } catch(e) {
        console.log(e)
        throw new Error(`Failed to get tree`)
    }
}

export const addTreeNode = async (newNodeData: IAddNewNodeParams): Promise<boolean> => {
    try {
        const response = await fetch(buildAddTreeQueryString(newNodeData),
            { 
                method: API_METHODS.POST,
            },
        )

        return response
    } catch(e) {
        console.log(e)
        throw new Error(`Failed to create tree node`)
    }
}

export const editTreeNode = async (editParams: IEditNodeParams): Promise<boolean> => {
    try {
        const response = await fetch(buildEditTreeQueryString(editParams),
            { 
                method: API_METHODS.POST,
            },
        )

        return response
    } catch(e) {
        console.log(e)
        throw new Error(`Failed to edit tree node`)
    }
}

export const deleteTreeNode = async (deleteParams: IDeleteNodeParams): Promise<boolean> => {
    try {
        const response = await fetch(buildDeleteTreeQueryString(deleteParams),
            { 
                method: API_METHODS.POST,
            },
        )

        return response
    } catch(e) {
        console.log(e)
        throw new Error(`Failed to delete tree node`)
    }
}