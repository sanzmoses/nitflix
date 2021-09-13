<template>
    <div id="modal-center" class="uk-flex-top uk-modal" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

            <button class="uk-modal-close-default" type="button" uk-close></button>

            <div class="media-top">
                <img :src="`https://picsum.photos/id/78${movie.id || 1}/300/200`" alt="" uk-img>
                <div class="dark-fade-overlay"></div>

                <div class="modal-buttons">
                    <button class="uk-button uk-button-default"><span uk-icon="play"></span> Play</button>
                    <Fab name="plus" size="40px" />
                    <Fab name="check" size="40px" />
                    <Fab name="close" size="40px" />
                </div>
            </div>
            <div class="content-info">
                <div class="uk-grid">
                    <div class="uk-width-2-3">
                        <p class="description">Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</p>   
                    </div> 
                    <div class="uk-width-1-3">
                        <p class="more-info">
                            <span class="title">Cast</span>
                            <span>Me</span>
                            <span>You</span>
                            <span>Us</span>
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