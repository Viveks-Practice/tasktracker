<template>
    <div class="bg-gray-100 m-1.5 p-4 cursor-pointer">
        <h3 class="flex items-center justify-between">
            {{ task.text }}
            <i @click="onDelete(task.id)" class="fas fa-times"></i>
        </h3>   
        <p class="text-xs">{{ task.day }}</p> 
    </div>
    
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    methods: {
        onDelete(id) {
            console.log(id)
            this.$emit('delete-task', id)
        }
    },
}
</script>