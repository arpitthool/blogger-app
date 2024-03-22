<script lang="ts">
    import turtle from '$lib/images/turtle.jpg';
    import like from '$lib/images/like.jpg';
    import passion from '$lib/images/passion.jpg';
    import create_posts from '$lib/images/create_posts.jpg';

</script>


<div class="myBody">
    <!-- <div class="hero">
        <div>
            <h1>Discover Amazing Content</h1>
            <p>Explore a world of interests with us.</p>
            <img alt="Explore" src={turtle}>
        </div>
    </div> -->

    <div class="content">
        <div class="left">
            <!-- <div class="hero">
                <div>
                    <h1>Discover Amazing Content</h1>
                    <p>Explore a world of interests with us.</p>
                    
                    <img alt="Explore" src={turtle}>
                </div>
            </div> -->
            <!-- <div class="hero"> -->
                <div class="hero-content">
                    <h1>Discover Amazing Content</h1>
                    <p>Explore a world of interests with us.</p>
                    <img alt="Explore" src={turtle}>
                </div>
            <!-- </div> -->
        </div>
        <div class="right">
            <!-- <div class="features" id="features"> -->
                <!-- <h2>Features</h2> -->
                <div class="feature">
                    <img class="feature-img" src='{create_posts}' alt="Create Posts">
                    <h1>Create posts</h1>
                    <p>Description of feature 1.</p>
                </div>
                <div class="feature">
                    <img class="feature-img" src='{like}' alt="Like Posts">
                    <h1>Like posts</h1>
                    <p>Description of feature 2.</p>
                </div>
                <div class="feature">
                    <img class="feature-img" src='{passion}' alt="Passion">
                    <h1>Find Your Passion</h1>
                    <p>Description of feature 3.</p>
                </div>
                <div class="feature">
                    <img class="feature-img" src='{passion}' alt="Passion">
                    <h1>Find Your Passion</h1>
                    <p>Description of feature 3.</p>
                </div>
                <div class="feature">
                    <img class="feature-img" src='{passion}' alt="Passion">
                    <h1>Find Your Passion</h1>
                    <p>Description of feature 3.</p>
                </div>
                
            <!-- </div> -->
        </div>
        <!-- <div id="bottom">bottom</div>     -->
    </div>

    

</div>

<!-- <section>
    <aside>
        <div class="features" id="features">
            <h2>Features</h2>
            <div class="feature">
                <img src='{create_posts}' alt="Create Posts">
                <h1>Create posts</h1>
                <p>Description of feature 1.</p>
            </div>
            <div class="feature">
                <img src='{like}' alt="Like Posts">
                <h1>Like posts</h1>
                <p>Description of feature 2.</p>
            </div>
            <div class="feature">
                <img src='{passion}' alt="Passion">
                <h1>Find Your Passion</h1>
                <p>Description of feature 3.</p>
            </div>
        </div>
    </aside>
</section> -->




<footer>
    <p>&copy; 2024 My Blogger Website. All Rights Reserved.</p>
</footer>
    <style>

        .hero-content {
            background-color: aquamarine;
        }
        .myBody {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            align-items: center;
            background-color: rgba(170, 137, 99, 0.575);
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .hero {
            background-image: url('https://via.placeholder.com/1500x600'); /* Replace with your own image URL */
            background-size: cover;
            background-position: center;
            /* height: 300px; */
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .features {
            padding: 30px 20px;
            text-align: center;
        }
        .feature {
            align-items: center;
            align-content: center;
            /* margin-bottom: 40px; */
            background-color: rgba(96, 96, 185, 0.685)
        }
        .feature img {
            max-width: 100px;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

    
        .content {
            border:1px solid black;
        }
        .content > div {
            height:100px;
            box-sizing:border-box;
            -moz-box-sizing:border-box;
        }
        .left {
            float:left;
            width: 70%;
            border-right:1px solid black;
        }
        .right {
            align-items: center;
            align-content: center;
            float:right;
            width: 30%;
        }
        .bottom {
            border-top:1px solid black;
            clear: both;
        }
        .feature-img {
            height: 100%;
        }
    </style>

