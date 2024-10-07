import { useEffect, useState } from "react"
import { UploadForm } from "./components/UploadForm"
import { GifsList } from "./components/GifsList"

export interface Gif{
  id: string
  url: string
  alt: string
}

function App() {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(()=>{
    const existingGifs = window.localStorage.getItem('gifs')
    const data = existingGifs?.length ? JSON.parse(existingGifs) : []
    setGifs(data)
  }, [])

  const handleFileUpload = (file: File) => {
      const url = URL.createObjectURL(file)
      const gif = {
        id: crypto.randomUUID(),
        url,
        alt: ''
      }
      window.localStorage.setItem('gifs', JSON.stringify([...gifs, gif]))
      setGifs((prevState) => [...prevState, gif])
  }

  

  return (
    <div className="bg-slate-800">
      <header className="container mx-auto px-4 py-6 flex justify-center">
        <h1 className="font-bold text-slate-100 text-3xl">Gifs gallery 👾</h1>
      </header>
      <main className="container mx-auto px-4 py-6 h-screen ">
        <UploadForm onSubmit={handleFileUpload}/>
        <GifsList gifs={gifs} />
      </main>
    </div>
  )
}

export default App
