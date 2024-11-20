// requestAdapter.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Defina a interface de resposta padrão para a API
interface ApiResponse<T = unknown> {
    data: T;
    success: boolean;
    message?: string;
}

// Crie uma instância do axios com configuração padrão
const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'https://api.exemplo.com', // Defina a URL base da API
    timeout: 10000, // Timeout de 10 segundos para requisições
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptores de request para adicionar headers ou tokens de autenticação, se necessário
// Alteração no interceptor de request
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Interceptores de response para manipular dados de resposta e erros
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        // Tratamento de erros globais (exemplo: redirecionar no caso de 401)
        if (error.response && error.response.status === 401) {
            // Deslogar usuário, redirecionar, etc.
            console.log('Não autorizado. Redirecionando para login...');
        }
        return Promise.reject(error);
    }
);

// Funções genéricas para realizar requisições
export const requestAdapter = {
    get: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
        const response = await apiClient.get<ApiResponse<T>>(url, config);
        return response.data;
    },

    post: async <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
        const response = await apiClient.post<ApiResponse<T>>(url, data, config);
        return response.data;
    },

    put: async <T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
        const response = await apiClient.put<ApiResponse<T>>(url, data, config);
        return response.data;
    },

    delete: async <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
        const response = await apiClient.delete<ApiResponse<T>>(url, config);
        return response.data;
    },
};

export default requestAdapter;
