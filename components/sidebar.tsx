import React from 'react'
import classNames from 'classnames'
import { useState } from 'react'
import About from '@/pages/about'
import CollapseIcon from './icons/collapseIcon'

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);
  
  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-black text-white justify-between flex-col",
    {
        ['w-80']: !toggleCollapse,
        ['w-20']: toggleCollapse
    }
  );

  const CollapseIconClasses = classNames("absolute right-0",
  {
    "rotate-180": toggleCollapse,
  }
  );

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible)
  }

  return (
    <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <About /> 
            <span className={classNames('mt-2 text-lg font-medium text-gray-50', { hidden: toggleCollapse})}>
              About Me
            </span>
            </div>
            {isCollapsible && (
          <button className={CollapseIconClasses}>
            <CollapseIcon />
          </button>
            )};
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Sidebar