'use client'
import { useParams, usePathname } from "next/navigation"

export default function Page(){
    const params = useParams()
    const typeContent = usePathname()?.slice().split('/')[0]
    console.log(typeContent)
    return( 
    <div>
        
    </div>
    )
}