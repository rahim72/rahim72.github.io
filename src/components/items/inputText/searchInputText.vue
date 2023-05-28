<script setup>
defineProps({
    placeholderText: {
        type: String,
        required: true
    }
})
</script>

<template>
    <input type="text" placeholder="{{placeholderText}}">
</template>