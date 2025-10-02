// src/app/calendario/page.tsx
import React from 'react';

const CalendarioPage: React.FC = () => {
  return (
    <div>
      <h1>Calendário Nacional de Vacinação</h1>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Tabela simplificada. Consulte um profissional de saúde para o calendário completo.
      </p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Vacina</th>
            <th>Idade Recomendada</th>
            <th>Protege Contra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BCG</td>
            <td>Ao nascer</td>
            <td>Tuberculose (formas graves)</td>
          </tr>
          <tr>
            <td>Hepatite B</td>
            <td>Ao nascer</td>
            <td>Hepatite B</td>
          </tr>
          <tr>
            <td>Tríplice Viral</td>
            <td>12 meses</td>
            <td>Sarampo, Caxumba e Rubéola</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarioPage;