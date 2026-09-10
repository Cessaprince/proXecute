import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ChartsDataProvider } from '@mui/x-charts/ChartsDataProvider'
import { ChartsSurface } from '@mui/x-charts/ChartsSurface'
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart'
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis'
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis'
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip'
import { ChartsGrid } from '@mui/x-charts/ChartsGrid'
import { ChartsLegend } from '@mui/x-charts/ChartsLegend'
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight'
import { useDrawingArea, useXScale } from '@mui/x-charts/hooks'

// hardcoded monthly dataset
const monthlyData = [
  { date: new Date('2026-01-01'), pending: 40, running: 35, completed: 25, collaborators: 5 },
  { date: new Date('2026-02-01'), pending: 38, running: 34, completed: 28, collaborators: 6 },
  { date: new Date('2026-03-01'), pending: 33, running: 37, completed: 30, collaborators: 7 },
  { date: new Date('2026-04-01'), pending: 30, running: 32, completed: 38, collaborators: 8 },
  { date: new Date('2026-05-01'), pending: 27, running: 30, completed: 43, collaborators: 9 },
  { date: new Date('2026-06-01'), pending: 22, running: 28, completed: 50, collaborators: 11 },
  { date: new Date('2026-07-01'), pending: 20, running: 25, completed: 55, collaborators: 12 },
  { date: new Date('2026-08-01'), pending: 18, running: 22, completed: 60, collaborators: 13 },
  { date: new Date('2026-09-01'), pending: 15, running: 20, completed: 65, collaborators: 15 },
  { date: new Date('2026-10-01'), pending: 12, running: 18, completed: 70, collaborators: 17 },
  { date: new Date('2026-11-01'), pending: 10, running: 15, completed: 75, collaborators: 18 },
  { date: new Date('2026-12-01'), pending: 8, running: 12, completed: 80, collaborators: 20 },
]

// hardcoded quarter labels and their date ranges
const quarters = [
  { start: new Date('2026-01-01'), end: new Date('2026-03-31'), label: 'First Quarter' },
  { start: new Date('2026-04-01'), end: new Date('2026-06-30'), label: 'Second Quarter' },
  { start: new Date('2026-07-01'), end: new Date('2026-09-30'), label: 'Third Quarter' },
  { start: new Date('2026-10-01'), end: new Date('2026-12-31'), label: 'Fourth Quarter' },
]

// draws the shaded rectangle + centered label for each quarter
const QuarterBands = () => {
  const { top, left, width, height } = useDrawingArea()
  const xScale = useXScale()

  return (
    <g>
      {quarters.map((quarter, index) => {
        const xStart = xScale(quarter.start.getTime())
        const xEnd = xScale(quarter.end.getTime())

        if (xStart === undefined || xEnd === undefined) return null

        const bandStart = Math.max(xStart, left)
        const bandEnd = Math.min(xEnd, left + width)
        if (bandEnd <= bandStart) return null

        return (
          <React.Fragment key={index}>
            <rect
              x={bandStart}
              y={top}
              width={bandEnd - bandStart}
              height={height}
              fill={index % 2 === 0 ? '#f97316' : '#fdba74'}
              opacity={0.08}
            />
            <text
              x={(bandStart + bandEnd) / 2}
              y={top - 8}
              textAnchor="middle"
              fill="#9a3412"
              fontSize="0.75rem"
              fontWeight={600}
            >
              {quarter.label}
            </text>
          </React.Fragment>
        )
      })}
    </g>
  )
}


//main function

const LineGraph = () => {
  const clipPathId = React.useId()

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Typography sx={{ textAlign: 'center', fontWeight: 500}}>
        Percentage of Projects/Tasks Completed — 2026
      </Typography>

      <ChartsDataProvider
        height={400}
        margin={{ left: 50, right: 50, top: 40, bottom: 55 }}
        dataset={monthlyData}
        series={[
          {
            type: 'line',
            id: 'pending',
            dataKey: 'pending',
            label: 'Pending',
            color: '#dc2626',
            yAxisId: 'percentage-axis',
            curve: 'monotoneX',
            valueFormatter: (value) => (value == null ? '' : `${value}%`),
          },
          {
            type: 'line',
            id: 'running',
            dataKey: 'running',
            label: 'Running',
            color: '#eab308',
            yAxisId: 'percentage-axis',
            curve: 'monotoneX',
            valueFormatter: (value) => (value == null ? '' : `${value}%`),
          },
          {
            type: 'line',
            id: 'completed',
            dataKey: 'completed',
            label: 'Completed',
            color: '#16a34a',
            yAxisId: 'percentage-axis',
            curve: 'monotoneX',
            valueFormatter: (value) => (value == null ? '' : `${value}%`),
          },
          {
            type: 'line',
            id: 'collaborators',
            dataKey: 'collaborators',
            label: 'Collaborators',
            color: '#2563eb',
            yAxisId: 'collaborators-axis',
            curve: 'monotoneX',
            valueFormatter: (value) => (value == null ? '' : `${value}`),
          },
        ]}
        xAxis={[
          {
            scaleType: 'time',
            dataKey: 'date',
            min: new Date('2026-01-01').getTime(),
            max: new Date('2026-12-31').getTime(),
            tickNumber: 12,
            valueFormatter: (date) => date.toLocaleDateString('en-US', { month: 'short' }),
          },
        ]}
        yAxis={[
          {
            id: 'percentage-axis',
            scaleType: 'linear',
            min: 0,
            max: 100,
            valueFormatter: (value) => `${value}%`,
            width: 55,
            position: 'left',
          },
          {
            id: 'collaborators-axis',
            scaleType: 'linear',
            min: 0,
            max: 20,
            width: 50,
            position: 'right',
            valueFormatter: (value) => `${value}`,
          },
        ]}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <ChartsLegend />
        </Box>

        <ChartsSurface>
          <ChartsGrid horizontal />
          <QuarterBands />
          <LinePlot />
          <MarkPlot />
          <ChartsXAxis />
          <ChartsYAxis axisId="percentage-axis" label="Percentage project/task done" />
          <ChartsYAxis axisId="collaborators-axis" label="Collaborators" />
          <ChartsAxisHighlight x="line" />
        </ChartsSurface>

        <ChartsTooltip />
      </ChartsDataProvider>


    </Box>
  )
}

export default LineGraph