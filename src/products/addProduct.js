import React from 'react'

export default function AddProduct() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Add New Product</h2>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Product Name</label>
                <input type={"text"} className='form-control' placeholder='Add product' name="name"/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Product Company</label>
                <input type={"text"} className='form-control' placeholder='Add product' name="company"/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>price</label>
                <input type={"text"} className='form-control' placeholder='Add product' name="price"/>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Quantity</label>
                <input type={"text"} className='form-control' placeholder='Add product' name="inStocked"/>
            </div>
            <button className='btn btn-outline-primary'>Submit</button>
            <button className='btn btn-outline-danger mx-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
