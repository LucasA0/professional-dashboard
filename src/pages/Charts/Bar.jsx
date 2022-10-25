import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10
     bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Chart' title='Bar' />

      <ChartComponent
        id='bar-chart'
        height='420px'
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        title='Olympic medal Count - RIO'
        tooltip={{enable: true}}
        legendSettings={{ background: 'white' }}
        background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
        chartArea={{border: {width: 0}}
      }
      >
        <Inject services={[ ColumnSeries, Legend, Tooltip, Category, DataLabel ]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} /> 
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>

    </div>
  )
}

export default Bar