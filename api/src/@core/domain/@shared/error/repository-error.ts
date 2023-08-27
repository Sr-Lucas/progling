export class RepositoryError extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'RepositoryError';
  }
}
