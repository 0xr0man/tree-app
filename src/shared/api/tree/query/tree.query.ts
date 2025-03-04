import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTreeNode, deleteTreeNode, editTreeNode, getTree } from "../api"
import { useNotifications } from "@toolpad/core"


export const useAddTreeNodeMutation = () => {
    const q = useNotifications()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addTreeNode,
        onSuccess: async () => {
            q.show('Created tree node', { autoHideDuration: 2000, severity: 'success' })
            queryClient.invalidateQueries({
                queryKey: ['tree', import.meta.env.VITE_ROOT_TREE_NAME]
            })
        },
        onError: async () => {
            q.show('Failed to create tree node', { autoHideDuration: 2000, severity: 'error' })
        },
    })
}

export const useEditTreeNodeMutation = () => {
    const q = useNotifications()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: editTreeNode,
        onSuccess: async () => {
            q.show('Renamed tree node', { autoHideDuration: 2000, severity: 'success' })
            queryClient.invalidateQueries({
                queryKey: ['tree', import.meta.env.VITE_ROOT_TREE_NAME]
            })
        },
        onError: async () => {
            q.show('Failed to rename tree node', { autoHideDuration: 2000, severity: 'error' })
        },
    })
}

export const useDeleteTreeNodeMutation = () => {
    const q = useNotifications()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteTreeNode,
        onSuccess: async () => {
            q.show('Deleted tree node', { autoHideDuration: 2000, severity: 'success' })
            queryClient.invalidateQueries({
                queryKey: ['tree', import.meta.env.VITE_ROOT_TREE_NAME]
            })
        },
        onError: async () => {
            q.show('Failed to delete tree node', { autoHideDuration: 2000, severity: 'error' })
        },
    })
}

export const useGetTreeQuery = (treeName: string) => {
    const { data, error, status, refetch } = useQuery({
        queryKey: ['tree', treeName],
        queryFn: () => getTree(treeName),
        staleTime: 180_000 // 3 minutes
    })

    return {
        data,
        status,
        error,
        refetch
    }
}