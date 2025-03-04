import { IBasicModalProps } from "../../shared/ui/BasicModal/models"

export interface IAddTreeModalContentProps {
    handleAdd: (nodeName: string, parentNodeId: number) => void,
    handleClose: () => void
}

export  interface IAddTreeNodeModalProps extends IBasicModalProps {
    handleAdd: (nodeName: string, parentNodeId: number) => Promise<void>
    handleClose: () => void
}