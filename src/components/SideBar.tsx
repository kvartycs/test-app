import React from 'react'

const SideBar = () => {
  const docs = [
    'По проекту',
    'Объекты',
    'РД',
    'МТО',
    'СМР',
    'График',
    'МиМ',
    'Рабочие',
    'Капвложения',
    'Бюджет',
    'Финансирование',
    'Панорамы',
    'Камеры',
    'Поручения',
    'Контрагенты',
  ]
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="">
          <p>Название проекта</p>
          <span>Абревиатура</span>
        </div>
        <div className="">
          <img src="./assets/img/arrow down.svg" alt="" />
        </div>
      </div>
      <div className="sidebar-middle">
        <ul>
          {docs.map((doc, index) => (
            <li className="docs" key={index}>
              <img src="./assets/img/blocks.svg" alt="" />
              <p>{doc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
