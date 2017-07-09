import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "app/_components";

export const ROUTES: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: 'main', pathMatch: 'full' }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { useHash: true });