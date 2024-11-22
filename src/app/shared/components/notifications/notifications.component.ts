import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {WebSocketService} from "../../services/websocket/WebSocketService";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit, OnDestroy{

  notifications: { sensorId: string; message: string }[] = [];
  private subscription: Subscription | null = null;

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.subscription = this.webSocketService.getNotifications().subscribe({
      next: (notification: any) => {
        if (notification?.sensorId && notification?.message) {
          this.notifications.push(notification);
        }
      },
      error: (err) => {
        console.error('WebSocket error:', err);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  clearNotifications(): void {
    this.notifications = [];
  }


}
