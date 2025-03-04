import { TreeItem2Props } from "@mui/x-tree-view";

export interface ILabelProps {
    itemId: number
    itemName: string
    children: string
    className: string
    addBtnClickHandler: (nodeId: number, nodeName: string) => void
    editBtnClickHandler: (nodeId: number, nodeName: string) => void
    deleteBtnClickHandler: (nodeId: number, nodeName: string) => void
}

export interface ITreeItemProps extends TreeItem2Props {
    addBtnClickHandler: (nodeId: number, nodeName: string) => void
    editBtnClickHandler: (nodeId: number, nodeName: string) => void
}

export interface ITreeViewerProps {
    data: any
    status: string
    addBtnClickHandler: (nodeId: number, nodeName: string) => void
    editBtnClickHandler: (nodeId: number, nodeName: string) => void
    deleteBtnClickHandler: (nodeId: number, nodeName: string) => void
}