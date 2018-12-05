import React,{Component} from 'react';
import'./index.css'

 class Popup extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen: true,        
        }
    this.handleClickno=this.handleClickno.bind(this);
    this.handleClickyes=this.handleClickyes.bind(this);
 }
    handleClickyes(){
      this.setState({
        isOpen:false,
      })
    }
    handleClickno(){
        window.close()
 }
    render(){
       return(
            <div className={this.state.isOpen ? 'popup' : ' close'}>
                <h3>Are you over 18 ?</h3>
                <div className="button-groupe">
                <button className="cta" onClick={()=>this.handleClickyes()}> yes</button>
                <button  className="cta" onClick={()=>this.handleClickno()}>no</button>
                </div>
            </div>
            )
        }
}
export default Popup;