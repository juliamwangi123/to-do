import { Component, OnInit } from '@angular/core';
import{Mylist} from './../../model/mylist'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  //initialize the todo array  from mylist class
    todo:Mylist[];
    newItem :string
  constructor() { }


  //feed in the todo array with so  that the  property match those inside the class mylist
  ngOnInit(): void {

  
    this.todo =[
      //item 1
      {content:"make my toDo app",
      status: false
    },
    //item2
    {
      content :"make flashcard app",
      status:false
    }
    ]
  }


  //add a method that when the content on to do list is clicked  is marked as done

    addToggleDone(id){
        this.todo.map(function(element , index){
           if(index === id) element.status =! element.status;
           return element;
        })
    }

    delete(id){
      this.todo = this.todo.filter(function(element , index){
          return index !== id;
        
         
      })
    }

    addTodo(){
      this.todo.push({
        content:this.newItem,
        status:false
      })
    }


   
}
