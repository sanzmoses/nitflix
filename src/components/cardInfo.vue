<template>
    <div class="card-info">
        <div class="uk-card-media">
            <img :src="`https://picsum.photos/id/${movie.id}/300/200`" alt="">
            <h3 class="movie-title">{{ movie.title }}</h3>
        </div>
        <div class="card-body">
            <div class="card-buttons">
                <Fab name="play" size="40px" />
                <Fab name="plus" size="40px" />
                <Fab @click="openModal" class="uk-float-right" name="chevron-down" size="40px" />            
            </div>
            <div class="info">
                <p class="rating">{{ movie.rating }}</p>
                <p>{{ movie.time }}</p>
            </div>
            <div class="info tags">
                <p v-for="tag in movie.tags" :key="'tag-'+tag">{{ tag }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Fab from './fab.vue'
import UIkit from 'uikit';

export default {
    components: {
        Fab
    },
    props: {
        movie: Object
    },
    mounted() {
        
        // console.log(this.movie);
    },
    methods: {
        openModal() {
            UIkit.modal('#modal-center').show();
        }
    }
}
</script>

<style lang="less">
.card-info {
    position: absolute !important;
    z-index: 99;
    transform: translate(-50px, -120px);
    width: 400px;
    box-shadow: 0px 1px 10px 0px fade(@gray, 40%);

    // max-width: 300px;
    transition: all 0.4s ease;
    cursor: pointer;
    // position: absolute !important;

    .uk-card-media {
        overflow: hidden;
        position: relative;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    .card-body {
        .soft-transition;
        background: white;
        padding: 10px;
        // height: 0px;
        overflow: hidden;

        .card-buttons {
            text-align: left;
            margin: 0px 0px 10px;

            .fab {
                margin-right: 5px;
                &:last-of-type {
                    margin-right: 0px;
                }
            }
        }

        .info {
            display: flex;
            margin: 13px 5px;
            align-items: center;

            p {
                color: @black;
                margin: 0;
            }

            .rating {
                padding: 0px 5px;
                border: 1px solid @black;
                margin-right: 10px;
            }
        }

        .tags {
            p {
                margin-right: 5px;
                text-transform: capitalize;
                
                &::after {
                    content: '·';
                    margin-left: 5px;
                }

                &:last-of-type {
                    margin-right: 0px;

                    &:after {
                        display: none;
                    }
                }
            }
        }
    }

    &:hover {
        // transform: scale(1.05);
        z-index: 99;
        
    }
}
</style>