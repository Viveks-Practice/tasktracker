<template>
    <form @submit="onSubmit" class="mb-10 ">
        <div class="my-5">
            <label class="block">Task</label>
            <input class="w-full h-10 m-1.5 py-1 px-1.5 text-lg border-2 border-gray-300"
                type="text"
                v-model="text" 
                name="text" 
                placeholder="Add Task" 
            />
        </div>
        <div class="my-5">
            <label class="block">Day & Time</label>
            <input class="w-full h-10 m-1.5 py-1 px-1.5 text-lg border-2 border-gray-300"
                type="text"
                v-model="day"
                name="day"
                placeholder="Add Day & Time"
            />
        </div>

        <input type="submit" value="Save Task" class="inline-block bg-black text-white border-0 py-2.5 px-5 m-1.5 rounded-md cursor-pointer no-underline text-sm font-mono block w-full" />
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()

            if(!this.text) {
                alert('Please add a task')
                return
            }

            const newTask = {
                text: this.text,
                day: this.day
            }

            console.log(newTask)

            this.text = ''
            this.day = ''
        }

    }
}
</script>