import { useParams } from "react-router-dom"

const OnePostPage = () => {
  const { id } = useParams()
 
  return (
    <div>OnePostPage ID: {id}</div>
  )
}
export default OnePostPage