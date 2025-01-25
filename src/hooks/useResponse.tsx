'use client'

import React, { useEffect, useState } from 'react'


function useResponse<T>(functionTypeResponse:()=>Promise<T>,deps:any[] = []):[data:T|null,isLoad:boolean,errors:Error|null,]{
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [errors, setErrors] = useState<Error | null>(null)
    const [data, setData] = useState<T|null>(null)
   
    useEffect(()=>{
        
        async function resp() {
            
            try{
                setIsLoad(true)
                setData(null);
                setErrors(null)
                const response = await functionTypeResponse()

                setData(response)
                setIsLoad(false)
            }
            catch (e) {
                if (e instanceof Error) {
                    setErrors(e); 
                } else {
                    setErrors(new Error('Unknown error occurred')); 
                }
                throw e; 
            }
            
        }
        resp()
        
    },deps)
    
  return [data,isLoad,errors]
}

export default useResponse