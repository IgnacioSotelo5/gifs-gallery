import { Gif } from "../App";

export function GifsList ({gifs}: {gifs: Gif[]}){
  return(
    <ul className="mt-4 grid grid-cols-responsive gap-6 min-w-full">
          {
            gifs.map((gif) => (
              <li className="h-32 w-44" key={gif.id}>
                <img 
                className="rounded-sm w-full h-full"
                src={gif.url}
                alt={gif.alt}
                />
              </li>
            ))
          }
        </ul>
  )  
}