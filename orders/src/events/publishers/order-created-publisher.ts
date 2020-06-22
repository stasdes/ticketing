import { Publisher, OrderCreatedEvent, Subjects } from '@stasd/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
