import { BACKEND_API } from "$env/static/private";

export async function load(event) {
    const { params, fetch } = event;
    const { id } = params;
    const response = await fetch(`${BACKEND_API}/blogs/${id}`);

    if(!response.ok){
        const error = await response.json();
        throw new error(response.status, error.message)
    }

    const detailedBlog : Blog = await response.json();
    return {
        detailedBlog
    }
}