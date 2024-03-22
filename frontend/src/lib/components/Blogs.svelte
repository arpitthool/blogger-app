<script lang="ts">
    import BlogDetail from "$lib/components/Blog.svelte";
    
    export let blogs: Blog[];

</script>


<!-- diaplay existing blogs   -->
<div class="container">
    <div class="box">
        <div class="columns is-multiline">

            <!-- iterate over blogs -->
            <!-- {#each blogs as {id, title, content, total_likes}} -->

            {#each blogs as blog}
                <BlogDetail  {...blog}></BlogDetail>
                <!-- <BlogDetail  id = {blog.id} title = {blog.title} content = {blog.content} total_likes = {blog.total_likes}></BlogDetail> -->
            {:else}
                <div class="column">
                    <div class="notification is-warning">
                        No blogs yet!
                    </div>
                </div>
            {/each}

            
            
        </div>
    </div>
</div>

                            
                        