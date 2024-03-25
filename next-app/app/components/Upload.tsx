import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";

const Upload = (): JSX.Element => {
  const [file, setFile] = useState<File | undefined>();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(event.target)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    }
    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
    }
  }

  /** Renders file info based on useState */
  const renderInfo = () => {
    if (!file)
      return (
        <div className="h-full flex justify-center items-center">
          <Image className="z-0" src={'/img/upload.svg'} alt='upload img' width={250} height={250}/>
        </div>
      )

    return (
      <div className="text-black text-2xl h-3/4 flex flex-col items-center justify-center">
        <Image className="z-0" src={'/img/file.svg'} alt='file img' width={250} height={250}/>
        <h1 className="">{file.name}</h1>
        <h1>SIZE: {Math.round(file.size / 1000)} KB</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-2/3 flex justify-center items-center">
      <div className="h-[550px] w-[500px] py-4 border-2 rounded-[25px] shadow-md transition-transform scale-100 hover:scale-105 bg-gray-100">
        <form 
          className="h-full w-full flex flex-col justify-center items-center" 
          onSubmit={handleSubmit}
          method="post"
        >
          <label htmlFor="file" className="w-full h-full hover:cursor-pointer flex flex-col items-center">
            <input
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              className="hidden"
              type="file"
              id="file"
              onChange={handleChange}
            />
            <span className="text-black text-4xl">PAINA LADATAKSESI TIEDOSTO</span>
            {renderInfo()}
          </label>
          <Button className="SubmitButton w-[calc(100%-24px)] mx-auto p-4" size="md" color="primary" type='submit'>
            <h1 className="text-2xl pt-1">LÄHETÄ</h1>
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Upload;