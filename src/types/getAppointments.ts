export type AppointmentType = {
  id: number
  date: string
  hour: string
  status: string
  nutricionista: {
    id: number
    name: string
    crm: string
    especialidade: string
  }
}
