/* tslint:disable */
/* eslint-disable */
export class WhisperWrapper {
  private constructor();
  free(): void;
  [Symbol.dispose](): void;
  iniciar_envio(): void;
  inserir_amostra(amostras: Int16Array): void;
  pegar_transcricao(): string;
  static new(host: string, porta: number, limite_caracteres: number, audio_samplerate: number, audio_canais: number): WhisperWrapper;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_whisperwrapper_free: (a: number, b: number) => void;
  readonly whisperwrapper_iniciar_envio: (a: number) => [number, number];
  readonly whisperwrapper_inserir_amostra: (a: number, b: number, c: number) => void;
  readonly whisperwrapper_new: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number, number];
  readonly whisperwrapper_pegar_transcricao: (a: number) => [number, number];
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
