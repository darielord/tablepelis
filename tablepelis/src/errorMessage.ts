import type { ApiError } from "./types";

export function errorMessage(error: ApiError): string {
  switch (error.kind) {
    case "http":
      if (error.status === 401) {
        return "clave invalida";
      } else if (error.status === 404) {
        return "no encontrado";
      } else if (error.status === 429) {
        return "demasiadas peticiones";
      } else {
        return `error ${error.status}`;
      }

    case "network":
      return "Error de conexion";

    case "invalid-data":
      return "Formato inesperado";

    default:
      const def: never = error;
      throw new Error(`error ${def}`);
  }
}
