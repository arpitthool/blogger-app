<script lang="ts">
    import Blog from '$lib/components/Blog.svelte';
    export let data;
    console.log(data);
    $: blog = data?.detailedBlog;
</script>

<Blog {...blog}></Blog>