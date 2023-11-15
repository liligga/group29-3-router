import { useParams, useNavigate } from "react-router-dom"

const OnePostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <p>OnePostPage ID: {id}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}
export default OnePostPage