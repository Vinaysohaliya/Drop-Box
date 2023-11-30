import React from 'react'
import Dropzone from "@/components/Dropzone"
import { auth } from '@clerk/nextjs'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { FileType } from '@/type';
import TableWrapper from '@/components/table/TableWrapper';

const DashBorad = async () => {
  const { userId } = auth();
  const docResult = await getDocs(collection(db, "users", userId!, "files"));
  const files:FileType[]= docResult.docs.map(doc=>({
    id:doc.id,
    filename:doc.data().filename||doc.id,
    timestamp:new Date(doc.data().timestamp?.second*1000)||undefined,
    fullname:doc.data().downloadurl,
    downloadurl:doc.data().downloadurl,
    type:doc.data().type,
    size:doc.data().size,

  }))
  console.log(files);
  
  return (
    <div>
      <Dropzone />
      <section>
        <h2>All files</h2>
        <div>
          <TableWrapper files={files}></TableWrapper>
        </div>
      </section>
    </div>
  )
}

export default DashBorad
