<template>
<div class="max-w-lg m-7 overflow-auto min-h-full border-2 border-opacity-100 border-blue-300 p-8 rounded-md">
  <Header title="Task Tracker"/>
  <Tasks :tasks="tasks"/>
</div>

</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
        {
          id: 1,
          text: 'Easter',
          day: 'April 2 2021',
          reminder: true,
        },
        {
          id: 2,
          text: 'St. Patricks Day',
          day: 'March 16 2021',
          reminder: true,
        },
        {
          id: 3,
          text: 'New Years Day',
          day: 'January 1 2022',
          reminder: true,
        }
    ]
  }
}
</script>

<style src="./assets/tailwind.css"/>
