import React from 'react'
import CardComponent from './Card'
import { Row } from 'react-bootstrap'

const AllCardsComponent = () => {

    
    return (
        <Row className="row justify-content-center">
            <CardComponent img={"games"} title={"EDITAR JOGOS"} text={"Faça alterações na lista pública de jogos, altere capas, crie novos jogos ou remova-os."} route={"games"} ></CardComponent>
            <CardComponent img={"tournament"} title={"GERENCIAR TORNEIOS"} text={"Crie ou visualize torneios."} route={"tournament"} ></CardComponent>
            <CardComponent img={"money"} title={"FINANCEIRO"} text={"Veja os últimos comprovantes de pagamento."} route={"financeiro"} ></CardComponent>
            <CardComponent img={"support"} title={"SUPORTE"} text={"Veja todas as mensagens de suporte enviadas pelos usuários."} route={"support"} ></CardComponent>
            <CardComponent img={"report"} title={"RELATÓRIO"} text={"Veja o relatório geral de todo seu sistema."} route={"report"} ></CardComponent>
            <CardComponent img={"settings"} title={"CONFIGURAÇÕES"} text={"Configurações gerais para o sistema."} route={"settings"} ></CardComponent>
        </Row>
    )
}

export default AllCardsComponent