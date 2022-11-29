const agenda={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Agenda
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Agenda Id
        </th>
        <th>
            Title
        </th>
        <th>
            Time
        </th>
        <th>
            Description
        </th>
        <th>
            Priority
        </th>
    </tr>
</thead>
<tbody>
    <tr v-form="agenda in agenda">
        <td>{{agenda.AgendaId}}</td>
        <td>{{agenda.AgendaTitle}}</td>
        <td>{{agenda.AgendaTime}}</td>
        <td>{{agenda.AgendaDescription}}</td>
        <td>{{agenda.AgendaPriority}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(agenda)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(agenda.AgendaId)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
            </button>

        </td>
    </tr>
</tbody>
</thead>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>  
    
    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">

            <div class="input-group mb-3">
                <span class="input-group-text">Title</span>
                <input type="text" class="form-control" v-model="Title">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Time</span>
                <input type="date" class="form-control" v-model="Time">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" v-model="Description">
            </div>

            <div class="input-group mb-3">            
                <span class="input-group-text">Priority</span>
                <input type="text" class="form-control" v-model="Priority">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Urgent</a></li>
                    <li><a class="dropdown-item" href="#">Important</a></li>
                    <li><a class="dropdown-item" href="#">Not Urgent</a></li>
                    <li><a class="dropdown-item" href="#">Not Important</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
        <button type="button" @click="createClick()"
        v-if="AgendaId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="AgendaId!=0" class="btn btn-primary">
        Update
        </button>
    </div>

</div>
</div>
</div>

</div>

`,

data(){
    return{
        agenda:[],
        modalTitle:"",
        AgendaId:0,
        AgendaTitle:"",
        AgendaTime:"",
        AgendaDescription:"",
        AgendaPriority:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"agenda")
        .then((response)=>{
            this.agenda=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Agenda";
        this.AgendaId=0;
        this.AgendaTitle="";
        this.AgendaTime="";
        this.AgendaDescription="";
        this.AgendaPriority="";
    },
    editClick(agenda){
        this.modalTitle="Edit Agenda";
        this.AgendaId=agenda.AgendaId;
        this.AgendaTitle=agenda.AgendaTitle;
        this.AgendaTime=agenda.AgendaTime;
        this.AgendaDescription=agenda.AgendaDescription;
        this.AgendaPriority=agenda.AgendaPriority;
    },
    createClick(){
        axios.post(variables.API_URL+"agenda",{
            AgendaTitle:this.AgendaTitle,
            AgendaTime:this.AgendaTime,
            AgendaDescription:this.AgendaDescription,
            AgendaPriority:this.AgendaPriority
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"agenda",{
            AgendaId:this.AgendaId,
            AgendaTitle:this.AgendaTitle,
            AgendaTime:this.AgendaTime,
            AgendaDescription:this.AgendaDescription,
            AgendaPriority:this.AgendaPriority
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    deleteClick(id){
        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"agenda"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });

    }
},
mounted:function(){
    this.refreshData();
}

}