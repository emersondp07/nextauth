import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return <h1>Logado com sucesso com seu e-mail: {user?.email}</h1>;
}
