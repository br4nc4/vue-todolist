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
    },
    methods:{
        /* MILESTONE 2 */
        deleteTask: function(indexTask){
            //return console.log("button cliccato con indice"+ indexTask);
            return this.toDoList.splice(indexTask, 1);
        },

        addTask: function(){
            
        }

    }
    
});