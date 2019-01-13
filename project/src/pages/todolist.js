import React , { Component } from 'react';
import './todolist.css';
class Todolist extends Component{
    constructor(props){
      super(props);
      this.state = {
        inputVal : '',
        list : []
      }   
    }

    render(){
      return (
        <div className="container-fluid" style={{padding:0}}>
          <div className="input-group" style={{backgroundColor:'#ccc','border-radius':'5px'}}>
            <div class="input-group-prepend">
              <div class="input-group-text">+</div>
            </div>
            <input className="form-control" style={{backgroundColor:'unset'}} onChange={this.handleInputChange} value={this.state.inputVal} type="text"/>
            <button className="btn btn-sm" onClick={this.handleAddBtn}>添加</button>
          </div>

          <ul>
              {
                this.state.list.map((item,key)=>(
                    <li key={Math.random()} onClick={()=>this.handleItemClick(key)}>{item}</li>
                ))
              }
          </ul>
        </div>
      )
    }

    handleAddBtn = () => {
      this.setState(prevState => ({
          inputVal : '',
          list : [...prevState.list,prevState.inputVal]
      }))
    }
    
    handleInputChange = e => {
      const value = e.target.value;
      this.setState(()=>({
          inputVal : value
      }))
    }

    handleItemClick = key => {
      this.setState(prevState => ({
          list : prevState.list.filter((item,index)=>index !== key)
      }))
    }
}
export default Todolist;