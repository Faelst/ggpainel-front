import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Badge,
  Button,
  Alert,
  Card,
  Accordion,
} from "react-bootstrap";
import NavbarComponent from "../../components/Navbar";
import DatePickerComponent, {
  getDateComponent,
} from "../../components/DatePicker";
import Swal from "sweetalert2";

import jsonSelectGamesTypes from "../../jsonRequest/inputOptions.json";
import jsonTiketsValues from "../../jsonRequest/ticketsPrice.json";
import jsonNumberOfPlayers from '../../jsonRequest/numberOfPlays.json'

let tournamentData = {
  game: "",
  ticket: "0",
  numberPlayers: "0",
  date: "",
};

//WIP ALFA
async function selectGame(selectGamesTypes) {
  const { value: game } = await Swal.fire({
    title: "Selecione um jogo:",
    input: "select",
    inputOptions: selectGamesTypes,
    inputPlaceholder: "Lista de Jogos",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
        } else {
          resolve("VOCE PRECISA ESCOLHER UM JOGO)");
        }
      });
    },
  });

  if (game) {
    Swal.fire(`VOCÊ SELECIONOU O JOGO: ${game}`);
    tournamentData.game = game;
    changeCardGame(game)
  }
}

async function changeCardGame(game){
  const cardGame = document.getElementById('card-game')
  cardGame.innerHTML = `Jogo Selecionado: ${game}`
}

// WIP BETA
async function selectValue(selectTiketValues) {
  const { value: ticketValue } = await Swal.fire({
    title: "Selecione o valor do Torneio:",
    input: "select",
    inputOptions: selectTiketValues,
    inputPlaceholder: "Lista de Valores",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
        } else {
          resolve("VOCE PRECISA INFORMAR O VALOR DO INGRESSO)");
        }
      });
    },
  });

  if (ticketValue) {
    Swal.fire(`Valor do ingresso: ${ticketValue} Reais`);
    tournamentData.ticket = ticketValue;
    changePrice(ticketValue)
  }
}

async function changePrice(price){
  const cardPrice = document.getElementById('card-price')
  cardPrice.innerHTML = `Valor de incrição: R$${price} p/ PLAYER`
}

//WIP BETA
async function selectPlayers(selectNumberOfPlayers) {
  const { value: numberPlayers } = await Swal.fire({
    title: "Selecione a quantidade de participantes:",
    input: "select",
    inputOptions: selectNumberOfPlayers,
    inputPlaceholder: "Quantidade de participantes",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
        } else {
          resolve("VOCE PRECISA ESCOLHER A QUANTIDADE DE PARTICIPANTES)");
        }
      });
    },
  });

  if (numberPlayers) {
    Swal.fire(`Participarão: ${numberPlayers} Jogadores`);
    tournamentData.numberPlayers = numberPlayers;
    changePlayes(numberPlayers)
  }
}

async function changePlayes(players){
  const cardPlayer = document.getElementById('card-players')
  cardPlayer.innerHTML = `Quatidade de PLAYERS: ${players}`
}

const TournamentPage = () => {
  const [selectGameTypes, setSelectGameTypes] = useState({});
  const [selectTiketValues, setSelectTiketValues] = useState({})
  const [selectNumberOfPlayers , setNumberOfPlayers] = useState({})

  useEffect(() => {
    setSelectGameTypes(jsonSelectGamesTypes);
    setSelectTiketValues(jsonTiketsValues);
    setNumberOfPlayers(jsonNumberOfPlayers)
  }, []);

  return (
    <Container>
      <NavbarComponent />

      <Alert
        variant="warning"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        ⚠ ATENÇÃO! TODOS OS PASSOS SÃO OBRIGATÓRIOS, E SÓ PODERÃO SER ENVIADOS
        APÓS PREENCHIDOS ⚠
      </Alert>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle id="card-game" as={Button} variant="link" eventKey="0">
              <Badge variant="info">PASSO 1 : </Badge> ESCOLHER UM JOGO
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <span
                onClick={() => {selectGame(selectGameTypes)}}
                style={{ color: "blueviolet" }}
              >
                Selecionar Platarforma/Jogo
              </span>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle id="card-price" as={Button} variant="link" eventKey="1">
              <Badge variant="info">PASSO 2 : </Badge> VALOR DO INGRESSO
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <span onClick={() => selectValue(selectTiketValues)} style={{ color: "blueviolet" }}>
                Clique aqui para selecionar o valor do ingresso do torneio.{" "}
              </span>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle id="card-players" as={Button} variant="link" eventKey="2">
              <Badge variant="info">PASSO 3 : </Badge> NÚMERO DE PARTICIPANTES
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              <span onClick={() => selectPlayers(selectNumberOfPlayers)} style={{ color: "blueviolet" }}>
                Clique aqui para selecionar o total de jogadores que
                participarão do torneio.{" "}
              </span>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <br></br>

      <div style={{ textAlign: "center" }}>
        {" "}
        <Badge variant="info">PASSO 4 : </Badge> Data do evento:{" "}
        <DatePickerComponent />{" "}
      </div>

      <br></br>

      <div style={{ textAlign: "center" }}>
        {" "}
        <Badge variant="info">PASSO 5 : </Badge>{" "}
        <Button variant="success">Verificar informações</Button>{" "}
      </div>

      <br></br>

      <Button onClick={() => console.log(getDateComponent)}>
        {" "}
        Imprimir Data{" "}
      </Button>
    </Container>
  );
};

export default TournamentPage;
