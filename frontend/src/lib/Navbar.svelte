
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

<nav class="navbar has-background-success">
    <div class="container">
        <p>Hi! welcome to my Blogger App. This AdonisJS TypeScript app uses a Edge templates for frontend, PostgreSQL database and is hosted on an AWS EC2 instance with Elastic IPs 
        <br>Developer : Arpit Thool || Check out the github repository for this project : <a href="https://github.com/arpitthool/blogger-app">Blogger</a></p>
    </div>
</nav>

<nav class="navbar is-link">
    <div class="container">
        <div class="navbar-brand">
            <a href="/" class="navbar-item"><i>Blogger</i></a>
        </div>

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