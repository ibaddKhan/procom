import { Box, Typography } from '@mui/material'
import React from 'react'

const PaymentCard = ({ title, amount, records }) => {
    return (
        <>
            <Box sx={{ width: '200px', padding: '20px', border: "1px solid #cfcfcf", borderRadius: "7px" }}>
                <Typography variant='subtitle2'> {title} </Typography>

                <Typography variant='h6' sx={{ marginY: '10px' }}> {amount} PKR </Typography>

                <Box sx={{ width: '100px', padding: '5px', border: "1px solid #cfcfcf", borderRadius: "50px" }}>
                    <Typography variant='body2'> {records} Records </Typography>
                </Box>

            </Box>
        </>
    )
}

export default PaymentCard
