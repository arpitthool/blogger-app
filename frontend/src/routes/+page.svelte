<script lang="ts">
    import Blogs from '$lib/components/Blogs.svelte';
    export let data;

    /**
     * @type {Blog[]}
     */

    $: blogsData = data?.blogs;
 
</script>
  
<Blogs blogs = {blogsData}></Blogs>

