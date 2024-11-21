'use client'
import React, { useEffect, useState } from 'react'

const useResponse = (functionTypeResponse:Function, ...enothe:any) => {
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [errors, setErrors] = useState<Error | null>(null)
    const [data, setData] = useState()
    useEffect(()=>{
        async function resp() {
            try{
                const response = await functionTypeResponse(...enothe)
                setData(response)
                setIsLoad(false)
            }
            catch(e){
                setErrors(e)
                throw e
            }
            
        }
        resp()
        
    },[])
  return [isLoad, errors, data]
}

export default useResponse