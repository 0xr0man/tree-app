import { Box, Button, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { IEditTreeModalContentProps } from "../models"

export const EditTreeModalContent = (props: IEditTreeModalContentProps) => {
    const { handleSubmit, handleClose, editNodeName } = props

    const [nodeName, setNodeName] = useState<string>(editNodeName)

    return (
        <>
            <Box>
                <TextField
                    sx={{ width: '100%' }}
                    id="outlined-basic"
                    label="Node name"
                    variant="outlined"
                    onChange={(e) => setNodeName(e.target.value)}
                    value={nodeName}
                />
            </Box>
            <Stack
                spacing={1}
                direction="row-reverse"
            >
                <Button
                    onClick={() => handleSubmit(nodeName)}
                    variant="outlined"
                >
                    Edit
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