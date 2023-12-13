// Inizializzo l'applicazione
const { createApp } = Vue

createApp({
    data(){
        return {

            todoList: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: "Finire l'esecizio di Mercoledì scorso",
                    done: false,
                },
                {
                    text: 'Pagare rata della macchina',
                    done: false,
                },
                {
                    text: 'Comprare i croccantini al cane',
                    done: false,
                },
                {
                    text: 'Accompagnare mia sorella a fare shopping',
                    done: false,
                },
                {
                    text: 'Portare i regali di natale a casa di Zio Antonio',
                    done: false,
                },
            ],
        }
    },
    created() {
        
    },
    methods: {
        // DEFINISCO LA FUNZIONE CHE ELIMINA LE TASK DALLA LISTA CON CONFERMA
        deleteTask(index){

            let confirmation = confirm('Sei sicuro di voler eliminare questa task?')

            if(confirmation){
                this.todoList.splice(index,1);
            }
        },
        
    },
}).mount('#app')