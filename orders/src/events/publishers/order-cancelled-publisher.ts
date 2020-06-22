import { Subjects, Publisher, OrderCancelledEvent } from '@stasd/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
