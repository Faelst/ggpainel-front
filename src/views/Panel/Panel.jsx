import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Navbar, Col } from 'react-bootstrap'

import CardComponent from '../../components/Card'

const PanelPage = () => {
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img alt="" src="/assets/gg.png" width="30" height="30" className="d-inline-block align-top" /> PAINEL ADMINISTRATIVO
                </Navbar.Brand>
            </Navbar>
            <Row>
                <CardComponent img={"games"} title={"EDITAR JOGOS"} text={"Faça alterações na lista pública de jogos, altere capas, crie novos jogos ou remova-os."} ></CardComponent>
                <CardComponent img={"tournament"} title={"GERENCIAR TORNEIOS"} text={"Crie ou visualize torneios."} ></CardComponent>
                <CardComponent img={"money"} title={"FINANCEIRO"} text={"Veja os últimos comprovantes de pagamento."} ></CardComponent>
                <CardComponent img={"support"} title={"SUPORTE"} text={"Veja todas as mensagens de suporte enviadas pelos usuários."} ></CardComponent>
                <CardComponent img={"report"} title={"RELATÓRIO"} text={"Veja o relatório geral de todo seu sistema."} ></CardComponent>
                <CardComponent img={"settings"} title={"CONFIGURAÇÕES"} text={"Configurações gerais para o sistema."} ></CardComponent>
            </Row>
        </Container>
    )
}

export default PanelPage