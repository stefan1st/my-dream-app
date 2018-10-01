import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { environment } from './environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [
      environment.production
        ? ServiceWorkerModule.register('/ngsw-worker.js')
        : []
    ]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
