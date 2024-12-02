'use client'
import { MassiveMovie } from '@/api/types'
import React, { useEffect, useState } from 'react'

function useResponse<T>(functionTypeResponse:(...args:any)=>Promise<T>, ...enothe:any):[boolean,Error | null, T | null] {
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [errors, setErrors] = useState<Error | null>(null)
    const [data, setData] = useState<T | null>(null)
    useEffect(()=>{
        async function resp() {
            try{
                const response = await functionTypeResponse(...enothe)
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
    
  return [isLoad, errors, data]
}

export default useResponse