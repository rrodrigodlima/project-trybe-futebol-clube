export default interface ICrypt {
  compare(password: string, hash: string): Promise<boolean>;
}
