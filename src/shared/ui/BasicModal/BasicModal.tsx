import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material"
import { IBasicModalProps } from "./models";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};  

const BasicModal = (props: IBasicModalProps) => {
    const { isOpen, handleClose, header, content } = props
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Stack spacing={2}>
                    <Stack 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {header}
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Stack>
                    {content}
                </Stack>
            </Box>
            </Modal>
    )
}

export default BasicModal
