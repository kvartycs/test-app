import axios from 'axios'
import React from 'react'
import { useState } from 'react'
interface InfoProps {
  editing: boolean
  handleDBClick: (e: any) => void
  obj: {
    margin?: number
    rowName: string
    parentId?: number
    child?: []
    id: number
  }
}

const Info = ({ obj, handleDBClick, editing }: InfoProps) => {
  const onDeleteClick = async () => {
    const res = await axios.delete(
      `http://185.244.172.108:8081/v1/outlay-rows/entity/33241/row/${obj.id.toString()}/delete`
    )
    return res
  }
  console.log(obj.id)

  const { parentId } = obj

  return (
    <>
      <div className="tree-left-inner" onDoubleClick={handleDBClick}>
        <div className="images">
          <img
            style={{ marginLeft: `${obj.margin}px` }}
            src="./assets/img/file.svg"
            alt=""
          />
          <img
            onClick={onDeleteClick}
            hidden={!editing}
            src="./assets/img/trash.svg"
            alt=""
          />
        </div>
        <p suppressContentEditableWarning={true} contentEditable={editing}>
          {obj.rowName}
        </p>
      </div>
    </>
  )
}

export default Info
