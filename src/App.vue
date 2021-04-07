<template>
<div class="max-w-lg m-7 overflow-auto min-h-full border-2 border-opacity-100 border-blue-300 p-8 rounded-md">
  <Header title="Task Tracker"/>
  <Tasks :tasks="tasks"/>
</div>

</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import firebase from './firebaseConfig'

const db = firebase.firestore();

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
  },
  methods: {
    addTask(newText, newDay) {
        db.collection("tasklistfirestore")
          .add({ day: newDay, text: newText })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    },
    readTasks() {
      this.tasks = [];
      db.collection("tasklistfirestore")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
           this.tasks.push({
              id: doc.id,
              text: doc.data().text,
              day: doc.data().day,
              reminder: doc.data().reminder,
            });
            console.log(doc.id, " => ", doc.data());
          });
          
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.readTasks()
    console.log(1234)
  }
}
</script>

<style src="./assets/tailwind.css"/>
