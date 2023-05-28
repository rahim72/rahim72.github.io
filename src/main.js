import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {
    faGaugeHigh,
    faUniversalAccess,
    faCirclePlus,
    faHouseChimneyMedical,
    faEarthAsia,
    faSquarePlus,
    faCalendarPlus,
    faPersonCirclePlus,
    faUserPlus,
    faUsers,
    faCalendarDays,
    faTableColumns,
    faPlus,
    faInbox,
    faGear,
    faBuildingUser,
    faMagnifyingGlass,
    faMagnifyingGlassLocation,
    faCommentSms,
    faScrewdriverWrench,
    faAngleLeft,
    faAngleDown,
    faChartSimple,
    faBuildingColumns,
    faMoneyBillTrendUp,
    faRankingStar
} from '@fortawesome/free-solid-svg-icons'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";

import 'primeicons/primeicons.css';
import '/public/assets/css/bootstrap.rtl.css'
import './style.css'
import '/public/assets/css/style.css'
import '/public/assets/fontawesome/all.min.css'
import '/public/assets/fontawesome/solid.min.css'

/* add icons to the library */

library.add(
    faRightToBracket,
    faArrowLeft,
    faBolt,
    faCircleInfo,
    faTicket,
    faUser,
    faGaugeHigh,
    faUniversalAccess,
    faCirclePlus,
    faHouseChimneyMedical,
    faEarthAsia,
    faSquarePlus,
    faCalendarPlus,
    faPersonCirclePlus,
    faUserPlus,
    faUsers,
    faCalendarDays,
    faTableColumns,
    faPlus,
    faInbox,
    faGear,
    faBuildingUser,
    faMagnifyingGlass,
    faMagnifyingGlassLocation,
    faCommentSms,
    faScrewdriverWrench,
    faAngleLeft,
    faAngleDown,
    faChartSimple,
    faBuildingColumns,
    faMoneyBillTrendUp,
    faRankingStar
)

library.add(faUserSecret, faTwitter)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
