import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import PaymentCard from '../../../components/marchents/PaymentCard'

const Payment = () => {
  return (
    <>
      <Box>
        <Typography variant='h5' sx={{ marginBottom: "50px" }}> Payments </Typography>

        <Box>

          <Box sx={{display:'flex', gap:'20px'}}>
            {/* <Typography>sj</Typography> */}
            <PaymentCard title={"All Payments"} amount={"33,676"} records={"267"} />
            <PaymentCard title={"Succeed"} amount={"33,676"} records={"267"} />
            <PaymentCard title={"Pending"} amount={"3,676"} records={"67"} />
            <PaymentCard title={"Rejected"} amount={"1,676"} records={"26"} />
          </Box>

        </Box>

      </Box>
    </>
  )
}

export default Payment