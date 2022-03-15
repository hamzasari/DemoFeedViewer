// Utility methods for common operations

/**
 * Truncate method for strings
 *
 * @param source source string
 * @param size size to truncate
 * @returns string
 */
export const truncate = (source: string, size: number): string => {
  return source.length > size ? source.slice(0, size) + '...' : source;
};
