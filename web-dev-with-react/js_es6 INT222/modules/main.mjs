import greeting from './module.mjs';
import {greeting2} from './module2.mjs';
import {greeting3, greeting4 as newGreetings} from './module3.mjs';

greeting('alpha');
greeting2('bravo');
greeting3('charlie');
newGreetings('delta');