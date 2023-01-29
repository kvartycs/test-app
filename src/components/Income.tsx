import React from 'react'

interface PropsIncome {
  editing: boolean
  handleDBClick: (e: any) => void
  obj: {
    id: number
    total: number
    salary: number
    equipmentCosts: number
    estimatedProfit: number
    overheads: number
  }
}

const Income = ({ obj, handleDBClick, editing }: PropsIncome) => {
  return (
    <>
      <div className="tree-right-inner" onDoubleClick={handleDBClick}>
        <p suppressContentEditableWarning={true} contentEditable={editing}>
          {obj.salary}
        </p>
        <p suppressContentEditableWarning={true} contentEditable={editing}>
          {obj.equipmentCosts}
        </p>
        <p suppressContentEditableWarning={true} contentEditable={editing}>
          {obj.overheads}
        </p>
        <p suppressContentEditableWarning={true} contentEditable={editing}>
          {obj.estimatedProfit}
        </p>
      </div>
    </>
  )
}

export default Income
