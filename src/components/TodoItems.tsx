import { BsXLg } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const CardsTodo = () => {
  return (
    <div className="containerTodoItem">
      <li className="liTodoItem">
        <span className="iconCheck"><BsCheck2 /></span>
          <p>Text{}</p>
        <span className="iconDelete">< BsXLg/></span>
      </li>
    </div>
  )
}

export { CardsTodo }