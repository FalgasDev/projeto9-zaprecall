import styled from "styled-components"

export default function Footer() {
  return (
    <ContainerFooter>
      <p>0/4 CONCLUÍDOS</p>
    </ContainerFooter>
  )
}

const ContainerFooter = styled.div`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -4px 6px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #333333;
  }
`