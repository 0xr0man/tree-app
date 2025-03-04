import { Paper } from "@mui/material"
import { styled } from '@mui/material/styles'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { ITreeViewerProps } from "../../models";
import { TreeViewItem } from "../tree-item/TreeViewItem";


const TreeViewPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
}))

export const TreeViewer = (props: ITreeViewerProps) => {

    const { data, status, addBtnClickHandler, editBtnClickHandler, deleteBtnClickHandler } = props

    if(status === 'pending') { return <p>Loading</p> }
    if(status === 'error') { return <p>Error</p> }

    return (
        <>
            <TreeViewPaper>
                <RichTreeView
                    items={[data]}
                    slots={{ item: TreeViewItem as any}}
                    getItemLabel={(item) => item.name}
                    slotProps={{
                        item: {
                            addBtnClickHandler,
                            editBtnClickHandler,
                            deleteBtnClickHandler,
                        }
                    } as any} // ITreeItemProps
                />
            </TreeViewPaper>
        </>
    )
}
