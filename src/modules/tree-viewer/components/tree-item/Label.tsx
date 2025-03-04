import { IconButton, Stack, Typography } from "@mui/material";
import { ILabelProps } from "../../models";
import { AddCircle, Delete, Edit } from "@mui/icons-material";

export const Label = ({ children, className, addBtnClickHandler, editBtnClickHandler, deleteBtnClickHandler, itemId, itemName }: ILabelProps) => {
    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
            flexGrow={1}
            className={className}
            alignItems="center"
        >
            <Typography>{children}</Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={1}
            >
                <IconButton size="small" onClick={(e) => { handleButtonClick(e); addBtnClickHandler(itemId, itemName) }}>
                    <AddCircle />
                </IconButton>
                <IconButton size="small" onClick={(e) => { handleButtonClick(e); editBtnClickHandler(itemId, itemName) }}>
                    <Edit />
                </IconButton>
                <IconButton size="small" onClick={(e) => { handleButtonClick(e); deleteBtnClickHandler(itemId, itemName) }}>
                    <Delete />
                </IconButton>
            </Stack>
        </Stack>
    )
}