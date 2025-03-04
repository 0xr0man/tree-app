import { IBasicModalProps } from "../../shared/ui/BasicModal/models"

export interface IEditTreeModalContentProps {
    handleSubmit: (nodeName: string) => void,
    handleClose: () => void
    editNodeName: string
}

export interface IEditTreeNodeModalProps extends IBasicModalProps {
    handleSubmit: (nodeName: string) => void,
    handleClose: () => void
    editNodeName: string

}