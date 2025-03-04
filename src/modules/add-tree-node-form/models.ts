import { IBasicModalProps } from "../../shared/ui/BasicModal/models"

export interface IAddTreeModalContentProps {
    handleAdd: (nodeName: string) => void,
    handleClose: () => void
}

export  interface IAddTreeNodeModalProps extends IBasicModalProps {
    handleAdd: (nodeName: string) => Promise<void>
    handleClose: () => void
}