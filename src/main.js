import { createApp } from 'vue'
import App from './App.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// src/main.js

// const app = createApp({})

// app.use(UIkit)
// app.use(Icons)
UIkit.use(Icons);

createApp(App).mount('#app')
