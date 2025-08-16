import { Controller, Post, Body, Logger } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('webhook')
export class NotificationsController {
  private readonly logger = new Logger(NotificationsController.name);

  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('notification')
  receiveNotification(@Body() body: { titulo: string; descripcion: string }) {
    this.logger.log(`Webhook recibido: ${body.titulo}`);

    const notification = {
      titulo: body.titulo,
      descripcion: body.descripcion,
      timestamp: new Date(),
    };

    this.notificationsService.processNotification(notification);

    return { success: true, message: 'Notificación procesada' };
  }
}
