// src/app/noticias/page.tsx
import React from 'react';

const NoticiasPage: React.FC = () => {
  return (
    <div>
      <h1>Informações e Notícias sobre Vacinação</h1>
      
      <div className="card">
        <h3>Nova Campanha Contra a Gripe</h3>
        <p style={{ fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
          Publicado em: 01/10/2025
        </p>
        <p>
          Postos de saúde abrem neste fim de semana para o dia D. Priorize a sua proteção no inverno!
        </p>
      </div>

      <div className="card">
        <h3>Segurança das Vacinas Pediátricas Confirmada</h3>
        <p style={{ fontSize: '0.9em', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
          Publicado em: 25/09/2025
        </p>
        <p>
          Estudos recentes em universidades renomadas comprovam a segurança e a alta eficácia das vacinas para crianças.
        </p>
      </div>
    </div>
  );
};

export default NoticiasPage;