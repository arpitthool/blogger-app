
<script lang="ts">

    export let data;

    /**
     * @type {Blog[]}
     */

    $: blogs = data?.blogs;
 
  </script>
  

<section class="section">
    <div class="container">

        <div class="columns">
            <div class="coulmn is-three-fifths is-offset-one-fifth">
                
                <!-- diaplay existing blogs   -->
                <div class="container">
                    <div class="box">
                        <div class="columns is-multiline">

                            <!-- iterate over blogs -->
                            {#each blogs as {id, title, content, total_likes}}

                            <div class="column" style="min-width: 300px;">
                                <div class="card">

                                    <header class="card-header">
                                        <p class="card-header-title">
                                            <a href="{`/blog/${id}`}">{title }</a>
                                        </p>

                                    </header>

                                    <div class="card-content">
                                        <div class="content">
                                            { content }
                                        </div>
                                    </div>

                                    <!--  card footer showing total likes on blog, like button and dislike button -->
                                    <footer class="card-footer">
                                            
                                            <span class="card-footer-item"> &#128525; { total_likes }</span>
                                            <a class="card-footer-item" href="/likeBlog/{id }">&#128077;</a>
                                            <a class="card-footer-item" href="/dislikeBlog/{id }">&#128078;</a>
                                        
                                    </footer>

                                </div>
                            </div>

                            <!-- {{--  if no blogs exist : show message  --}} -->
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
            </div>
        </div>
    </div>
</section>
