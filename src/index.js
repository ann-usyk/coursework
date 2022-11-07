import moment from 'moment'
import 'moment/locale/uk'

import renderRoot from "./main";
import {initFireApp} from "./firebase";

moment.locale('uk')

initFireApp();

renderRoot();