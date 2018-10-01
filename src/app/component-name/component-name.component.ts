import { Component, OnInit } from '@angular/core';
import { NoticeComponent } from '../notice/notice.component';

@Component({
    selector: 'app-component-name',
    template: `<div>{{typeReference}}</div>`
})

export class ComponentNameComponent implements OnInit {
    constructor() { }

    public typeReference: string;

    ngOnInit() { 
        const typeReference = ALLCOMPONENTS.find(item => item.name === "NoticeComponent");
        debugger;
        this.typeReference = typeReference.name;
        console.log("gets here");
        console.log(typeReference.name);
    }
}

export const ALLCOMPONENTS = [
    NoticeComponent
]


