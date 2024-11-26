// requestAdapter.ts
import { notify, typeToasts } from '@/components/molecules/toastify';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { Id, toast } from 'react-toastify';

// Defina a interface de resposta padrão para a API
interface ApiResponse<T = unknown> {
    token: boolean;
    data: T;
    success: boolean;
    message?: string;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// Crie uma instância do axios com configuração padrão
const apiClient: AxiosInstance = axios.create({
    baseURL: API_BASE_URL || 'https://api.exemplo.com', // Defina a URL base da API
    timeout: 10000, // Timeout de 10 segundos para requisições
    headers: {
        'Content-Type': 'application/json',
    },
});
let id: Id
// Interceptores de request para adicionar headers ou tokens de autenticação, se necessário
// Alteração no interceptor de request
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('JWT_TOKEN');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        id = notify(typeToasts.LOADING, 'Carregando...')
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Interceptores de response para manipular dados de resposta e erros
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        toast.update(id, { render: "Tudo certo!", type: "success", isLoading: false, autoClose: 5000 });
        return response;
    },
    (error) => {
        toast.update(id, { render: "Erro ao realizar requisição", type: "error", isLoading: false, autoClose: 5000 });
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
