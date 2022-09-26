import { Button } from 'app/components/Button';
import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export function Header() {
  const { t, i18n } = useTranslation();
  const [languageChanged, setLanguageChanged] = useState(() => {
    return localStorage.getItem('i18nextLng') || 'null';
  });

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      setLanguageChanged(lng);
    },
    [languageChanged, setLanguageChanged],
  );

  return (
    <div className={cx('header')}>
      <div>
        <Link className={cx('link')} to="/">
          {t('home')}
        </Link>
        <Link className={cx('link')} to="/introduction">
          {t('introduction')}
        </Link>
        <Link className={cx('link')} to="/no-footer">
          {t('NoFooterLayout')}
        </Link>
      </div>
      <div>
        <Button
          active={languageChanged === 'en'}
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
        <Button
          active={languageChanged === 'vi'}
          onClick={() => changeLanguage('vi')}
        >
          Vietnamese
        </Button>
      </div>
    </div>
  );
}
