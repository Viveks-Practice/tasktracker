<template>
    <header class="flex justify-between items-center mb-5 text-3xl">
        <h1>{{ title }}</h1>
    </header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
    }
}
</script>


