import { usePathname } from 'next/navigation'
import Link from "next/link";

export const LangSelect = () => {

  const pathname = usePathname() 
  const activeLang = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  return (

    <div className="boxLang text-grey vertical-text font-gilroy-bold transform rotate-180">
      <Link href='/uz'>
        <span className={activeLang === 'uz' ? 'text-black' : ''}>UZ</span>
      </Link>
      <span className="text-black"> | </span>
      <Link href="/ru">
        <span className={activeLang === 'ru' ? 'text-black' : ''}>RU</span>
      </Link>
      <span className="text-black"> | </span>
      <Link href="/en">
        <span className={activeLang === 'en' ? 'text-black' : ''}>EN</span>
      </Link>
    </div>
  );
};
