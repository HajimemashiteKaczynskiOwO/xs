<script>
    import {base} from '$app/paths';
    import {onMount} from 'svelte';
</script>

<img src="/images/wmgone.png" style="margin:auto; width:350px; height:100px; padding-top:10px;" alt="WM Gone" />

<main>
    <div class="stuff-wrapper">
        <h1 class="main-title">This Has Happened over Here</h1>
        <h2 class="mini-title">Author, Date</h2>
    </div>
    <div class="news-container">
        <h3>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum vitae purus at laoreet. Aliquam bibendum nibh a sapien convallis rutrum. Duis mollis nec lorem non porttitor. Mauris risus ligula, pretium sit amet pharetra a, suscipit eu neque. Sed sit amet tempus dolor. Integer sodales libero leo, eget dignissim tellus consequat in. Integer laoreet, enim a consequat venenatis, ex ligula fringilla sapien, a rhoncus lectus dui ut justo. Donec aliquam mi at tellus sodales, in ultricies urna elementum. Vestibulum efficitur enim in purus aliquam, at facilisis magna vestibulum. Duis nec lorem eros. Nunc nec vulputate elit, semper dictum turpis. Sed sodales maximus dui ac finibus. Suspendisse id rhoncus ex, id ornare nunc.
        </h3>
        <h3>
            Sed condimentum posuere pellentesque. Sed tincidunt nibh ligula, id facilisis velit mattis a. Aenean a varius nibh. Quisque mattis quis turpis non laoreet. Aenean placerat lacus et leo ultrices facilisis. Etiam leo quam, ornare id interdum quis, ullamcorper vel nulla. Vivamus sapien metus, malesuada sit amet tellus vel, ultrices luctus risus. Mauris velit velit, commodo vel posuere imperdiet, ultrices dapibus dolor. Ut vel massa sapien. Morbi nunc enim, accumsan in lorem eget, volutpat porttitor tortor. Cras dapibus fermentum velit, at viverra eros fermentum vitae. Nulla facilisi. Suspendisse id enim sed ante accumsan vulputate sed non mi. Quisque ultrices mi a lacinia pulvinar. Praesent malesuada congue quam, vel gravida nunc ultricies interdum. Etiam gravida, eros eget porttitor mattis, mauris ipsum faucibus risus, sed elementum lorem nunc et mauris. 
        </h3>
        <h3>
            Phasellus lobortis, velit eget vulputate lobortis, odio dui condimentum sem, at placerat dui enim eu eros. Pellentesque at quam magna. Praesent commodo quam urna, at faucibus lectus consequat in. Proin luctus blandit enim, ac gravida erat rhoncus vitae. Nulla condimentum mattis velit nec pellentesque. Vivamus in elementum ante. Cras at ipsum augue. Ut porttitor neque leo. Proin neque ipsum, lobortis et elit at, ultrices ornare lectus. Quisque sollicitudin lectus sapien, sit amet iaculis mauris tempor non. Donec porta nulla sit amet libero finibus blandit. Pellentesque auctor elit eget cursus gravida. Nunc velit lorem, faucibus non finibus sit amet, fringilla eu purus. Ut tincidunt arcu a risus egestas bibendum.
        </h3>
        <h3>
            Aenean in sodales magna. Donec et placerat sapien. Donec eget ante a odio pulvinar eleifend. Duis aliquam nec arcu sed cursus. Phasellus accumsan id ligula ut efficitur. Praesent convallis a libero vitae sollicitudin. Curabitur vel ante consequat, euismod nunc sed, ornare elit. Suspendisse potenti.
        </h3>
        <h3>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce cursus ante quis ante sollicitudin ornare. Nunc ac diam vel felis ultricies luctus a non nisl. Aenean eros erat, aliquet at magna vel, consequat ullamcorper risus. Pellentesque ex lorem, semper sit amet metus at, aliquam malesuada nisl. Etiam at metus ut quam vestibulum aliquet. Vivamus non orci nec felis semper aliquam nec eu lectus.
        </h3>
    </div>

    


</main>

<style>
    .stuff-wrapper{
        text-align: left;
        margin-bottom: 1rem;
        padding-top: 1rem;
        padding-left: 2rem;
    }
    .main-title {
        font-size: 3rem;
        transition: transform 0.3s ease;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    .main-title:hover {
        transform: scale(1.005);
    }
    .news-container{
        background-color: rgba(255, 255, 255, 0.1);
        padding: 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        margin-bottom: 2rem;
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column; /* Arrange items in a row */
        align-items: center; /* Align items vertically */
        gap: 1rem; /* Add spacing between the image and text */

        font-size:1.2rem;
    }
</style>