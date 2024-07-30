import { Routes } from '@angular/router';
import { TheVisionRouteComponent } from './routes/the-vision-route/the-vision-route.component';
import { TheReducedLensMethodRouteComponent } from './routes/the-reduced-lens-method-route/the-reduced-lens-method-route.component';
import { MyCurrentProgressRouteComponent } from './routes/my-current-progress-route/my-current-progress-route.component';
import { RawDataRouteComponent } from './routes/raw-data-route/raw-data-route.component';

export const routes: Routes = [
    { path: "", component: TheVisionRouteComponent, title: "NMN: The Vision" },
    { path: "rlm", component: TheReducedLensMethodRouteComponent, title: "NMN: The Reduced Lens Method" },
    { path: "progress", component: MyCurrentProgressRouteComponent, title: "NMN: My Current Progress" },
    { path: "data", component: RawDataRouteComponent, title: "NMN: Raw Data" },
];
