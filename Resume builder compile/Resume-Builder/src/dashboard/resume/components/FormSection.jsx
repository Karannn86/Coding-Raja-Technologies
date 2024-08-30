import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import PersonalDetail from '@/dashboard/components/forms/PersonalDetail';
import Summery from '@/dashboard/components/forms/Summery';
import { Navigate } from 'react-router-dom';
import Experience from '@/dashboard/components/forms/Experience';
import Education from '@/dashboard/components/forms/Education';
import Skills from '@/dashboard/components/forms/Skills';
import ThemeColor from '@/dashboard/components/preview/ThemeColor';


function FormSection() {
  const [activeFormIndex ,setActiveFormIndex]=useState(1);
  const [enabledNext,setEnableNext]=useState(true);
  const {resumeId}=useParams();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5'>
          <Link to={"/dashboard"}>
        <Button><Home/></Button>
        </Link>
        <ThemeColor/>
        </div>
        <div className='flex gap-2'>
          {activeFormIndex>1
          &&<Button size="sm"
          onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
          <Button className="flex gap-2" size="sm"
          onClick={()=>setActiveFormIndex(activeFormIndex+1)}
          >Next
            <ArrowRight/>
          </Button>
        </div>
      </div>


{activeFormIndex==1?  
  <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
  :activeFormIndex==2?
    <Summery  enabledNext={(v)=>setEnableNext(v)} />
  :activeFormIndex==3?
    <Experience />  
    :activeFormIndex==4?
    <Education/>
    :activeFormIndex==5?
    <Skills/>
    :activeFormIndex==6?
    <Navigate to={'/my-resume/'+resumeId+"/view"}/>
        
  :null
    }
    </div>
  )
}

export default FormSection