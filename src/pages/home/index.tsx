import React from 'react'

import { useList } from '@pankod/refine'
import { Box,Typography,Stack } from '@mui/material'

import PieChart from '../../components/charts/PieChart'
import PropertyReferrals from '../../components/charts/PropertyReferrals'
import TotalRevenue from '../../components/charts/TotalRevenue'
import PropertyCard from '../../components/common/PropertyCard'
import TopAgent from '../../components/home/TopAgent';

const Home = () => {
  return (
    <Box>
        <Typography fontSize={25} fontWeight={700} color="#609edb">
            Dashboard
        </Typography>

        <Box mt="20px" display="flex" flexWrap="wrap" gap={4} >
                <PieChart
                    title="Dispenser"
                    value={684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Customers"
                    value={550}
                    series={[60, 40]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Total Revenue"
                    value={5684}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
                <PieChart
                    title="Petrol Pumps"
                    value={555}
                    series={[75, 25]}
                    colors={["#275be8", "#c4e8ef"]}
                />
            </Box>
            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>

        
    </Box>
  )
}

export default Home