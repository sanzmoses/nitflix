<template>
    <div id="modal-center" class="uk-flex-top uk-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical">

            <button class="uk-modal-close-default" type="button" uk-close></button>

            <div class="media-top">
                <img :src="`https://picsum.photos/id/${movie.id || 1}/800/500`" alt="" uk-img>

                <h1 class="movie-title">{{ movie.title }}</h1>
                <div class="dark-fade-overlay"></div>
                <div class="modal-buttons">
                    <button class="uk-button uk-button-default"><span uk-icon="play"></span> Play</button>
                    <Fab name="plus" :dark="true" size="40px" />
                    <Fab name="check" :dark="true" size="40px" />
                    <Fab name="close" :dark="true" size="40px" />
                </div>
            </div>
            <div class="uk-container content-info">
                <div class="uk-grid">
                    <div class="uk-width-2-3">
                        <div class="info">
                            <p class="rating">{{ movie.rating }}</p>
                            <p>{{ movie.time }}</p>
                        </div>

                        <p class="description">Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</p>   
                    </div> 
                    <div class="uk-width-1-3">
                        <p class="more-info">
                            <span class="title">Tags:</span>
                            <span v-for="tag in movie.tags" :key="'tag-'+tag">{{ tag }}</span>
                        </p>
                    </div> 
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Fab from './fab.vue'
export default {
    components: {
        Fab
    },
    props: ['movie']
}
</script>

<style lang="less">
.uk-modal-dialog {
    .uk-modal-close-default {
        border: 1px solid white;
        background: @black;
        border-radius: 50%;
        color: white;
        opacity: .3;
        .soft-transition;

        &:hover {
            color: white; 
             opacity: 1;
        }
    }

    .media-top {
        position: relative;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            max-width: 100%;
        }

        .movie-title {
            bottom: 70px;
            color: @black;
            z-index: 100;
            font-size: 50px;
        }

        .modal-buttons {
            position: absolute;
            left: 20px;
            bottom: 20px;

            & > * {
                margin-right: 5px;
            }

            .uk-button-default {
                background-color: white;
                display: inline-flex;
                align-items: center;
                font-weight: bold;
                .soft-transition;

                &:hover {
                    color: white;
                    background-color: @black;
                    border-color: @black;
                }
            }
        }

        .dark-fade-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(255,255,255);
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
        }
    }

    .content-info {
        padding-top: 30px;
        padding-bottom: 30px;

        .info {
            display: flex;
            align-items: center;

            p {
                margin: 0;
            }

            .rating {
                padding: 0px 5px;
                border: 1px solid @black;
                margin-right: 10px;
            }
        }

        .more-info {
            display: flex;
            flex-wrap: wrap;
            
            span {
                margin-right: 5px;
                text-transform: capitalize;
                
                &::after {
                    content: ',';
                }

                &:last-of-type {
                    margin-right: 0px;
                    &::after {
                        display: none;
                    }
                }

                &.title {
                    font-weight: bold;
                    
                    &::after {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>