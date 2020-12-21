import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    
    @Output() selectedPartToOutside = new EventEmitter<{section: string}>();

    selectPart(part){
        this.selectedPartToOutside.emit({
            section: part
        });
    }
}