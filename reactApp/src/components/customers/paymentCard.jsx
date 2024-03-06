import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function PaymentCard({ color, data, recordsVal, buttonValColor }) {
    return (
        <Box sx={{ minWidth: 210 }}>
            <Card style={{ backgroundColor: color }} variant="none">
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {data}
                        </Typography>

                        <Button
                            style={{ color: buttonValColor }}
                            variant="outlined"
                            size="small"
                            sx={{ borderRadius: '20px', padding: '1px', borderColor: buttonValColor }}
                        >
                            {recordsVal}
                        </Button>

                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
}
