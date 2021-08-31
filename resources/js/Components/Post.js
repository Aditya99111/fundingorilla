import { Link } from "@inertiajs/inertia-react"
import "../../css/explore.css"
function Post({
  image,
  heading,
  description,
  amount,
}) {
  return (
    <div className="post">
      <div className="productimg">
        <p>🚀10%</p>
        <h6>10000$</h6>
      </div>
      <div className="post__heading">
        <h1>{heading}</h1>
      </div>
      <div className="desc">{description}</div>
<Link href="details"><button className="button">Details</button></Link>
    </div>
  )
}
export default Post