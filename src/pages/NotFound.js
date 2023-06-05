import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Fusce aliquet libero et vulputate efficitur. Nunc ultrices urna id nulla pellentesque facilisis. Etiam dapibus orci eu tellus rhoncus facilisis. Integer sagittis enim quis facilisis interdum. Phasellus ultrices nunc in tellus rutrum consequat. Fusce sit amet ante finibus, sodales felis ut, varius est. Vivamus varius nulla eget ante euismod porta vel eget quam.</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
