'use client'

import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react'
import DropzoneComponent from 'react-dropzone'



const Dropzone = () => {
const  [loding, setloding] = useState(false);
const {isLoaded ,isSignedIn,user}=useUser();
    const onDrop=(acceptedFile:File[])=>{
        acceptedFile.forEach((file)=>{
            const reader=new FileReader();

            reader.onabort=()=>console.log("File reading was abort");
            reader.onerror=()=>console.log("file reading has filed");
            reader.onload= async ()=>{
                await uploadPost(file);
            }
            reader.readAsArrayBuffer(file);
            
        })
    }
    const uploadPost= async (selecFile:File)=>{
        if(loding)return;

        setloding(true);



        setloding(false);
    }
    const maxSize = 20971520;
    return (
        <div>
            <DropzoneComponent maxSize={maxSize} minSize={0} onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => {

                    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
                    return (
                        <section className=' m-4'>
                            <div {...getRootProps()} className={cn("w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center"
                            // {isDragActive}?" bg-[#035FFE]":" text-white animate-pulse"
                            )}>
                                <input {...getInputProps()} />
                                {!isDragActive && "Click to drap file"}
                                {isDragActive && !isDragReject && "Drop to uplod this file"}
                                {isDragReject && "File type not accepted"}
                                {isFileTooLarge && (<div className=' text-dager mt-2'>File too Large</div>)}
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    );
                }}
            </DropzoneComponent>
        </div>
    )
}

export default Dropzone
