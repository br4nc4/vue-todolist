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
    
    methods:{
        test: function(indexTask){
            return console.log("button cliccato con indice"+ indexTask);
        }
    }
    }
});