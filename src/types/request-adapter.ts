 
export interface ApiResponse<T = unknown> {
    limit: number
    skip: number
    total: number
    data: T
}
