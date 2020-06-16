import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Wrapper, Container } from './styles';

import logo from '../../assets/images/logo.svg';
 
export default function Home() {
  return (
    <Wrapper>
      <Container>
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </Container>
    </Wrapper>
  )
};