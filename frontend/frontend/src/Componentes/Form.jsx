import React, { useRef,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
const FormConteiner= styled.form `
display:flex;
align-items:flex-end;
gap:10px;
flex-wrap:wrap;
backgroud-color:#fff;
padding:20px;
box-shadow:0px 0px 5px #ccc;
border-radius:5px;

`;
const InputArea= styled.div`
display:flex;
flex-direction: column;

`;

const Input= styled.input`
width:120px;
padding:0 10px;
border:1px solid #bbb;
border-radius:5px;
heigth:42px;

`;

const Button = styled.button`
padding: 10px;
cursor:pointer;
border-radius:5px;
border:none;
background-color:#2c73d2;
color:white;
heigth:42px;

`;

const Label= styled.label=``

const Form=({onEdit,setOnEdit,getUsers})=>{
    const ref= useRef()
    useEffect(()=>{
      if(onEdit){
        const user=ref.current
        user.nome.value=onEdit.nome;
        user.email.value=onEdit.email;
        user.fone.value=onEdit.fone;
        user.data_nascimento.value=onEdit.data_nascimento;
      }
    },[onEdit])

const handleSubmit =async(e)=>{
  e.preventDefault()
  const user = ref.current
if(!user.nome.value||
  !user.email.value||
  !user.fone.value||
  !user.data_nascimento.value){
    return toast.warn("Preencha todos os campos")
  }

  if(onEdit){
    await axios
    .put("http://localhost:8800/"+onEdit.id,{
      nome:user.nome.value,
      email:user.email.value,
      fone:user.fone.value,
      data_nascimento:user.data_nascimento.value
    })
    .then(({data})=>toast.success(data))
    .catch(({data})=>toast.error(data))
  }

  else{
    await axios.post("http://localhost:8800",{
      nome:user.nome.value,
      email:user.email.value,
      fone:user.fone.value,
      data_nascimento:user.data_nascimento.value
    })
    .then(({data})=>toast.success(data))
    .catch(({data})=>toast.error(data))
    
  }
  user.nome.value=""
  user.email.value=""
  user.fone.value=""
  user.data_nascimento.value=""
  setOnEdit(null)
  getUsers()
}
    return(
        <>
        
       
        <FormConteiner ref={ref} onSubmit={handleSubmit} >
           <InputArea>
         <label>Nome</label>
         <Input name="nome"></Input>
          
           </InputArea>

           <InputArea>
         <label>E-mail</label>
         <Input name="email" type="email"></Input>
          
           </InputArea>

           <InputArea>
         <label>Telefone</label>
         <Input name="fone"></Input>
          
           </InputArea>
           <InputArea>
         <label>Data de nascimento</label>
         <Input name="data_nascimento" type="date"></Input>
          
           </InputArea>

            <Button type="submit">SALVAR</Button>
           
        </FormConteiner>
       
        </>
    )
}
export default Form;