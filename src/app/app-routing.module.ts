import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateFilesComponent } from './generate-files/generate-files.component';
import { SonarQubeReportComponent } from './sonar-qube-report/sonar-qube-report.component';

const routes: Routes = [
	{
		path: '',
		component: SonarQubeReportComponent
	},
	{
		path: 'getFiles',
		component: GenerateFilesComponent
	},
	{
		path: 'report',
		component: SonarQubeReportComponent
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
