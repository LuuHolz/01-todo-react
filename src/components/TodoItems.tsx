import { BsXLg } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const CardsTodo = () => {
  return (
    <div>
      <li>
        <span><BsXLg /></span>
          <p>Text{}</p>
        <span><BsCheck2 /></span>
      </li>
    </div>
  )
}

export { CardsTodo }