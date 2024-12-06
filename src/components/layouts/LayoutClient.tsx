'use client'

import store from "@/store/index";
import { Provider } from "react-redux";
import LayoutReq from "./LayoutReq";

interface LayoutFetchProps {
    children: React.ReactNode;
  }
const LayoutClient = ({children}:LayoutFetchProps) => {


    return(
        <>
        <Provider store={store}>
            <LayoutReq>
                {children}
            </LayoutReq>
        </Provider>
        
        </>
    )

}
export default LayoutClient