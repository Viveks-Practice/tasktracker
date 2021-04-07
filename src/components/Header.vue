<template>
    <header class="flex justify-between items-center mb-5 text-3xl">
        <h1>{{ title }}</h1>
        <Button text="Add Task" color="green"/>
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props: {
        title: String,
    },
    components: {
        Button,
    },
}
</script>


