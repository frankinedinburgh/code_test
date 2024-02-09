import Layout from "@components/layout"
import TableOfContents from "@components/toc"
import type { FC } from "react"
import { useAppContext } from "../../App.provider"
import Panel from "@components/panel"
import "./main.css"

const MainView: FC = () => {
  const { data } = useAppContext()

  return (
    <Layout sidebar={<TableOfContents />}>
      <Panel components={data} />
      {/* <ContentView selectedComponent={selectedComponent} /> */}
    </Layout>
  )
}

export default MainView
