import { Component, OnInit  } from '@angular/core';
import { data } from 'src/data/datasource';
import { PageSettingsModel, EditService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageService,
    SortService,
    FilterService,
    EditService,
      CommandColumnService]
})
export class AppComponent implements OnInit{
  title = 'my-grid-app';
  public data: object[];
  public filter: Object;
  public pageSettings: PageSettingsModel;
  public filterSettings: Object;
    public editSettings: Object;
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public editparams: Object;
    public commands: CommandModel[];

ngOnInit(): void {
    this.data = data;
    this.filterSettings = { type: "Menu" }; 
    this.filter = { type: "CheckBox" };    
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', allowEditOnDblClick: false };
        this.orderidrules = { required: true };
        this.customeridrules = { required: true };
        this.freightrules =  { required: true };
        this.editparams = { params: { popupHeight: '300px' }};
        this.pageSettings = { pageSizes: true, pageSize: 5 };
        this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
}
}
