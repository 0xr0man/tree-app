import { Box, Button, Stack, Typography } from "@mui/material"
import { IDeleteTreeModalContentProps } from "../models"

export const DeleteTreeModalContent = (props: IDeleteTreeModalContentProps) => {
    const { handleSubmit, handleClose } = props

    return (
        <>
            <Box>
                <Typography>
                    Are u sure to delete?
                </Typography>
            </Box>
            <Stack
                spacing={1}
                direction="row-reverse"
            >
                <Button
                    onClick={() => handleSubmit()}
                    variant="outlined"
                >
                    Delete
                </Button>
                <Button
                    onClick={handleClose}
                    variant="outlined"
                >
                    Close
                </Button>
            </Stack>
        </>
    )
}