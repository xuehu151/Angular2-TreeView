export interface MenuItem {
  title: string;
  iconClass: string;
  link: string;
  notice: number;
  subMenus: MenuItem[];
}
