import React from 'react'
import PaymentCard from '../../../components/customers/paymentCard'

const Payment = () => {
  return (
    <>
      <h1 className='font-weight-bold'>Payment</h1>
      <div className="d-flex flex-wrap mb-3">
        <div className="p-2">
          <PaymentCard buttonValColor="#42a5f5
" recordsVal="199" data="Total Pending Records" color="#e0f7fa" />
        </div>
        <div className="p-2 ">
          <PaymentCard buttonValColor="#009688
" recordsVal="199" data="Total Paid Records" color="#e0f2f1

" />
        </div>
        <div className="p-2">
          <PaymentCard buttonValColor="#e57373

" recordsVal="199" data="Total Rejected Records" color="#ffebee
" />
        </div>
      </div>
    </>
  )
}

export default Payment
