import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from './menuItem';

@Component({
    moduleId: module.id,
    selector: '[tree-view]',
    templateUrl: 'treeview.component.html',
    directives: [TreeViewComponent],
})
export class TreeViewComponent implements OnInit {
    @Input() directories: MenuItem[];

    constructor() { }

    ngOnInit() { }

}