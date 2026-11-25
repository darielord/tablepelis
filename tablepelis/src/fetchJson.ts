import type { ApiError } from "./types";
import type { Result } from "./types";

export async function fetchJson<T>(
  url: string,
  signal: AbortSignal,
  guard: (value: unknown) => value is T,
): Promise<Result<T, ApiError>> {
  let response: Response;
  try {
    response = await fetch(url, { signal });
  } catch {
    return { ok: false, error: { kind: "network" } };
  }

  if (!response.ok) {
    return { ok: false, error: { kind: "http", status: response.status } };
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    return { ok: false, error: { kind: "invalid-data" } };
  }

  if (guard(data)) {
    return { ok: true, data };
  }
  return { ok: false, error: { kind: "invalid-data" } };
}
