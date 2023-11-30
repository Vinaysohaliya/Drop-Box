'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './col'
import { FileType } from '@/type'
import { useUser } from '@clerk/nextjs'
import { collection, orderBy, query } from 'firebase/firestore'
import { useCollection} from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'

const TableWrapper = ({files}:{files:FileType[]}) => {
    const  {user }=useUser();
    const [initialFiles, setinitialFiles] = useState<FileType[]>([]); 
    const [sort, setsort] = useState<"asc"|"desc">("desc");

    const [docs, loading, error] = useCollection(
       user&& query(collection(db,"users",user.id,"files"),
       orderBy("timestamp",sort))
      );

      useEffect(() => {
        if(!docs)return;
        const file:FileType[]=docs.docs.map((doc)=>({
            id:doc.id,
            filename:doc.data().filename||doc.id,
            timestamp:new Date(doc.data().timestamp?.second*1000)||undefined,
            fullname:doc.data().downloadurl,
            downloadurl:doc.data().downloadurl,
            type:doc.data().type,
            size:doc.data().size,
        }))
     setinitialFiles(file)
      }, [docs])
      

  return (
    <div>
      <Button onClick={()=>{setsort(sort==='desc'?"asc":"desc")}}>Sort By {sort==='desc'?"Newest":"Oldest"}</Button>
      <DataTable columns={columns} data={initialFiles}></DataTable>
    </div>
  )
}

export default TableWrapper
