<template>
    <button :style="{background: color}" class="inline-block text-white border-none p-2.5 m-1.5 rounded-md cursor-pointer no-underline text-base font-mono">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    }
}
</script>