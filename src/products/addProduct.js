import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

  let navigate = useNavigate()

  const [product, setProduct] = useState({
    name:"",
    company:"",
    price:"",
    inStocked:""
  })

  const {name,company,price,inStocked} = product

  const onInputChange = (e) =>{
      setProduct({...product,[e.target.name]: e.target.value});
  }

  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/react/api/v1/product/add",product)
      navigate("/")
  }

  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
              <h2 className='text-center m-4'>Add New Product</h2>
              <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>Product Name</label>
                  <input type={"text"} value={name} className='form-control' placeholder='Add product' name="name" onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>Product Company</label>
                  <input type={"text"} value={company} className='form-control' placeholder='Add product' name="company" onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>price</label>
                  <input type={"text"} value={price} className='form-control' placeholder='Add product' name="price" onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>Quantity</label>
                  <input type={"text"} value={inStocked} className='form-control' placeholder='Add product' name="inStocked" onChange={(e)=>onInputChange(e)}/>
              </div>
              <button className='btn btn-outline-primary'>Submit</button>
              <button className='btn btn-outline-danger mx-2' to="/">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
