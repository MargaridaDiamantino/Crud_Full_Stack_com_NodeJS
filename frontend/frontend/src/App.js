

import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from "react-toastify"
import Global from './styles/global';
import styled from 'styled-components';

import Grid from './Componentes/Grid'
import Form from "./Componentes/Form";
import { useState, useEffect } from "react";
import axios from "axios"
const Container = styled.div`
width:100%;
max-width:800px;
margin-top:20px;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;

`
const Title = styled.h2`display:flex;`

function App() {

  const [user, setUser] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getusers = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setUser(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
      console.log(res.data)
    }
    catch (error) { toast.error(error) }
  }
  useEffect(() => {
    getusers()

  }, [setUser])
  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit}setOnEdit={setOnEdit}getUsers={getusers}></Form>
        <Grid users={user}setUsers={setUser} setOnEdit={setOnEdit}></Grid>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}></ToastContainer>
      <Global />
    </>
  );
}

export default App;
