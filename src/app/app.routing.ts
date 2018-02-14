import { UserComponent } from "./components/user.component";
import { RegistrationComponent } from "./components/registration.component";
import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core/core";

const appRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'registration',
        component: RegistrationComponent
    }
    
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);