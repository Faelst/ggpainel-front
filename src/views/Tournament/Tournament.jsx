import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge, Button, Alert, Card, Accordion } from 'react-bootstrap'
import NavbarComponent from '../../components/Navbar'
import DatePickerComponent, { getDateComponent } from '../../components/DatePicker'
import Swal from 'sweetalert2'

let tournamentData = {
    game: "",
    ticket: "0",
    numberPlayers: "0",
    date: ""
}

//WIP ALFA
async function selectGame() {

   


    const { value: game } = await Swal.fire({
        title: 'Selecione um jogo:',
        input: 'select',
        inputOptions: {
            'XONE': {
                FIFA21_XONE: 'FIFA 21',
                R6SIEGE_XONE: 'RAINBOW SIX SIEGE'
            },
            'PS4': {
                FIFA21_XONE: 'FIFA 21',
                R6SIEGE_XONE: 'RAINBOW SIX SIEGE'
            },

        },
        inputPlaceholder: 'Lista de Jogos',
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value) {
                    resolve()
                } else {
                    resolve('VOCE PRECISA ESCOLHER UM JOGO)')
                }
            })
        }
    })

    if (game) {
        Swal.fire(`VOCÊ SELECIONOU O JOGO: ${game}`)
        tournamentData.game = game
    }

}

// WIP BETA
async function selectValue() {

    const { value: ticketValue } = await Swal.fire({
        title: 'Selecione o valor do Torneio:',
        input: 'select',
        inputOptions: {
            'VALORES (R$)': {
                5: '5 R$',
                15: '15 R$',
                30: '30 R$',
                50: '50 R$',
                100: '100 R$'
            }
        },
        inputPlaceholder: 'Lista de Valores',
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value) {
                    resolve()
                } else {
                    resolve('VOCE PRECISA INFORMAR O VALOR DO INGRESSO)')
                }
            })
        }
    })

    if (ticketValue) {
        Swal.fire(`Valor do ingresso: ${ticketValue} Reais`)
        tournamentData.ticket = ticketValue
    }

}

//WIP BETA
async function selectPlayers() {

    const { value: numberPlayers } = await Swal.fire({
        title: 'Selecione a quantidade de participantes:',
        input: 'select',
        inputOptions: {
            'Quantidade': {
                2: "2 Participantes",
                4: "4 Participantes",
                8: "8 Participantes",
                16: "16 Participantes"
            },

        },
        inputPlaceholder: 'Quantidade de participantes',
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value) {
                    resolve()
                } else {
                    resolve('VOCE PRECISA ESCOLHER A QUANTIDADE DE PARTICIPANTES)')
                }
            })
        }
    })

    if (numberPlayers) {
        Swal.fire(`Participarão: ${numberPlayers} Jogadores`)
        tournamentData.numberPlayers = numberPlayers
    }

}

const TournamentPage = () => {
    return (
        <Container>
            <NavbarComponent />

            <Alert variant="warning" style={{ textAlign: "center", marginTop: "20px" }}>
                ⚠ ATENÇÃO! TODOS OS PASSOS SÃO OBRIGATÓRIOS, E SÓ PODERÃO SER ENVIADOS APÓS PREENCHIDOS ⚠
            </Alert>

            <Accordion>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Badge variant="info">PASSO 1 : </Badge> ESCOLHER UM JOGO
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body> <span onClick={selectGame} style={{ color: "blueviolet" }} >Clique aqui para escolher a plataforma e o jogo em que será criado o torneio.</span> </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <Badge variant="info">PASSO 2 : </Badge> VALOR DO INGRESSO
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body> <span onClick={selectValue} style={{ color: "blueviolet" }} >Clique aqui para selecionar o valor do ingresso do torneio. </span> </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            <Badge variant="info">PASSO 3 : </Badge> NÚMERO DE PARTICIPANTES
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body> <span onClick={selectPlayers} style={{ color: "blueviolet" }} >Clique aqui para selecionar o total de jogadores que participarão do torneio. </span> </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <br></br>

            <div style={{textAlign: "center"}}> <Badge variant="info">PASSO 4 : </Badge> Data do evento: <DatePickerComponent /> </div>

            <br></br>

            <div style={{textAlign: "center"}}> <Badge variant="info">PASSO 5 : </Badge> <Button variant="success">Verificar informações</Button> </div>

            <br></br>

            <Button onClick={ ()=> console.log(getDateComponent) }> Imprimir Data </Button>

        </Container>
    )
}



export default TournamentPage