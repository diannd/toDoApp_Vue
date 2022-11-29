const note={template:`
<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
 Add Note
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Note Id
        </th>
        <th>
            Title
        </th>
        <th>
            Note
        </th>
    </tr>
</thead>
<tbody>
    <tr v-form="note in note">
        <td>{{note.NoteId}}</td>
        <td>{{note.NoteTitle}}</td>
        <td>{{note.NoteNote}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(note)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>
            <button type="button" @click="deleteClick(note.NoteId)"
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

        <div class="input-group mb-3">
            <span class="input-group-text">Title</span>
            <input type="text" class="form-control" v-model="NoteTitle">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Note</span>
            <input type="text" class="form-control" v-model="NoteNote">
        </div>

        <button type="button" @click="createClick()"
        v-if="NoteId==0" class="btn btn-primary">
        Create
        </button>
        <button type="button" @click="updateClick()"
        v-if="NoteId!=0" class="btn btn-primary">
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
        note:[],
        modalTitle:"",
        NoteTitle:"",
        NoteNote:"",
        NoteId:0
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"note")
        .then((response)=>{
            this.note=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Note";
        this.NoteId=0;
        this.NoteTitle="";
        this.NoteNote="";
    },
    editClick(note){
        this.modalTitle="Edit Note";
        this.NoteId=note.NoteId;
        this.NoteTitle=note.NoteTitle;
        this.NoteNote=note.NoteNote;
    },
    createClick(){
        axios.post(variables.API_URL+"note",{
            NoteTitle:this.NoteTitle,
            NoteNote:this.NoteNote
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    updateClick(){
        axios.put(variables.API_URL+"note",{
            NoteId:this.NoteId,
            NoteTitle:this.NoteTitle,
            NoteNote:this.NoteNote
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
        axios.delete(variables.API_URL+"note"+id)
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