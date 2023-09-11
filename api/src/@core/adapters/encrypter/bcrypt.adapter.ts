import { IEncrypter } from './encrypter.interface';
import * as Bcrypt from 'bcrypt';

export class BcryptAdapter implements IEncrypter {
  hash(plaintext: string): Promise<string> {
    return Bcrypt.hash(plaintext, 12);
  }

  compare(plaintext: string, digest: string): Promise<boolean> {
    return Bcrypt.compare(plaintext, digest);
  }
}
