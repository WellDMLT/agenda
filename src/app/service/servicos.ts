import axios from "axios";

export async function GettAllServicos() {
  const servicos = await axios.get("/api/servicos");
  const data = await servicos.data;
  return data;
}
