export type AuthState = {
    token:string | null,
    hydrated:boolean,
    setToken: (token:string) =>void
    clearToken: ()=>void
    setHydrated:(hydrated:boolean) =>void
}