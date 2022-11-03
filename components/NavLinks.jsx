import Link from 'next/link';

const NavLink = ({ link, title, setActiveLink, activeLink }) => (
  <div className='relative'>
    <Link href={link}>
      <span
        className={`${
          activeLink === title ? 'text-primary' : 'text-textColor'
        }  focus:text-primary text-[16px] h-[56px] font block`}
        onClick={(e) => setActiveLink(e.target.innerText)}
      >
        {title}
      </span>
    </Link>
    {/* Focus */}
    <div
      className={` w-full h-[2px] bg-primary absolute bottom-[0] left-0 ${
        activeLink === title ? 'block' : 'hidden'
      }`}
    ></div>
  </div>
);

export default NavLink;
