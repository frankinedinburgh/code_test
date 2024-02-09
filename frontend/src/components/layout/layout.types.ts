import { PropsWithChildren, ReactNode } from 'react'

export interface ILayoutProps extends PropsWithChildren {
  sidebar: ReactNode,
  classNames?: string
}
