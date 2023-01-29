import { useParams } from "react-router-dom";
import "./style/detail.scss";
import "./style/style.css";

export default function Details(props) {
  const parm = useParams();
  console.log(parm);
}
