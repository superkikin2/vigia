import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store principal de la aplicación
 * Gestiona el contexto de ejecución global
 */
const useAppStore = create(
  persist(
    (set, get) => ({
      // ============ PROYECTO SELECCIONADO ============
      projects: [
        { id: 10, name: 'Proyecto F110' },
        { id: 20, name: 'Proyecto S80' },
        { id: 30, name: 'Proyecto F100' },
      ],
      selectedProjectId: 30, // ID del proyecto seleccionado por defecto

      // Obtener el proyecto seleccionado
      getSelectedProject: () => {
        const state = get();
        return state.projects.find(p => p.id === state.selectedProjectId) || null;
      },

      // Cambiar proyecto seleccionado
      setSelectedProject: (projectId) => set({ selectedProjectId: projectId }),

      // ============ OTROS ESTADOS FUTUROS ============
      // Aquí se pueden añadir más estados globales como:
      // - usuario autenticado
      // - preferencias de UI
      // - filtros globales
      // - etc.
    }),
    {
      name: 'vigia-app-storage', // nombre en localStorage
      partialize: (state) => ({ 
        selectedProjectId: state.selectedProjectId,
      }), // solo persistir estos campos
    }
  )
);

export default useAppStore;
