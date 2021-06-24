import homeFunc from './home';
import createContact from './contact';
import createMenu from './menu';

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}