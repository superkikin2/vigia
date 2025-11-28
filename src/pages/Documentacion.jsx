import SuggestIA from '../components/SuggestIA';
import '../styles/Documentacion.css';

import DocSearch from '../components/forms/DocSearch.jsx';

export default function Documentacion() {
  return (
    <div>
      <h2>Documentacion</h2>
      <p>Bienvenido al panel de Documentacion del proyecto.</p>
      <SuggestIA />
      <DocSearch
        placeholder="Buscar archivos..."
        categories={['Todos', 'Planos', 'Especificaciones', 'Actas', 'Informes', 'Presentaciones']}
        onSearch={(value) => console.log('Buscando:', value)}
        onCategoryChange={(category) => console.log('Categoría:', category)}
        onViewChange={(view) => console.log('Vista:', view)}
        onSortChange={() => console.log('Ordenar')}
      />
    </div>
  );
}