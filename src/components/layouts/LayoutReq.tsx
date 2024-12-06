'use client'

import { getGenres } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { useDispatch } from "react-redux";
import { UseDispatch, useSelector } from "react-redux";

interface LayoutFetchProps {
    children: React.ReactNode;
  }
const LayoutReq = ({children}:LayoutFetchProps) => {
    const dispatch = useDispatch()
    
    const [isLoad,errors,data] = useResponse(getGenres,'movie')
    console.log(data)
    return(
        <>
            {children}
        </>
    )

}
export default LayoutReq