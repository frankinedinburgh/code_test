import Layout from "@components/layout"
import TableOfContents from "@components/toc"
import type { FC } from "react"
import Panel from "@components/panel"

const MainView: FC = () => (
  <Layout sidebar={<TableOfContents />}>
    <Panel />
  </Layout>
)

export default MainView
