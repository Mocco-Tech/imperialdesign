import {
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import InstagramIcon from '../header/InstagramIcon';

function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full px-6 py-4 border-t border-slate-200 text-slate-600 grid grid-cols-1 lg:grid-cols-3 md:flex-row items-center justify-between gap-5">
      <p className="justify-self-center lg:justify-self-start">
        &copy; Copyright {year}
      </p>
      <div className="flex gap-3 justify-self-center">
        <a
          href="https://www.instagram.com/imperial_design.ua?igsh=a2R3ajluOWU3Ymp3"
          target="_blank"
          className="h-9 w-9 bg-teal-900 text-emerald-50 hover:bg-rose-400 duration-200 rounded-full flex items-center justify-center"
        >
          <InstagramIcon className="w-5" />
        </a>
        <a
          href="mailto:info@imperialdesign.com.ua"
          className="h-9 w-9 bg-teal-900 text-emerald-50 hover:bg-blue-400 duration-200 rounded-full flex items-center justify-center"
        >
          <EnvelopeIcon className="w-5" />
        </a>
        <a
          href=""
          className="h-9 w-9 bg-teal-900 text-emerald-50 hover:bg-emerald-400 duration-200 rounded-full flex items-center justify-center"
        >
          <PhoneIcon className="w-5" />
        </a>
      </div>
      <div className="justify-self-center lg:justify-self-end flex  items-center gap-2">
        <CodeBracketIcon className="w-4" />
        <p>
          Site by{' '}
          <a
            href="https://www.moccotech.com"
            target="_blank"
            className="hover:text-indigo-500 duration-200"
          >
            Mocco Tech
          </a>
        </p>
      </div>
    </div>
  );
}

export default FooterBottom;
