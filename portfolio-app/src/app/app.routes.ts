import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    // { path: "projects-list", component: ProjectsListComponent },
    // { path: "admin", component: AdminComponent}
    { path: "projects-list", component: HomeComponent },
    { path: "admin", component: HomeComponent}
];
