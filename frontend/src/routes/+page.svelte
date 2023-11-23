
<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    const hostUrl = import.meta.env.VITE_HOST;
    import Navbar from '$lib/Navbar.svelte'

    /**
     * @type {any[]}
     */
    let blogs = [];
    onMount(async () => {
        try {

            blogs = (await axios.get(hostUrl + '/api')).data

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
  </script>
  

<Navbar /> 
<section class="section">
    <div class="container">

        <div class="columns">
            <div class="coulmn is-three-fifths is-offset-one-fifth">
                
                <!-- diaplay existing blogs   -->
                <div class="container">
                    <div class="box">
                        <div class="columns is-multiline">

                            <!-- iterate over blogs -->
                            {#each blogs as blog}

                            <div class="column" style="min-width: 300px;">
                                <div class="card">

                                    <header class="card-header">
                                        <p class="card-header-title">
                                            <a href="{`/blog/${blog.id}`}">{blog.title }</a>
                                        </p>

                                    </header>

                                    <div class="card-content">
                                        <div class="content">
                                            { blog.content }
                                        </div>
                                    </div>

                                    <!--  card footer showing total likes on blog, like button and dislike button -->
                                    <footer class="card-footer">
                                            
                                            <span class="card-footer-item"> &#128525; { blog.total_likes }</span>
                                            <a class="card-footer-item" href="/likeBlog/{blog.id }">&#128077;</a>
                                            <a class="card-footer-item" href="/dislikeBlog/{blog.id }">&#128078;</a>
                                        
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
