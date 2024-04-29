import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth/auth-head/auth-head.component';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AuthHeadComponent, AsyncPipe, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
