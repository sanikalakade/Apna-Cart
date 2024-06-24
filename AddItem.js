import React from 'react';
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
productName:"",
productPrice:0,
        }
    }
    render() { 
        return  <form className="row mb-5"onSubmit={(e)=>{
            e.preventDefault();
            this.props.addItem(this.state.productName,Number(this.state.productPrice))}}>
    <div className="mt-3 col-5">
      <label htmlFor="inputName" className="form-label  text-white">
       Name
      </label>
      <input
        type="text"
        className="form-control"
        id="inputName"
        aria-describedby="name"
        name="productName"
        onChange={(e)=>{
            this.setState({productName:e.currentTarget.value});
        }}
        value={this.state.productName}
      />
    </div>
    <div className="mt-3 col-5">
      <label htmlFor="price" className="form-label  text-white">
       Price
      </label>
      <input
        type="number"
        className="form-control"
        id="price"
        name="productPrice"
        onChange={(e)=>{
            this.setState({productPrice:Number(e.currentTarget.value)});
        }}
        value={this.state.productPrice}
      />
    </div>
 <button type="submit" className="btn btn-success  col-2 my-5  text-white">
     ADD
    </button>
  </form>


    }
}
 
export default AddItem;