import { TokenStorageServiceService } from './../../../../../Service/token-storage-service.service';
import {Injectable} from '@angular/core';
import { ApprovalService } from 'src/Service/approval.service';
export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'Navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      
     
      {
        id: 'ProfileUser',
        title: 'ProfileUser',
        type: 'item',
        url: '/dashboard/profileUser',
        icon: 'feather icon-user'
      }
     
      
    ]
  },
  {
    id: 'Administrateur',
    title: 'Administrateur ',
    type: 'group',
    icon: 'feather icon-list',
    children: [
      {
        id: 'Dashbord',
        title: 'Dashbord',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      },
      
     
      {
        id: 'ajouter_users',
        title: 'ajouter_users',
        type: 'item',
        url: '/dashboard/AddUser',
        icon: 'feather icon-user-plus'
      },
    
      {
        id: 'Ajouter_SF',
        title: 'Ajouter_SF',
        type: 'item',
        url: '/dashboard/Ajouter_SF',
        icon: 'feather icon-file-plus'
      },
      {
        id: 'Operation_UAA',
        title: 'Operation_UAA',
        type: 'item',
        url: '/dashboard/Operation_UAA',
        icon: 'feather icon-activity'
      },
    ]
  },
  {
    id: 'Consulter',
    title: 'Consulter ',
    type: 'group',
    icon: 'feather icon-list',
    children: [
      {
        id: 'listUser',
        title: 'consulter_users',
        type: 'item',
        url: '/dashboard/listUser',
        icon: 'feather icon-list'
      },
      {
        id: 'list_SF',
        title: 'Consulter_SF',
        type: 'item',
        url: '/dashboard/Consulter_SF',
        icon: 'feather icon-list'
      },
      {
        id: 'listCompt',
        title: 'listCompt',
        type: 'item',
        url: '/consulter/listCompt',
        icon: 'feather icon-list'
      },
    ]
  },

];
export class child {
  id: string;
  title: string;
  type: string;
  url: string;
  icon: string;
}
export class role {
  id: string;
  title: string;
  type: string;
  icon?: string;
  children: child[]
  constructor() {
    this.id = "";
    this.title = "";
    this.type = "";
    this.icon = "";
    this.children = []
  }
}
let rolesUser=[]
let roles=[]
@Injectable()
export class NavigationItem {
  constructor(private tokenStorage: TokenStorageServiceService,private approvalService:ApprovalService){}
  public get() {
 let roles=this.tokenStorage.getRolesUser()
 
 //console.log("session stora: "+roles);
 
   // this.approvalService.currentApprovalStageMessage.subscribe(msg => roles=msg)
  
    
    let adminAllRoles: role[] = []
    
    //admin-space
    adminAllRoles:[] = [];
    let adminRole: role;
    
   if (roles) {
    adminAllRoles[adminAllRoles.length]=NavigationItems[0]
      let adminRole: role;
      for (let i = 0; i < NavigationItems.length; i++) {
        adminRole = new role();
        adminRole.id = NavigationItems[i].id;
        adminRole.title = NavigationItems[i].title;
        adminRole.type = NavigationItems[i].type;
        adminRole.icon = NavigationItems[i].icon;
  
        
        for (let j = 0; j < NavigationItems[i].children.length; j++) {
          if (roles.indexOf(NavigationItems[i].children[j].title) !== -1) {
            adminRole.children[adminRole.children.length] = NavigationItems[i].children[j];
          }
        }
        if (adminRole.children.length !== 0) {
          adminAllRoles[adminAllRoles.length] = adminRole
        }
      }
    }
   
    //console.log(adminAllRoles);

    return adminAllRoles;

  
   
  }
}