import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ViewProducts() {
    const {id} = useParams()
    let navigate = useNavigate()
    const [product, setProduct] = useState({
        name:"",
        company:"",
        price:"",
        inStocked:""
      })

      useEffect(() =>{
        loadProduct()
      }, [])

    const {name,company,price,inStocked} = product

    const loadProduct = async (e) =>{
        const result = await axios.get(`http://localhost:8080/react/api/v1/product/${id}`)
        setProduct(result.data.DATA);
      }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card mt-2 shadow'>
            <div className='card-body text-center'>
              <h2 className='card-title m-4'>View Product Details</h2>
              <div className='mb-3'>
                <strong>Product Name:</strong> {name}
              </div>
              <div className='mb-3'>
                <strong>Product Company:</strong> {company}
              </div>
              <div className='mb-3'>
                <strong>Price:</strong> {price}
              </div>
              <div className='mb-3'>
                <strong>Quantity:</strong> {inStocked}
              </div>
              <button className='btn btn-outline-danger mx-2' onClick={() => navigate("/")}>
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
