import React,{useContext} from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import PersonalDetailPreview from '@/dashboard/components/preview/PersonalDetailPreview';
import SummeryPreview from '@/dashboard/components/preview/SummeryPreview';
import ExperiencePreview from '@/dashboard/components/preview/ExperiencePreview';
import EducationalPreview from '@/dashboard/components/preview/EducationalPreview';
import SkillsPreview from '@/dashboard/components/preview/SkillsPreview';

function ResumePreview() {

  const{resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        <PersonalDetailPreview resumeInfo={resumeInfo}/>

        <SummeryPreview resumeInfo={resumeInfo}/>

        <ExperiencePreview resumeInfo={resumeInfo}/>

        <EducationalPreview resumeInfo={resumeInfo}/>

        <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default ResumePreview