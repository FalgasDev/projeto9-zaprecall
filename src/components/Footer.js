import styled from "styled-components"
import cards from './Deck';
import almost from '../assets/icone_quase.png'
import wrong from '../assets/icone_erro.png'

export default function Footer({counter, footerIcon}) {
  return (
    <ContainerFooter data-test="footer">
      <p>{counter}/{cards.length} CONCLUÍDOS</p>
      <div>
        {footerIcon.map(a => <img data-test={a === wrong ? "no-icon" : a === almost ? "partial-icon" : "zap-icon"} src={a} alt=''/>)}
      </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #333333;
    margin-bottom: 6px;
  }
  img {
    margin-right: 5px;
  }
  
`