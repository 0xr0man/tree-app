import BasicModal from "../../../shared/ui/BasicModal/BasicModal"
import { IAddTreeNodeModalProps } from "../models"
import { AddTreeModalContent } from "./AddTreeNodeModalContent"

export const AddTreeNodeModal = (props: IAddTreeNodeModalProps) => {
    const { isOpen, handleAdd, handleClose, header } = props

    return (
        <BasicModal
            isOpen={isOpen}
            handleClose={handleClose}
            header={header}
            content={
                <AddTreeModalContent
                    handleClose={handleClose}
                    handleAdd={handleAdd}
                />
            }
        />
    )
}