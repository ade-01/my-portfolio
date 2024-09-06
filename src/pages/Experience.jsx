import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School } from '@mui/icons-material';
import { Work } from '@mui/icons-material';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
           date='2015-2017'
           iconStyle={{ background:'#3e497a', color:'#fff' }}
           icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            My SSCE took place in The African Church Model College, College Road Ifako-Ijaiye.Lagos State
          </h3>
          <p>Senior School Certificate Examination (SSCE)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
           date='2020-2023'
           iconStyle={{ background:'#3e497a', color:'#fff' }}
           icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Ecole Superieure De Commerce Et D'Administration Des Entreprises Du Benin (ESCAE BENIN)
          </h3>

          <h4 className='vertical-timeline-element-title'>
            Bachelor's Degree
          </h4>
          <p> Computer Science </p>
        </VerticalTimelineElement>   
      </VerticalTimeline>
    </div>
  )
}

export default Experience