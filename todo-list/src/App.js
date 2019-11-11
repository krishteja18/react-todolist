import React,{Component} from 'react';
import logo from './logo.svg';

import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class  App extends Component{
state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
handlechange=e=>{
    this.setState({item:e.target.value})

  }
  handlesubmit=e=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item,

    }
    console.log(newItem)
    const updatedItems=[...this.state.items,newItem]
    console.log(updatedItems)
    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    }

    )

  }
  clearList=()=>{
    this.setState({ items:[],
      id:uuid(),
      item:'',
      editItem:false})


  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=> item.id!==id)
    this.setState({
      items:filteredItems
    })
  }
  handleEdit=id=>{
    console.log(id)
    const filteredItems=this.state.items.filter(item=> item.id!==id)
    const selecteditem=this.state.items.find(item=>item.id===id)
    console.log(selecteditem )
    this.setState({
      items:filteredItems,
      item:selecteditem.title,
      editItem:true,
      id:id

    })
     
  }

  render(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            Todo input
          </h3>
          <Todoinput item={this.state.item}  handlechange={this.handlechange}
          handlesubmit={this.handlesubmit} editItem={this.state.editItem}/>
        <Todolist items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
    
                                                                  
        </div>
      </div>
    </div>
  
  );
}
}

export default App;
