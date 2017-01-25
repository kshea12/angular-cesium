import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularCesiumComponent } from "./angular-cesium.component";
import { AcMapComponent } from "./components/ac-map/ac-map.component";
import { AcLayerComponent } from "./components/ac-layer/ac-layer.component";
import { AcBillboardComponent } from "./components/ac-billboard/ac-billboard.component";
import { AcBillboardDescComponent } from "./components/ac-billborad-desc/ac-billborad-desc.component";
import { AcEllipseStaticDescComponent } from "./components/ac-ellipse-static/ac-ellipse-static-desc.component";
import { AcPolygonStaticDescComponent } from './components/ac-polygon-static-desc/ac-polygon-static-desc.component';
import { AcLayer2Directive } from "./directives/ac-layer-2.directive";
import { Angular2ParseModule } from "../angular2-parse/src/angular2-parse.module";
import { PixelOffsetPipe } from "./pipes/pixel-offset/pixel-offset.pipe";
import { JsonMapper } from "./services/json-mapper/json-mapper.service";
import { CesiumProperties } from "./services/cesium-properties/cesium-properties.service";
import { AcLabelDescComponent } from "./components/ac-label-desc/ac-label-desc.component";
import { UtilsModule } from "../utils/utils.module";
import { AsyncService } from '../utils/services/async/async.service';

@NgModule({
	imports: [
		CommonModule,
		Angular2ParseModule,
		UtilsModule
	],
	declarations: [AngularCesiumComponent,
		AcMapComponent,
		AcLayerComponent,
		AcBillboardComponent,
		AcBillboardDescComponent,
		AcLabelDescComponent,
		AcEllipseStaticDescComponent,
		AcPolygonStaticDescComponent,
		AcLayer2Directive,
		PixelOffsetPipe],
	exports: [
		AcMapComponent,
		AcBillboardComponent,
		AcBillboardDescComponent,
		AcLabelDescComponent,
		AcEllipseStaticDescComponent,
		AcPolygonStaticDescComponent,
		AcLayerComponent,
		AcLayer2Directive,
	],
	providers: [JsonMapper, CesiumProperties, AsyncService],
})
export class AngularCesiumModule {
}
