// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function joinPaths(...paths: any[]){
    return paths
    .map(path => path.trim().replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/')
    .replace(/\/+/g, '/')
}