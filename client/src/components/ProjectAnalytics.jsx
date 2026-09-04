import { BarChart, barClasses } from '@mui/x-charts/BarChart'
import Box from '@mui/material/Box'

const ProjectAnalytics = () => {

    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const dailyPercentages = [72, 88, 54, 95, 63, 84, 78]

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <BarChart
                xAxis={[
                    {
                        id: 'daysCategories',
                        data: days,
                        scaleType: 'band',
                        disableLine: true,
                        disableTicks: true,
                        categoryGapRatio: 0.2,
                        tickLabelStyle: {
                            fontSize: 12,
                            fontWeight: 400,
                            fill: 'var(--mui-palette-text-secondary, #00)',
                        },
                    },
                ]}
                yAxis={[
                    {
                        position: 'none', //to hide the left bar
                        min: 0,
                        max: 100,
                    },
                ]}
                series={[
                    {
                        data: dailyPercentages,
                        color: '#f97316',
                        label: 'Tasks Done',
                        valueFormatter: (value) =>
                            value == null ? '' : `${value}%`,
                    },
                ]}
                borderRadius={999}
                hideLegend
                margin={{ left: 10, right: 10, top: 20, bottom: 25 }}
                sx={{
                    [`& .${barClasses.element}`]: {
                        fill: 'url(#brightToRegularOrange)',
                        filter: 'drop-shadow(0 6px 12px rgba(249, 115, 22, 0.32))',
                        transition: 'filter 0.25s ease, transform 0.25s ease, opacity 0.2s ease',
                        cursor: 'pointer',
                    },
                    [`& .${barClasses.element}:hover`]: {
                        filter: 'drop-shadow(0 10px 18px rgba(249, 115, 22, 0.55)) brightness(1.08)',
                    },
                }}
            >
                <defs>
                    <linearGradient
                        id="brightToRegularOrange"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0%" stopColor="#ffaa40" stopOpacity="1" />
                        <stop offset="45%" stopColor="#fb923c" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
                    </linearGradient>
                </defs>
            </BarChart>
        </Box>
    )
}

export default ProjectAnalytics