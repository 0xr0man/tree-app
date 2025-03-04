import BasicModal from "../../../shared/ui/BasicModal/BasicModal"
import { IDeleteTreeNodeModalProps } from "../models"
import { DeleteTreeModalContent } from "./DeleteTreeNodeModalContent"

export const DeleteTreeNodeModal = (props: IDeleteTreeNodeModalProps) => {
    const { isOpen, handleSubmit, handleClose, header, deleteNodeName } = props

    return (
        <BasicModal
            isOpen={isOpen}
            handleClose={handleClose}
            header={header}
            content={
                <DeleteTreeModalContent
                    handleClose={handleClose}
                    handleSubmit={handleSubmit}
                    deleteNodeName={deleteNodeName}
                />
            }
        />
    )
}