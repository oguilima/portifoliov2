import { Component } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { MenuItem } from 'primeng/api';
import { Dock } from 'primeng/dock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';

import { Router } from '@angular/router'

@Component({
    selector: 'app-menu',
    imports: [DockModule, Dock, CommonModule, FormsModule, TooltipModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    standalone: true,
    styles: [
        ` .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }`
    ],
})
export class MenuComponent {
    constructor(private router: Router) { }

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
                redirTo: ""
            },{
                label: 'Projetos',
                icon: 'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b9cc87ed89dbb01d79dd1b91c01ba92b_low_res_Code%20Folder%20Ventura.png',
                redirTo: "/projetos"
            },{
                label: 'Formação',
                icon: 'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6cba32a31815e6f6b2dbfae8e6a50789_low_res_Books__My_version_.png',
                redirTo: "/formacao"
            },{
                label: 'Carreira',
                icon: 'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8873f38f20e25050fd038334eca03f82_low_res_ContentAI_Lingvo.png',
                redirTo: "/carreira"
            }/*,{
                label: 'Contato',
                icon: 'https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/87bba3ec0c6584e3d7376cc764bf608a_low_res_Google_Chat.png',
                redirTo: "/contato"
            }*/
        ];
    }

    redirecionarPara(link: string) {
        this.router.navigate([link]);
    }
}
