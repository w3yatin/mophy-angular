import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2Data } from 'ng-select2-component';
@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent {

  themename!: string;
  themedir!: string;
  cssUrl!: any;
  activTheme!: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      if (params.theme == 'dark' || params.theme == 'light') {
        localStorage.setItem("data-theme-version", params.theme);
        if ((window.innerWidth) < 1200 && (window.innerWidth) > 766) {
          document.body.setAttribute('data-sidebar-style', 'mini');
        } else if ((window.innerWidth) <= 766) {
          document.body.setAttribute('data-sidebar-style', 'overlay');
        } else {
          document.body.setAttribute('data-sidebar-style', 'full');
        }
      } else if (params.theme == '1') {
        this.themeDemoSettings('dezThemeSet1', 'ltr');
      } else if (params.theme == '2') {
        this.themeDemoSettings('dezThemeSet2', 'ltr');
      } else if (params.theme == '3') {
        this.themeDemoSettings('dezThemeSet3', 'ltr');
      } else if (params.theme == '4') {
        this.themeDemoSettings('dezThemeSet4', 'ltr');
      } else if (params.theme == '5') {
        this.themeDemoSettings('dezThemeSet5', 'ltr');
      } else if (params.theme == '6') {
        this.themeDemoSettings('dezThemeSet6', 'ltr');
      } else if (params.theme == '7') {
        this.themeDemoSettings('dezThemeSet7', 'ltr');
      } else if (params.theme == '8') {
        this.themeDemoSettings('dezThemeSet8', 'ltr');
      } else {
        if ((window.innerWidth) < 1200 && (window.innerWidth) > 766) {
          document.body.setAttribute('data-sidebar-style', 'mini');
        } else if ((window.innerWidth) <= 766) {
          document.body.setAttribute('data-sidebar-style', 'overlay');
        } else {
          document.body.setAttribute('data-sidebar-style', 'full');
        }
      }
    });
  }


  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params['direction'] == "undefined" || params['direction'] == "" || params['direction'] == null) {
          this.themedir = 'ltr';
        } else {
          this.themedir = params['direction'];
        }

        if (params['themename'] != "" && (params['themename'] <= 5 && params['themename'] > 0)) {
          this.themename = 'dezThemeSet' + params['themename'];
          this.themeDemoSettings(this.themename, this.themedir);
        }
      });
    this.activTheme = localStorage.getItem('data-theme-version');
  }

  toggleswitcher: boolean = true;
  togglesthemedemo: boolean = true;

  toggleswitcherwindow() {
    this.toggleswitcher = !this.toggleswitcher;
  }

  togglesthemedemowindow() {
    this.togglesthemedemo = !this.togglesthemedemo;
  }


  themeSettings(attributeName: any, attributeVal: any, type?: any) {
    if (type) {
      attributeVal = attributeVal.value;
      if (attributeVal == 'boxed') {
        document.body.setAttribute('data-sidebar-style', 'overlay');
      }
      if (type == 'themeSelect') {
        localStorage.setItem("data-theme-version", attributeVal);
      }
      if (type == "theme_direction") {
        this.cssUrl = document.getElementById("cssFileUrl");
        if (attributeVal == "rtl") {
          this.cssUrl.setAttribute('href', 'assets/css/style-rtl.css');
        } else {
          this.cssUrl.setAttribute('href', 'assets/css/style.css');
        }
      }
      if (attributeVal == 'full' || 'mini' || 'overlay' || 'icon-hover' || 'compact') {
        localStorage.setItem("data-sidebar-style", attributeVal);
      }
    }

    document.body.setAttribute(attributeName, attributeVal); // ckack--

    if (attributeName == 'direction') {
      document.getElementsByTagName('html')[0].setAttribute('dir', attributeVal);
      document.getElementsByTagName('html')[0].setAttribute('class', attributeVal);
    }
  }

  themeDemoSettings(theme: string, direction: string) {
    if (theme == 'dezThemeSet6' || theme == 'dezThemeSet7') {
      localStorage.setItem("data-theme-version", 'dark')
    } else {
      localStorage.setItem("data-theme-version", 'light')
    }

    this.cssUrl = document.getElementById("cssFileUrl");
    if (direction == "rtl") {
      this.cssUrl.setAttribute('href', 'assets/css/style-rtl.css');
    } else {
      this.cssUrl.setAttribute('href', 'assets/css/style.css');
    }

    var dezThemeSet0 = { /* Default Theme */
      typography: "poppins",
      version: "light",
      layout: "vertical",
      headerBg: "color_1",
      primary: "color_1",
      navheaderBg: "color_1",
      sidebarBg: "color_1",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet1 = {
      typography: "poppins",
      version: "light",
      layout: "vertical",
      primary: "color_2",
      headerBg: "color_1",
      navheaderBg: "color_2",
      sidebarBg: "color_2",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet2 = {
      typography: "poppins",
      version: "light",
      layout: "vertical",
      primary: "color_1",
      headerBg: "color_13",
      navheaderBg: "color_13",
      sidebarBg: "color_1",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet3 = {
      typography: "poppins",
      version: "light",
      layout: "horizontal",
      primary: "color_14",
      headerBg: "color_1",
      navheaderBg: "color_1",
      sidebarBg: "color_14",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet4 = {
      typography: "poppins",
      version: "light",
      layout: "horizontal",
      primary: "color_6",
      headerBg: "color_6",
      navheaderBg: "color_6",
      sidebarBg: "color_1",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet5 = {
      typography: "poppins",
      version: "light",
      layout: "vertical",
      primary: "color_4",
      headerBg: "color_1",
      navheaderBg: "color_4",
      sidebarBg: "color_4",
      sidebarStyle: "compact",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet6 = {
      typography: "poppins",
      version: "dark",
      layout: "vertical",
      primary: "color_1",
      headerBg: "color_1",
      navheaderBg: "color_1",
      sidebarBg: "color_1",
      sidebarStyle: "compact",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet7 = {
      typography: "poppins",
      version: "dark",
      layout: "vertical",
      primary: "color_3",
      headerBg: "color_14",
      navheaderBg: "color_3",
      sidebarBg: "color_3",
      sidebarStyle: "full",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };

    var dezThemeSet8 = {
      typography: "poppins",
      version: "light",
      layout: "vertical",
      primary: "color_1",
      headerBg: "color_1",
      navheaderBg: "color_3",
      sidebarBg: "color_3",
      sidebarStyle: "mini",
      sidebarPosition: "fixed",
      headerPosition: "fixed",
      containerLayout: "full",
      direction: direction
    };
    // this.togglesthemedemowindow();

    var themeVar = eval(theme);
    if ((window.innerWidth) < 1200 && (window.innerWidth) > 766) {
      themeVar.sidebarStyle = 'mini';
    } else if ((window.innerWidth) <= 766) {    
      themeVar.sidebarStyle = 'overlay';
    } else {
      localStorage.setItem("data-sidebar-style", themeVar.sidebarStyle);
    }

    document.body.setAttribute('data-typography', themeVar.typography);
    document.body.setAttribute('data-theme-version', themeVar.version);
    document.body.setAttribute('data-layout', themeVar.layout);
    document.body.setAttribute('data-primary', themeVar.primary);
    document.body.setAttribute('data-headerbg', themeVar.headerBg);
    document.body.setAttribute('data-nav-headerbg', themeVar.navheaderBg);
    document.body.setAttribute('data-sidebarbg', themeVar.sidebarBg);
    document.body.setAttribute('data-sidebar-style', themeVar.sidebarStyle);
    document.body.setAttribute('data-sidebar-position', themeVar.sidebarPosition);
    document.body.setAttribute('data-header-position', themeVar.headerPosition);
    document.body.setAttribute('data-container', themeVar.containerLayout);
    document.body.setAttribute('direction', direction);

    document.getElementsByTagName('html')[0].setAttribute('dir', direction);
    document.getElementsByTagName('html')[0].setAttribute('class', direction);
  }

  //  Select items array 

  data: Select2Data = [
    {
      value: 'light',
      label: 'light',
      data: { name: 'light' }
    },
    {
      value: 'dark',
      label: 'dark',
      data: { name: 'dark' }
    }
  ]
  dataLayout: Select2Data = [
    {
      value: 'vertical',
      label: 'Vertical',
      data: { name: 'Vertical' }
    },
    {
      value: 'horizontal',
      label: 'Horizontal',
      data: { name: 'Horizontal' }
    }
  ]
  arrayHeaderPosition: Select2Data = [
    {
      value: 'fixed',
      label: 'Fixed',
      data: { name: 'Fixed' }
    },
    {
      value: 'static',
      label: 'Static',
      data: { name: 'Static' }
    }
  ]
  arraySidebar: Select2Data = [
    {
      value: 'full',
      label: 'Full',
      data: { name: 'Full' }
    },
    {
      value: 'mini',
      label: 'Mini',
      data: { name: 'Mini' }
    },
    {
      value: 'overlay',
      label: 'Overlay',
      data: { name: 'Overlay' }
    },
    {
      value: 'icon-hover',
      label: 'Icon-hover',
      data: { name: 'Icon-hover' }
    }
  ]
  arraySidebarPosition: Select2Data = [
    {
      value: 'fixed',
      label: 'Fixed',
      data: { name: 'Fixed' }
    },
    {
      value: 'static',
      label: 'Static',
      data: { name: 'Static' }
    }
  ]

  arrayContainer: Select2Data = [
    {
      value: 'wide',
      label: 'Wide',
      data: { name: 'Wide' }
    },
    {
      value: 'boxed',
      label: 'Boxed',
      data: { name: 'Boxed' }
    },
    {
      value: 'wide-boxed',
      label: 'Wide Boxed',
      data: { name: 'Wide Boxed' }
    }
  ]
  arrayDirection: Select2Data = [
    {
      value: 'ltr',
      label: 'LTR',
      data: { name: 'LTR' }
    },
    {
      value: 'rtl',
      label: 'RTL',
      data: { name: 'RTL' }
    }
  ]
  arrayBodyFont: Select2Data = [
    {
      value: 'poppins',
      label: 'Poppins',
      data: { name: 'Poppins' }
    },
    {
      value: 'roboto',
      label: 'Roboto',
      data: { name: 'Roboto' }
    },
    {
      value: 'opensans',
      label: 'Open Sans',
      data: { name: 'Open Sans' }
    },
    {
      value: 'HelveticaNeue',
      label: 'HelveticaNeue',
      data: { name: 'HelveticaNeue' }
    }
  ]
}
