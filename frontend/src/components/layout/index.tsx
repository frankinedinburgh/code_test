import classname from "classnames"
import type { FC } from 'react'
import type { ILayoutProps } from './layout.types'
import { LayoutCSS } from './css'

const Layout: FC<ILayoutProps> = ({ children, sidebar, classNames }) => {
  return (
    <div className={classname(classNames, {
      [LayoutCSS.Container]: !classNames
    })}>
      <div className={LayoutCSS.Sidebar}>{sidebar}</div>
      <div className={LayoutCSS.MainView}>{children}</div>
    </div>
  )
}

export default Layout
