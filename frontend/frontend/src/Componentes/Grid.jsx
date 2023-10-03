import { FaTrash,FaEdit } from 'react-icons/fa'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import React from 'react'
import axios from 'axios'
const Table = styled.table`
width:100%;
background-color:#fff;
padding:20px;
box-shadow:0px 0px 5px #ccc;
border-radius:5px;
max-width:800px;
margin:20px auto;
word-break:break-all;

`
const Thead = styled.thead``
const Tr = styled.tr` `
const Th = styled.th`
text-align:start;
border-bottom:inset;
padding-bottom:5px;

@media(max-width:500px){
    ${(props) => props.onlyWeb && "display:none;"}
}
`
const Tbody = styled.tbody`
width:100%;
heigth:100px;

`
const Td = styled.td`
 padding-top:15px;
 margin:2px;
 text-align:${(props) => (props.alignCenter ? "center" : "start")}
 width:${(props) => (props.width ? props.width : "auto")}

 @media(max-width:500px){
    ${(props) => props.onlyWeb && "display:none"}
 }
 `
function Grid({ users,setUsers,setOnEdit }) {
const handleEdit=(item)=>{
setOnEdit(item  )
}
    const handleDelete=async(id)=>{
        await axios
    
        .delete("http://localhost:8800/"+id) 
        .then(({data})=>{
            const newArray=users.filter((user)=>user.id!==id)
            setUsers(newArray)
            toast.success(data)
        })
        .catch(({data})=>toast.error(data))
        setOnEdit(null)
        
    }

    const Grid=({users,setUsers,setOnEdit})=>{
        const handleEdit=(item)=>{
            setOnEdit(item)
        }
    }
    return (
        <>
       
            <Table>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        <Th>Fone</Th>
                        
                        <Th> </Th>
                        <Th></Th>
                    </Tr>
                    
                </Thead>
                <Tbody>
               
                    {users.map((item, i) => {
                    return (
                        <Tr key={i}>
                          
                            <Td width="30%">{item.nome}</Td>
                            <Td width="30%">{item.email}</Td>
                            <Td width="30%">{item.fone}</Td>

                            <Td width="5%"><FaEdit onClick={()=>{handleEdit(item)}} ></FaEdit ></Td>
                            <Td width="5%"><FaTrash  onClick={()=>{handleDelete(item.id)}}></FaTrash ></Td>
                        </Tr>)

                    })}
                </Tbody>
            </Table>
        </>
    )
}
export default Grid