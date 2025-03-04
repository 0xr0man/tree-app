import { API_ENDPOINTS } from "../shared/api/constants"

export default async function (...args: Parameters<typeof fetch>) {
    const url = `${API_ENDPOINTS.BaseURL}/${args[0]}`
    args[0] = url

    const res = await fetch(...args)

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
        return null;
    }

    if (!res.ok) {
        throw new Error(`Failed to perform fetch query: ${res.statusText}`);
    }

    return await res.json()
}