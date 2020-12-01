import React from 'react'
import {
  Grid
} from '@material-ui/core';

export default function Opcoes(){
  return(
    <Grid container spacing={1}>
    <Grid item sm={12} xs={12}>
    <h1 align="center">
        Introdução à marca
        </h1><h2>Focado na ideia de empreender com a nova realidade que é a indústria 4.0 que reforçou e se concretizou com a pandemia.
      A Agro GP vem, com seu know how, alavancar a rentabilidade dos pequenos e médios produtores por meio de estratégias de mercados condizentes com esta nova realidade no agronegócio.</h2>
      <h1 align="center">Publico alvo</h1>
      <h2>
      O público alvo¸ inicialmente, serão os pequenos e médios produtores rurais. Isso pela caracterização do status na região em que a consultoria Agro GP está inserida.
      </h2>
    </Grid>
    </Grid>
  )
}