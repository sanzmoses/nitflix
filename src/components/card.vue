<template>
    <div class="uk-card">
        <div class="uk-card-media">
            <img :src="`https://picsum.photos/id/78${movie.id}/300/200`" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object
    },
    mounted() {
        // console.log(this.movie);
    }
}
</script>

<style lang="less">
.uk-card {
    max-width: 300px;
    transition: all 0.4s ease;
    cursor: pointer;

    .uk-card-media {
        overflow: hidden;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    &:hover {
        transform: scale(1.1);
        z-index: 98;
        box-shadow: 0px 1px 10px 0px fade(@gray, 40%);

        .card-body {
            padding: 10px;
            // height: 200px;
            overflow: hidden;
            opacity: 1;
        }
    }
}
</style>