
<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    const hostUrl = import.meta.env.VITE_HOST;

    /**
     * @type {any}
     */
    let user;

    /**
     * @type {string}
     */
    let username;
      
    onMount(async () => {
        try {
            let user = (await axios.get(hostUrl + '/api/login', { withCredentials : true})).data
            if(user) {
                username = user.name
            }
            console.log(user)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
  </script>

<nav class="navbar is-link">
    <div class="container">
        <div class="navbar-brand">
            <a href="/" class="navbar-item"><i>Blogger</i></a>
        </div>

        <a href="/about" class="navbar-item">About</a>


        <div class="navbar-menu">
            <div class="navbar-end">

                {#if (username)}
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link has-text-white">{username}</a>
                    <div class="navbar-dropdown">
                        <a href="/logout" class="navbar-item">
                            <!-- {{--  <span class="icon"><i class="fas fa-sign-out-alt"></i></span>  --}} -->
                            <span>Logout</span>
                        </a>

                        <a href="/create" class="navbar-item">
                            <!-- {{--  <span class="icon"><i class="fas fa-sign-out-alt"></i></span>  --}} -->
                            <span>Create New Blog</span>
                        </a>

                        <a href="/myBlogs" class="navbar-item">
                            <!-- {{--  <span class="icon"><i class="fas fa-sign-out-alt"></i></span>  --}} -->
                            <span>My Blogs</span>
                        </a>
                    </div>
                  </div>

                  
                {:else}
                    <a href="/register" class="navbar-item">Register</a>
                    <a href="/login" class="navbar-item">Login</a>
                {/if}

                  
            </div>
        </div>
    </div>
</nav>