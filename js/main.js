import insertInterface from './utils/insertInterface/insertInterface';
import resetWindow from './utils/resetWindow/resetWindow';
import createWelcomeElement from './welcome';

resetWindow();
insertInterface(createWelcomeElement());
