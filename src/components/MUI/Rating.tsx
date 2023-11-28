import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface IProps{
    rate: number | null
    setRate: (value: number | null) => void
}

export default function HalfRating({rate, setRate} : IProps) {



    return (
        <Stack spacing={1}>
            <Rating
                className="rating__state"
                onChange={(e, value) => setRate(value)}
                max={10}
                size="large"
                name="half-rating"
                value={rate}
                precision={0.5} />
        </Stack>
    );
}
