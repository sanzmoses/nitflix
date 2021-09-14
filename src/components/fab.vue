<template>
    <button :class="['fab', {dark}]" :style="{width: size, height: size}">
        <span :uk-icon="name"></span>
    </button>
</template>

<script>
export default {
    props: ['name', 'size', 'dark']
}
</script>

<style lang="less">
.fab {
    border-radius: 50%;
    border: 1px solid @gray;
    background: white;
    cursor: pointer;
    .soft-transition;

    span {
        color: @black;
        .soft-transition;
    }
    
    &:hover {
        background: @black;
        border-color: @black;
        span {
            color: white;
        }
    }

    &.dark {
        background: fade(@black, 50%);

        span {
            color: white;
        }

        &:hover {
            background: @black;
            border-color: @black;
            span {
                color: white;
            }
        }
    }
}
</style>