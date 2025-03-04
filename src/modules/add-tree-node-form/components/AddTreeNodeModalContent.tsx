import { Box, Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

import { IAddTreeModalContentProps } from "../models"

export const AddTreeModalContent = (props: IAddTreeModalContentProps) => {
    const { handleAdd, handleClose } = props

    const [nodeName, setNodeName] = useState<string>('')

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
                    onClick={() => handleAdd(nodeName)}
                    variant="outlined"
                    disabled={nodeName.length == 0}
                >
                    Add
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