import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "../Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import Folder from "./Folder"
import File from "./File"
import { useParams, useLocation } from "react-router-dom"
import AddFolderButton from "./AddFolderButton"
import useFolder from "../../hooks/useFolder"
import AddFileButton from "./AddFileButton"

export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(folder => (
              <div
                key={folder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={folder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles.map(file => (
              <div key={file.id} style={{ maxWidth: "250px" }} className="p-2">
                <File file={file} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}
