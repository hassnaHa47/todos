import axios from 'axios';
// axiosInstance.js


const instance = axios.create({
  baseURL: 'http://localhost:3000', // Remplacez ceci par l'URL de votre backend
});



class BackendService {
  // Méthode pour retourner un seul todo par son id
  getOnTodo = async (id) => {
    try {
      const response = await axios.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching todo by id:', error);
      throw error;
    }
  }

  // Méthode pour filtrer les todos selon l'état completed
  filterTodosByCompleted = async (completed) => {
    try {
      const response = await axios.get(`/todos?completed=${completed}`);
      return response.data;
    } catch (error) {
      console.error('Error filtering todos by completed:', error);
      throw error;
    }
  }

  // Méthode pour trier les todos selon id
  sortTodosById = async () => {
    try {
      const response = await axios.get('/todos?_sort=id');
      return response.data;
    } catch (error) {
      console.error('Error sorting todos by id:', error);
      throw error;
    }
  }

  // Méthode pour récupérer les todos dans les pages
  getTodosInPages = async (pageNumber, tasksPerPage) => {
    try {
      const response = await axios.get(`/todos?_page=${pageNumber}&_limit=${tasksPerPage}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching paginated todos:', error);
      throw error;
    }
  }

  // Méthode pour rechercher des tâches par mot-clé
  searchTasksByKeyword = async (keyword) => {
    try {
      const response = await axios.get(`/todos?q=${keyword}`);
      return response.data;
    } catch (error) {
      console.error('Error searching tasks by keyword:', error);
      throw error;
    }
  }

  // Méthode pour définir des rappels pour les todos à effectuer bientôt ou en retard
  setRemindersForTodos = async () => {
    // Implémentez cette fonctionnalité selon les besoins de votre application
  }
  
}

export default BackendService;
