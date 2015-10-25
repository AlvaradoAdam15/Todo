/**
 * Created by adam on 25/10/15.
 */
new Vue({
    el: '#tasks',

    data: {
        tasks:[

            { body: 'Go to the store', completed: false }

        ],

        newTask:''
    },

    methods: {

        addTask: function(e){

            e.preventDefault();


            this.tasks.push({

                body: this.newTask,

                completed: false

            });

            this.newTask = '';
        },

        editTask: function(task){

            this.removeTask(task);

            this.newTask = task.body;

            this.$$.newTask.focus();

        },

        removeTask: function(task){
            this.tasks.$remove(task);
        }
    }

})