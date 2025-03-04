export interface IAddNewNodeParams {
    treeName: string
    parentNodeId: number
    nodeName: string
}

export interface IEditNodeParams {
    treeName: string
    nodeId: number
    newNodeName: string
}

export interface IDeleteNodeParams {
    treeName: string
    nodeId: number
}

export interface ITreeNode {

}

export interface ITree {
    id: number
    name: string
    children: ITreeNode[]
}