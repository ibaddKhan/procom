import React from 'react'
import PaymentCard from '../../../components/customers/paymentCard'

const Payment = () => {
  return (
    <>
      <div>Payment</div>
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <PaymentCard color="#90caf9" />
        </div>
        <div className="p-2 ">
          <PaymentCard color="#80cbc4
" />
        </div>
        <div className="p-2">
          <PaymentCard color="#f48fb1" />
        </div>
      </div>
    </>
  )
}

export default Payment
