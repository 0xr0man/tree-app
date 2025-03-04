const API_ENDPOINTS = {
    BaseURL: import.meta.env.VITE_API_URL,
    GetTree: 'api.user.tree.get',
    AddNode: 'api.user.tree.node.create',
    RenameNode: 'api.user.tree.node.rename',
    DeleteNode: 'api.user.tree.node.delete'
} as const

const API_METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
}


export {
    API_ENDPOINTS,
    API_METHODS,
}