<script lang="ts">
    export let id:number;
    export let title:string;
    export let content:string;
    export let total_likes:number;

</script>


<div class="column" style="min-width: 300px;">
    <div class="card">

        <header class="card-header">
            <p class="card-header-title">
                <a href="{`/blogs/${id}`}">{title }</a>
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

                            
                        