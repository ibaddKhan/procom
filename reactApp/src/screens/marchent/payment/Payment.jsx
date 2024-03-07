import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import PaymentCard from '../../../components/marchents/PaymentCard'


const Payment = () => {
  return (
    <>
      <Box>
        <Typography variant='h5' sx={{ marginBottom: "50px" }}> Payments </Typography>

        <Box>

          {/* Payment History Cards  */}
          <Box sx={{ display: 'flex', gap: '20px' }}>

            <PaymentCard title={"All Payments"} amount={"33,676"} records={"267"} borderCOlor={"#1976d2"} chipColor={"primary"} bgColor={"#ebf5ff"} />
            <PaymentCard title={"Succeed"} amount={"33,676"} records={"267"} borderCOlor={"#2e7d32"} chipColor={"success"} bgColor={"#f2faf2"} />
            <PaymentCard title={"Pending"} amount={"3,676"} records={"67"} borderCOlor={"#d99902"} chipColor={"warning"} bgColor={"#faf8f5"} />
            <PaymentCard title={"Rejected"} amount={"1,676"} records={"26"} borderCOlor={"#d32f2f"} chipColor={"error"} bgColor={"#f7eded"} />
          </Box>

        </Box>

      </Box>
    </>
  )
}

export default Payment