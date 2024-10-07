import { FormEvent, useState } from "react"

interface UploadFormProps {
    onSubmit: (file: File) => void;
}

export function UploadForm({onSubmit}: UploadFormProps){
    const [fileName, setFilename] = useState<string | null>('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)
  

    const handleFileSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(selectedFile){
            onSubmit(selectedFile)
            setError('')
            setSelectedFile(null)
        }
    }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0]
    const mimeType = file.type
    
    if(mimeType === 'image/gif'){
      setSelectedFile(file)
      setFilename(file.name)
      setError(null)
    } else{
      setError('Please upload a .gif file.')
    }

  }  
    return(
        <form onSubmit={handleFileSubmit} className="flex items-center flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="file" className="bg-slate-900 hover:bg-slate-700 text-slate-200 font-bold px-2 py-4 rounded cursor-pointer">
              Choose your gif
              <input onChange={handleFileChange} className="hidden" type="file" accept=".gif" name="file" id="file" />
            </label>
            <span className="text-slate-400">
              {
                selectedFile ?
                fileName
                : 
                'No selected file'
              }
            </span>
          </div>
          <span className="text-red-500">
            {
              error ? error : null
            }
          </span>
          <input 
          type="submit"
          value="Upload"
          className="bg-slate-300 px-4 py-1 rounded-xl" />
        </form>
    )
}