import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

export default function Folder({ folder }) {
  return (
    <Link
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder }
      }}
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FontAwesomeIcon icon={faFolder} className="mr-2" />
      {folder.name}
    </Link>
  )
}
