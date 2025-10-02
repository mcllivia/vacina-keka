// src/app/page.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Importância Vital da Vacinação</h1>
      <p style={{ fontSize: '1.1em', textAlign: 'center', color: '#555' }}>
        A vacinação é o pilar da saúde pública moderna.
      </p>

      <div className="card highlight">
        <h2>Imunidade de Rebanho</h2>
        <p style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>
          Vacinar-se é um ato de responsabilidade social.
        </p>
        <p>
          Quando a maioria das pessoas se vacina, a propagação de doenças é interrompida, protegendo aqueles que não podem ser imunizados, como bebês e pessoas com imunodeficiência.
        </p>
      </div>
    </div>
  );
};

export default HomePage;