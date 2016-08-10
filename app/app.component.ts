import { Component } from '@angular/core';
import {TreeViewComponent} from './treeview/treeview.component';
import {MenuItem} from './treeview/menuItem';;
@Component({
    selector: 'my-app',
    template: '<ul tree-view [directories]="directories"></ul>',
    directives: [TreeViewComponent]
})
export class AppComponent {
    directories: MenuItem[];
    constructor() {
        this.directories = [
            {
                "title": "Item-1",
                "iconClass": "fa fa fa-flask",
                "link": "#1",
                "notice": 0,
                "subMenus": null
            },
            {
                "title": "Item-2", "iconClass": "fa fa-level-down", "link": null, "notice": 0,
                "subMenus": [
                    {
                        "title": "Item-2-1",
                        "iconClass": "fa fa fa-flask",
                        "link": "#2",
                        "notice": 0,
                        "subMenus": null
                    }, {
                        "title": "Item-2-2",
                        "iconClass": "fa fa fa-flask",
                        "link": "#3",
                        "notice": 0,
                        "subMenus": null
                    }]
            },
            {
                "title": "Item-3", "iconClass": "fa fa-level-down", "link": null, "notice": 4,
                "subMenus": [
                    {
                        "title": "Item-3-1",
                        "iconClass": "fa fa fa-flask",
                        "link": "#4",
                        "notice": 1,
                        "subMenus": null
                    },
                    {
                        "title": "Item-3-2",
                        "iconClass": "fa fa fa-flask",
                        "link": null,
                        "notice": 3,
                        "subMenus": [
                            {
                                "title": "Item-3-2-1",
                                "iconClass": "fa fa fa-flask",
                                "link": "#6",
                                "notice": 1,
                                "subMenus": null
                            },
                            {
                                "title": "Item-3-2-2",
                                "iconClass": "fa fa fa-flask",
                                "link": "#7",
                                "notice": 2,
                                "subMenus": [
                                    {
                                        "title": "Item-4-2-1",
                                        "iconClass": "fa fa fa-flask",
                                        "link": "#6",
                                        "notice": 1,
                                        "subMenus": null
                                    },
                                    {
                                        "title": "Item-4-2-2",
                                        "iconClass": "fa fa fa-flask",
                                        "link": "#7",
                                        "notice": 2,
                                        "subMenus": [
                                            {
                                                "title": "Item-5-2-1",
                                                "iconClass": "fa fa fa-flask",
                                                "link": "#6",
                                                "notice": 1,
                                                "subMenus": null
                                            },
                                            {
                                                "title": "Item-5-2-2",
                                                "iconClass": "fa fa fa-flask",
                                                "link": "#7",
                                                "notice": 2,
                                                "subMenus": null
                                            }]
                                    }]
                            }]
                    }]
            }
        ];
    }
}


