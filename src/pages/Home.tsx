import { lazy, useCallback, useMemo, useState } from "react"
import { useAddTreeNodeMutation, useDeleteTreeNodeMutation, useEditTreeNodeMutation, useGetTreeQuery } from "../shared/api/tree/query/tree.query"


const AddTreeNodeModal = lazy(() => import("../modules/add-tree-node-form"))
const EditTreeNodeModal = lazy(() => import("../modules/edit-tree-node-form"))
const DeleteTreeNodeModal = lazy(() => import("../modules/delete-tree-node-form"))

const TreeViewer = lazy(() => import("../modules/tree-viewer"))


export const HomePage = () => {
    const [isAddTreeNodeModalOpened, setAddTreeNodeModalOpened] = useState<boolean>(false)
    const [isEditTreeNodeModalOpened, setEditTreeNodeModalOpened] = useState<boolean>(false)
    const [isDeleteTreeNodeModalOpened, setDeleteTreeNodeModalOpened] = useState<boolean>(false)

    const [selectedTreeNodeParentId, setSelectedTreeNodeParentId] = useState<number>(0)
    const [selectedTreeNodeName, setSelectedTreeNodeName] = useState<string>('')

    const { data, status } = useGetTreeQuery(import.meta.env.VITE_ROOT_TREE_NAME)
    const memoizedTreeData = useMemo(() => {
        return data
    }, [data])

    const { mutateAsync: createNewNode } = useAddTreeNodeMutation()
    const { mutateAsync: editTreeNode } = useEditTreeNodeMutation()
    const { mutateAsync: deleteTreeNode } = useDeleteTreeNodeMutation()

    const handleCreateTreeNode = useCallback(async (nodeName: string): Promise<void> => {
        setAddTreeNodeModalOpened(false)

        await createNewNode({
            nodeName: nodeName,
            parentNodeId: selectedTreeNodeParentId,
            treeName: import.meta.env.VITE_ROOT_TREE_NAME
        })
    }, [selectedTreeNodeParentId])

    const handleEditTreeNode = useCallback(async (nodeName: string): Promise<void> => {
        setEditTreeNodeModalOpened(false)

        await editTreeNode({
            newNodeName: nodeName,
            nodeId: selectedTreeNodeParentId,
            treeName: import.meta.env.VITE_ROOT_TREE_NAME
        })
    }, [selectedTreeNodeParentId])

    const handleDeleteTreeNode = useCallback(async (): Promise<void> => {
        setDeleteTreeNodeModalOpened(false)

        await deleteTreeNode({
            nodeId: selectedTreeNodeParentId,
            treeName: import.meta.env.VITE_ROOT_TREE_NAME
        })
    }, [selectedTreeNodeParentId])

    const addBtnClickHandler = (nodeId: number, nodeName: string) => {
        setSelectedTreeNodeParentId(nodeId)
        setSelectedTreeNodeName(nodeName)
        setAddTreeNodeModalOpened(true)
    }

    const editBtnClickHandler = (nodeId: number, nodeName: string) => {
        setSelectedTreeNodeParentId(nodeId)
        setSelectedTreeNodeName(nodeName)
        setEditTreeNodeModalOpened(true)
    }

    const deleteBtnClickHandler = (nodeId: number, nodeName: string) => {
        setSelectedTreeNodeParentId(nodeId)
        setSelectedTreeNodeName(nodeName)
        setDeleteTreeNodeModalOpened(true)
    }

    return (
        <>
            <TreeViewer
                data={memoizedTreeData}
                status={status}
                addBtnClickHandler={addBtnClickHandler}
                editBtnClickHandler={editBtnClickHandler}
                deleteBtnClickHandler={deleteBtnClickHandler}
            ></TreeViewer>

            {isAddTreeNodeModalOpened &&
                <AddTreeNodeModal
                    handleAdd={handleCreateTreeNode}
                    handleClose={() => setAddTreeNodeModalOpened(false)}
                    content={null}
                    isOpen={isAddTreeNodeModalOpened}
                    header={`Add node to ${selectedTreeNodeName}`}
                />
            }

            {isEditTreeNodeModalOpened &&
                <EditTreeNodeModal
                    handleSubmit={handleEditTreeNode}
                    handleClose={() => setEditTreeNodeModalOpened(false)}
                    content={null}
                    isOpen={isEditTreeNodeModalOpened}
                    header={`Edit ${selectedTreeNodeName} node`}
                    editNodeName={selectedTreeNodeName}
                />
            }

            {isDeleteTreeNodeModalOpened &&
                <DeleteTreeNodeModal
                    handleSubmit={handleDeleteTreeNode}
                    handleClose={() => setDeleteTreeNodeModalOpened(false)}
                    content={null}
                    isOpen={isDeleteTreeNodeModalOpened}
                    header={`Delete ${selectedTreeNodeName} node`}
                    deleteNodeName={selectedTreeNodeName}
                />
            }
        </>
    )
}