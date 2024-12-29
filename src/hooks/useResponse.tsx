'use client'

import React, { useEffect, useState } from 'react'


function useResponse<T>(functionTypeResponse:Promise<T>):[data:T|null,isLoad:boolean,errors:Error|null,]{
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [errors, setErrors] = useState<Error | null>(null)
    const [data, setData] = useState<T|null>(null)
    useEffect(()=>{
        async function resp() {
            try{
                const response = await functionTypeResponse

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
        
    },[])
    
  return [data,isLoad,errors]
}

export default useResponse