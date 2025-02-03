import { getDocumentContent } from '@/lib/doc';
import React from 'react'

const ContentDisplay =async ({id}) => {
    const documentContent = await getDocumentContent(id);
    console.log('docuemntContent',documentContent)
  return (
    <div>ContentDisplay</div>
  )
}

export default ContentDisplay