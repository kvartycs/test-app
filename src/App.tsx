import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Income from './components/Income'
import Info from './components/Info'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Columns from './components/Columns'

function App() {
  const [items, setItems] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [level, setLevel] = useState(0)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const getFiles = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(
          'http://185.244.172.108:8081/v1/outlay-rows/entity/33241/row/list'
        )
        res.data.map((obj: { total: number; child: any }) => {
          if (obj.total) {
            obj.child.map((obj: { margin: string }) => (obj.margin = '15'))

            res.data.push(...obj.child)
          }
        })
        res.data.sort((a: any, b: any) => a.id - b.id)
        setItems(res.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getFiles()
  }, [])
  const handleDBClcik = (e: any) => {
    console.log(e)
    setEditing(true)
  }

  const onKeyDown = (e: any) => {
    setEditing(false)
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="wrapper">
        <SideBar></SideBar>
        <div className="files">
          <div className="files-top">
            <p>Строительно-монтажные работы</p>
          </div>
          <div className="files-middle">
            <Columns></Columns>
            <div className="tree" onKeyDown={(e) => onKeyDown(e)}>
              <div className="tree-left">
                {!isLoading &&
                  items.map((obj) => (
                    <Info
                      editing={editing}
                      handleDBClick={(e) => handleDBClcik(e)}
                      key={obj.id}
                      obj={obj}
                    ></Info>
                  ))}
              </div>
              <div className="tree-right">
                {!isLoading &&
                  items.map((obj) => (
                    <Income
                      editing={editing}
                      handleDBClick={(e) => handleDBClcik(e)}
                      key={obj.id}
                      obj={obj}
                    ></Income>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
