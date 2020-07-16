import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@stasd/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
