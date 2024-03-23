// import { BACKEND_API } from '$env/static/private'

let BACKEND_API="127.0.0.1:3333/api"

export async function load({fetch}) {
    const response = await fetch(`${BACKEND_API}/blogs`);
    const blogs : Blog[] = await response.json();
    return {
        blogs
    }
}