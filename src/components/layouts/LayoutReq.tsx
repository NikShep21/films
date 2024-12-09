'use client'

import { getGenres } from "@/api/response";
import { Genres } from "@/api/types";
import useResponse from "@/hooks/useResponse";
import { setState } from "@/store/slices/genreSlice";
import { useDispatch} from "react-redux";


interface LayoutFetchProps {
    children: React.ReactNode;
  }

const LayoutReq = ({children}:LayoutFetchProps) => {
    const dispatch = useDispatch()
    
    const [isLoad,errors,data] = useResponse(getGenres,'movie')
    dispatch(setState({isLoad:isLoad,errors:errors,data:data}))
    
    
    
    return(
        <>
            {children}
        </>
    )

}
export default LayoutReq