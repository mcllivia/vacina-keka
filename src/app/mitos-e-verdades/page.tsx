// src/app/mitos-e-verdades/page.tsx
import React from 'react';

const MitosVerdadesPage: React.FC = () => {
  return (
    <div>
      <h1>Mitos e Verdades sobre a Vacinação</h1>

      <div className="alert alert-mito">
        <h3>Mito: As vacinas causam autismo.</h3>
        <p style={{ marginTop: '5px' }}>
          **Falso.** Diversos estudos científicos amplos e confiáveis demonstraram que não há nenhuma ligação entre vacinas e o desenvolvimento de autismo.
        </p>
      </div>
      
      <div className="alert alert-verdade">
        <h3>Verdade: Doenças erradicadas podem voltar.</h3>
        <p style={{ marginTop: '5px' }}>
          **Correto.** A vacinação deve ser mantida para evitar que doenças como o Sarampo, que já foram eliminadas, voltem a circular devido à baixa cobertura vacinal.
        </p>
      </div>

      <div className="alert alert-mito">
        <h3>Mito: É melhor pegar a doença do que tomar a vacina.</h3>
        <p style={{ marginTop: '5px' }}>
          **Falso.** Contrair a doença pode levar a complicações graves, hospitalização e até morte. A vacina é um meio seguro de gerar imunidade.
        </p>
      </div>
    </div>
  );
};

export default MitosVerdadesPage;