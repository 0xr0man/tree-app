import { IBasicModalProps } from "../../shared/ui/BasicModal/models"

export interface IDeleteTreeModalContentProps {
    handleSubmit: () => void,
    handleClose: () => void
    deleteNodeName: string
}

export interface IDeleteTreeNodeModalProps extends IBasicModalProps {
    handleSubmit: () => void,
    handleClose: () => void
    deleteNodeName: string
}