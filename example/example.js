const React = require('react');
const ReactDOM = require('react-dom/server');

let ReactI18nfiy = null;

try {
  ReactI18nfiy = require('react-i18nify');
} catch (e) {
  ReactI18nfiy = require('../build/index.js');
}

const { I18n, Translate, Localize } = ReactI18nfiy;

I18n.setTranslations({
  en: {
    application: {
      title: 'Awesome app with i18n!',
      hello: 'Hello, %{name}!',
    },
    date: {
      long: 'MMMM Do, YYYY',
    },
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: <div>Line 1<br />Line 2</div>,
  },
  nl: {
    application: {
      title: 'Toffe app met i18n!',
      hello: 'Hallo, %{name}!',
    },
    date: {
      long: 'D MMMM YYYY',
    },
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: <div>Line 1<br />Line 2</div>,
  },
});

I18n.setLocale('nl');

console.log(I18n.t('application.title'));
console.log(I18n.t('application.hello', { name: 'Aad' }));
console.log(I18n.t('export', { count: 0 }));
console.log(I18n.t('application.unknown_translation'));
console.log(I18n.t('application', { name: 'Aad' }));

console.log(I18n.l(1385856000000, { dateFormat: 'date.long' }));
console.log(I18n.l(Math.PI, { maximumFractionDigits: 2 }));

function myHandleMissingTranslation(key, replacements) {
  return `Missing translation: ${key}`;
}

I18n.setHandleMissingTranslation(myHandleMissingTranslation);

console.log(I18n.t('application.unknown_translation'));

function AwesomeComponent() {
  return (
    <React.Fragment>
      <h1><Translate value="application.title" /></h1>
      <div><Translate value="application.hello" name="Aad" /></div>
      <ul>
        <li><Translate value="export" count={1} /></li>
        <li><Translate value="export" count={2} /></li>
      </ul>
      <Translate value="two_lines" />
      <p><Localize value="07-2016-04" dateFormat="date.long" parseFormat="DD-YYYY-MM" /></p>
      <p><Localize value="2015-09-03" dateFormat="date.long" /></p>
      <p>
        <Localize
          value={10 / 3}
          options={{
            style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2,
          }}
        />
      </p>
    </React.Fragment>
  );
}

console.log(ReactDOM.renderToString(<AwesomeComponent />));
