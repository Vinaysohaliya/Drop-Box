"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import prettyBytes from "pretty-bytes"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<File>[] = [
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell:({renderValue,...props})=>{
     return <span>{prettyBytes(renderValue() as number)}</span>   
    }
  },
  {
    accessorKey:"downloadURl",
    header:"Link",
    cell:({renderValue,...props})=>{
        return <a href={renderValue() as string} target="_blank" className=" underline text-blue-500 hover:text-blue-600">Download</a>   
       }
  }
 
]
