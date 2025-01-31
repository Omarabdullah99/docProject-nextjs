import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory= path.join(process.cwd(), "docs")

export function getDocument(){
    // console.log("directiory",postsDirectory)
    const fileNames= fs.readdirSync(postsDirectory)
    // console.log(fileName)
    const allDocuement= fileNames.map((fileName)=>{
        const id= fileName.replace(".md", "")
        const fullPath=path.join(postsDirectory,fileName)
        // console.log('fullpath',fullPath)
        const fileContents= fs.readFileSync(fullPath,'utf-8')
        // console.log('filecontents',fileContents)
        const matterResut= matter(fileContents)
        // console.log('matterResult',matterResut)
        return{
            id,
            ...matterResut.data
        }
    })

    return allDocuement.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    });
}