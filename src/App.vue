<template>
<div class="max-w-lg m-7 overflow-auto min-h-full border-2 border-opacity-100 border-blue-300 p-8 rounded-md">
  <Header title="Task Tracker"/>
  <AddTask @add-task="addTask" />
  <Tasks @delete-task="deleteTask" :tasks="tasks"/>
</div>

</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import firebase from './firebaseConfig'

const db = firebase.firestore();

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  methods: {
    addTask(task) {
      if (task.text != "") {
        db.collection("tasklistfirestore")
          .add({ day: task.day, text: task.text })
          .then(() => {
            console.log("Document successfully written!");
            this.readTasks();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        this.name = "";
      }

      
    },
    deleteTask(id) {
      db.collection("tasklistfirestore")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readTasks();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
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
  }
}
</script>

<style src="./assets/tailwind.css"/>
