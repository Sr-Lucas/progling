import Notification from '../notification/notification';

export abstract class Entity {
  public notification: Notification;

  constructor(
    protected _id?: string,
    protected _createdAt: Date = new Date(),
    protected _updatedAt: Date = new Date(),
    protected _isActive: boolean = true,
  ) {
    this.notification = new Notification();
  }

  get id(): string | undefined {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }
}
