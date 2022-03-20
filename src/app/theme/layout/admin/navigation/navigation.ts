import {Injectable} from '@angular/core';

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
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      },
      {
        id: 'ProfileUser',
        title: 'ProfileUser',
        type: 'item',
        url: '/dashboard/profileUser',
        icon: 'feather icon-user'
      },
      {
        id: 'AddUser',
        title: 'AddUser',
        type: 'item',
        url: '/dashboard/AddUser',
        icon: 'feather icon-user'
      },
    ]
  },
  {
    id: 'Administrateur',
    title: 'Administrateur ',
    type: 'group',
    icon: 'feather icon-list',
    children: [
      {
        id: 'listUser',
        title: 'listUser',
        type: 'item',
        url: '/dashboard/listUser',
        icon: 'feather icon-server'
      },
    
      {
        id: 'listCompt',
        title: 'listCompt',
        type: 'item',
        url: '/consulter/listCompt',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'Consulter',
    title: 'Consulter ',
    type: 'group',
    icon: 'feather icon-list',
    children: [
      {
        id: 'list_SF',
        title: 'list_SF',
        type: 'item',
        url: '/consulter/list_SF',
        icon: 'feather icon-server'
      },
      /*{
        id: 'listCompt',
        title: 'listCompt',
        type: 'item',
        url: '/consulter/listCompt',
        icon: 'feather icon-server'
      }*/
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

const roles=[
 
  "Dashboard"  , 
  "ProfileUser",
  "AddUser",
"listUser",

]
@Injectable()
export class NavigationItem {
  public get() {
    let adminAllRoles: role[] = []
    
    //admin-space
    adminAllRoles:[] = [];
    let adminRole: role;
    /*for (let i = 0; i < NavigationItems.length; i++) {
      adminRole = new role();
      adminRole.id = NavigationItems[i].id;
      adminRole.title = NavigationItems[i].title;
      adminRole.type = NavigationItems[i].type;
      adminRole.icon = NavigationItems[i].icon;
      console.log(adminRole);
      for(let j=0;j<NavigationItems[i].children.length;i++){
        if(roles.includes(NavigationItems[i].children[j].title)){
          adminRole.children[adminRole.children.length]=NavigationItems[i].children[j];
        }
      }
      if (adminRole.children.length !== 0) {
        adminAllRoles[adminAllRoles.length] = adminRole
      }
    }*/
  
   if (roles) {
      let adminRole: role;
      for (let i = 0; i < NavigationItems.length; i++) {
        adminRole = new role();
        adminRole.id = NavigationItems[i].id;
        adminRole.title = NavigationItems[i].title;
        adminRole.type = NavigationItems[i].type;
        adminRole.icon = NavigationItems[i].icon;
        console.log(adminRole);
        
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
    for(let i=0;i<adminAllRoles.length;i++){
      console.log(adminAllRoles[i].id);
      
    }
    //console.log(adminAllRoles);

    return adminAllRoles;

  
   
  }
}