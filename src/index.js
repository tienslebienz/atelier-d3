import 'babel-polyfill';
import './tp1';

/* global module */
if (module.hot) {
    module.hot.dispose(function () {
        window.location.reload();
    });
}
