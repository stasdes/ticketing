import { Publisher, Subjects, TicketCreatedEvent } from '@stasd/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
