import BasicModal from "../../../shared/ui/BasicModal/BasicModal"
import { IEditTreeNodeModalProps } from "../models"
import { EditTreeModalContent } from "./EditTreeNodeModalContent"

export const EditTreeNodeModal = (props: IEditTreeNodeModalProps) => {
    const { isOpen, handleSubmit, handleClose, header, editNodeName } = props

    return (
        <BasicModal
            isOpen={isOpen}
            handleClose={handleClose}
            header={header}
            content={
                <EditTreeModalContent
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    editNodeName={editNodeName}
                />
            }
        />
    )
}