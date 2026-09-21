import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContentPage from './pages/ContentPage'
import Editor from './pages/Editor'
import AboutContent from './content/about.mdx'
import EventsContent from './content/events.mdx'
import JoinContent from './content/join.mdx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<ContentPage eyebrow="Our story" title="About us"><AboutContent /></ContentPage>} />
      <Route path="/events" element={<ContentPage eyebrow="Gather with us" title="Events"><EventsContent /></ContentPage>} />
      <Route path="/join" element={<ContentPage eyebrow="Pull up a chair" title="Join us"><JoinContent /></ContentPage>} />
      <Route path="/edit" element={import.meta.env.DEV ? <Editor /> : <Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
