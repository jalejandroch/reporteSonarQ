import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { GenerateFilesComponent } from './generate-files/generate-files.component';
import { SonarQubeReportComponent } from './sonar-qube-report/sonar-qube-report.component';

const routes: Routes = [
	{
		path: '',
		component: GenerateFilesComponent
	},
	{
		path: 'getFiles',
		component: GenerateFilesComponent
	},
	{
		path: 'report',
		component: SonarQubeReportComponent
	},
	// {
	// 	path: ROUTE_NAMES.app.search,
	// 	loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule),
	// 	resolve: { configuration: GeneralResolverService, ...[SearchResolver] },
	// },
	// {
	// 	path: ROUTE_NAMES.app.permissions,
	// 	loadChildren: () =>
	// 		import('./modules/permissions/permissions.module').then((m) => m.PermissionsModule),
	// },
	// {
	// 	path: ROUTE_NAMES.app.notFound,
	// 	loadChildren: () =>
	// 		import('./modules/page-not-found/page-not-found.module').then(
	// 			(m) => m.PageNotFoundModule
	// 		),
	// },
	// {
	// 	matcher: (url)=>{
	// 		if(url.length > 2){
	// 			return null;
	// 		}
	// 		if (url.length >= 1 && url[0].path.match('^(prospects|quotation)$')) {
	// 			return {
	// 				consumed: url.slice(0,1),
	// 				posParams:{
	// 					...(url[1] ? {id: new UrlSegment(url[1].path, { }) }: {})
	// 				}
	// 			};
	// 		}
	// 		return null;
	// 	},
	// 	loadChildren: () =>
	// 		import('./modules/prospects/prospects.module').then((m) => m.ProspectsModule),
	// 	canActivate: [NgxCustomPermissionGuard],
	// 	data: {
	// 		permissions: {
	// 			always: [PermissionsKeyEnum.ROLE_PIPELINE],
	// 		},
	// 	},
	// },
	// {
	// 	path: ROUTE_NAMES.app.help,
	// 	component: HelpComponent,
	// },
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
