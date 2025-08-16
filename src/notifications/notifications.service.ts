import { Injectable } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationDto } from './notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly notificationsGateway: NotificationsGateway) {}

  processNotification(notification: NotificationDto) {
    // Enviar inmediatamente por WebSocket
    this.notificationsGateway.sendNotification(notification);
  }
}
