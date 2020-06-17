import { Publisher, Subjects, TicketUpdatedEvent } from '@stasd/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
