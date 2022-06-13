new Vue({
    el:'#app',
    data:{
        toDoList:[
        {
            text:"fare la spesa",
            done: false,
        },
        {
            text:"andare in palestra",
            done: false,
        },
        {
            text:"pagare bollette",
            done: false,
        },
    ],
    newTask: "",

    },
    methods:{
        /* MILESTONE 2 */
        deleteTask: function(indexTask){
            //return console.log("button cliccato con indice"+ indexTask);
            return this.toDoList.splice(indexTask, 1);
        },

        /* MILESTONE 3 */
        addTask: function(){
            newTask ={
                text: this.newTask,
                done: false,
            }
            return this.toDoList.push(newTask);
        },

    }
    
});