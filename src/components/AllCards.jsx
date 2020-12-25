import React from 'react'
import CardComponent from './Card'
import { Row } from 'react-bootstrap'

const AllCardsComponent = () => {
    return (
        <Row className="row justify-content-center">
            <CardComponent img={"games"} title={"EDITAR JOGOS"} text={"Faça alterações na lista pública de jogos, altere capas, crie novos jogos ou remova-os."} ></CardComponent>
            <CardComponent img={"tournament"} title={"GERENCIAR TORNEIOS"} text={"Crie ou visualize torneios."} ></CardComponent>
            <CardComponent img={"money"} title={"FINANCEIRO"} text={"Veja os últimos comprovantes de pagamento."} ></CardComponent>
            <CardComponent img={"support"} title={"SUPORTE"} text={"Veja todas as mensagens de suporte enviadas pelos usuários."} ></CardComponent>
            <CardComponent img={"report"} title={"RELATÓRIO"} text={"Veja o relatório geral de todo seu sistema."} ></CardComponent>
            <CardComponent img={"settings"} title={"CONFIGURAÇÕES"} text={"Configurações gerais para o sistema."} ></CardComponent>
        </Row>
    )
}

export default AllCardsComponent