import { BACKEND_API } from '$env/static/private'

export async function load({fetch}) {
    const response = await fetch(`${BACKEND_API}/blogs`);
    const blogs : Blog[] = await response.json();
    return {
        blogs
    }
}