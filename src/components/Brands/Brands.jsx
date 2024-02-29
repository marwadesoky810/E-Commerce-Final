import React from 'react';
import Style from './Brands.module.scss';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useQuery } from 'react-query';
import { BallTriangle } from "react-loader-spinner";


export default function Brands() {

  function getAllBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  let { data } = useQuery('allBrands', getAllBrands);

  


  return (
    <div className='mt-5 pt-5 mb-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands</title>
        <meta name="description" content="Brands" />
      </Helmet>
      {data?.data.data ? (<>
        <div className='row align-items-center g-5 mt-2'>
        {data?.data.data.map((brand) => <div key={brand._id} className='col-md-3'>
        <button
              type="button"
              className="border-0 "
              data-bs-toggle="modal"
              data-bs-target="#modalId">
                <div>
              <div className='rounded  rounded-2 box-shadow cursor-pointer p-2 text-center h5 fw-bold category-hover'>
                <div>
                  <img src={brand?.image} alt="brandImg" />
                  <p className='fw-light'>{brand.name}</p>
                </div>
              </div>
            </div>
             
             </button>
             <div
              className="modal fade"
              id="modalId"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              
              role="dialog"
              aria-labelledby="modalTitleId"
              aria-hidden="true"
             >
              <div
                className="modal-dialog modal-dialog-scrollable modal-dialog-top modal-md"
                role="document"
              >
                <div className="modal-content m-5">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalTitleId">
                    <p className='fw-bold text-center text-main'>{brand.name}</p>
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                   <img src={brand.image} alt="specificCategoryImg" className='w-100 border p-3' />
                    
                  </div>
                   <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        
      </div>
                </div>
              </div>
             </div>
             
             <script>
              const myModal = new bootstrap.Modal(
                document.getElementById("modalId"),
                options,
              );
             </script>
            
          </div>)}
          

            
             
          </div>
        
      </>) :
       (<>
        <section className="d-flex vh-100 justify-content-center align-items-center mt-5 pt-5">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </section>
      </>)}
    </div>
  )
}
