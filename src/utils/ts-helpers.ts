/**
 * Helper to infer keys of an object
 */
export const asTypedObject =
  <E>() =>
  <T>(et: { [K in keyof T]: E }) =>
    et
