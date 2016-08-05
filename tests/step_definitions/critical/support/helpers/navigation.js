import {routeTo} from './router';
// import HomePage from '../page_objects/pages/home';

export function navigateToHomePage() {
  browser.url(routeTo('/'));
  // return new HomePage();
}
