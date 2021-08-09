import React from 'react';

const Header = () => {
  var d = new Date();
  var dias = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];

  var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return (
    <div className="Header">
      <h1>To Do List ✏️</h1>
      <h2>
        {d.getDate()} de {meses[d.getMonth()]} de {d.getFullYear()} (
        {dias[d.getDay()]})
      </h2>
    </div>
  );
};

export default Header;
