'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Menu as MenuIcon, Search, X } from 'lucide-react';

type HeaderProps = {
  treatments: string[][];
};

const treatmentSlugs: Record<string, string> = {
  Laserbehandlingar: 'laserbehandlingar',
  Hudföryngring: 'hudforengring',
  Injektioner: 'injektioner',
  'Medicinsk hudvård': 'medicinsk-hudvard',
  Kroppsvård: 'kroppsvard',
  'Klassisk massage': 'klassisk-massage',
  'Lyxbehandling för 1/2': 'lyxbehandling-1-2',
  'Spaavdelning med bubbelpool & privat IR-bastu': 'spa-och-ir-bastu',
  'Fotbehandling/Pedikyr': 'fotbehandling-pedikyr',
  'Hudvård/Ansikte': 'hudvard-ansikte',
  Övrigt: 'ovrigt',
};

export default function Header({ treatments }: HeaderProps) {
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuSubOpen, setMenuSubOpen] = useState<'treatments' | 'skincare' | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTreatmentsOpen(false);
        setSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Hook up to your search route/logic here
    // e.g. router.push(`/sok?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <div ref={dropdownRef}>
      <header className={`siteHeader ${treatmentsOpen ? 'menuOpen' : ''} ${searchOpen ? 'searchBg' : ''}`}>
        <nav className="nav shell" aria-label="Huvudmeny">
          <div className="navGroup left">
            <button
              type="button"
              className={`navDropdownTrigger ${treatmentsOpen ? 'isOpen' : ''}`}
              aria-expanded={treatmentsOpen}
              aria-controls="treatments-dropdown"
              onClick={() => {
                setSearchOpen(false);
                setTreatmentsOpen((previous) => !previous);
              }}
            >
              Våra behandlingar
              <span className="chev"><ChevronDown size={24} strokeWidth={1.5} aria-hidden="true" /></span>
            </button>
           
            <a href="#boka">Boka tid</a>
          </div>

          <a className="brand" href="/" aria-label="Derma Laser Studio startsida">
            <span className="brandMark">D</span>
            <span className="brandWord">DERMA LASER</span>
            <small>STUDIO</small>
          </a>

          <div className="navGroup right">
            <button
              type="button"
              className={`iconBtn ${searchOpen ? 'isOpen' : ''}`}
              aria-label="Sök"
              aria-expanded={searchOpen}
              aria-controls="search-overlay"
              onClick={() => {
                setTreatmentsOpen(false);
                setSearchOpen((previous) => !previous);
              }}
            >
              Sök <Search size={17} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="iconBtn"
              aria-label="Öppna meny"
              aria-expanded={menuOpen}
              aria-controls="main-menu-panel"
              onClick={() => {
                setTreatmentsOpen(false);
                setSearchOpen(false);
                setMenuOpen(true);
              }}
            >
              Meny <MenuIcon size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {searchOpen && (
        <div className="searchOverlay" id="search-overlay">
          <form className="searchOverlayForm shell" onSubmit={handleSearchSubmit}>
            <input
              ref={searchInputRef}
              type="text"
              className="searchOverlayInput"
              placeholder="Sök på behandling, område m.m"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              aria-label="Sök på behandling, område m.m"
            />
            <button type="submit" className="searchOverlaySubmit" aria-label="Sök">
              <Search size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {treatmentsOpen && (
        <div className="treatmentsOverlay" id="treatments-dropdown">
          <ul className="treatmentsOverlayList">
            {treatments.map(([title]) => (
              <li key={title}>
                <a href={`/behandlingar/${treatmentSlugs[title] ?? title.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setTreatmentsOpen(false)}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {menuOpen && (
        <div className="menuPanelOverlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="menuPanelBackdrop"
            aria-label="Stäng meny"
            onClick={() => { setMenuOpen(false); setMenuSubOpen(null); }}
          />
          <div className="menuPanel" id="main-menu-panel">
            <button
              type="button"
              className="menuPanelClose"
              aria-label="Stäng meny"
              onClick={() => { setMenuOpen(false); setMenuSubOpen(null); }}
            >
              <X size={26} strokeWidth={1.5} aria-hidden="true" />
            </button>

            <div className="menuPanelScroll">
              <nav className="menuPanelList" aria-label="Meny">
                <a href="/" className="menuPanelLink" onClick={() => setMenuOpen(false)}>Hem</a>

                <button
                  type="button"
                  className="menuPanelLink menuPanelExpandable"
                  aria-expanded={menuSubOpen === 'treatments'}
                  onClick={() => setMenuSubOpen((previous) => (previous === 'treatments' ? null : 'treatments'))}
                >
                  Våra behandlingar
                  <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" className={menuSubOpen === 'treatments' ? 'rotated' : ''} />
                </button>
                {menuSubOpen === 'treatments' && (
                  <ul className="menuPanelSubList">
                    {treatments.map(([title]) => (
                      <li key={title}>
                        <a href={`/behandlingar/${treatmentSlugs[title] ?? title.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>{title}</a>
                      </li>
                    ))}
                  </ul>
                )}

                <a href="/omdomen" className="menuPanelLink" onClick={() => setMenuOpen(false)}>Omdömen</a>

               

             
                <a href="/om-oss" className="menuPanelLink" onClick={() => setMenuOpen(false)}>Om oss</a>
                <a href="/kontakt" className="menuPanelLink" onClick={() => setMenuOpen(false)}>Kontakt</a>
              </nav>
            </div>

            <div className="menuPanelFooter">
            
              <a href="/boka-tid" className="menuPanelFooterLink" onClick={() => setMenuOpen(false)}>Boka tid</a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .siteHeader { position: relative; z-index: 80; padding-top: 26px; background: transparent; }
        .nav { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 26px; }
        .navGroup { display: flex; align-items: center; gap: 30px; text-transform: uppercase; font-size: 14px; letter-spacing: .03em; }
        .navGroup a { color: #fff; opacity: .92; display: inline-flex; align-items: center; gap: 5px; }
        .navGroup a:hover { opacity: 1; }
        .navGroup.right { justify-content: flex-end; }
        .navDropdownTrigger, .iconBtn { background: none; border: 0; color: #fff; cursor: pointer; font-family: var(--font-montserrat), sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: .03em; padding: 0; }
        .navDropdownTrigger { display: inline-flex; align-items: center; gap: 5px; }
        .navDropdownTrigger.isOpen { opacity: .8; }
        .navDropdownTrigger.isOpen .chev { transform: rotate(180deg); }
        .iconBtn { display: inline-flex; align-items: center; gap: 8px; }
        .iconBtn.isOpen { opacity: .8; }
        .iconBtn i { font-size: 18px; line-height: 1; }
        .icon { font-size: 25px; line-height: 1; }
        .chev { display: inline-flex; align-items: center; justify-content: center; width: 24px; margin-left: 3px; line-height: 1; opacity: .85; transition: transform .2s ease; }
        .brand { text-align: center; display: flex; flex-direction: column; align-items: center; line-height: 1; color: #fff; letter-spacing: .13em; font-size: 12px; }
        .brandWord { font-family: var(--font-montserrat), sans-serif; font-size: 19px; letter-spacing: .16em; }
        .brand small { font-size: 7px; margin-top: 5px; letter-spacing: .35em; opacity: .8; }
        .siteHeader.menuOpen { background: #f7f6f0; padding-bottom: 20px; transition: background-color .2s ease; }
        .siteHeader.menuOpen .navGroup a, .siteHeader.menuOpen .navDropdownTrigger, .siteHeader.menuOpen .iconBtn, .siteHeader.menuOpen .brand { color: var(--ink); }
        .siteHeader.menuOpen .brandWord { color: var(--gold); }
        .siteHeader.searchBg { background: #fff; transition: background-color .2s ease; }
        .siteHeader.searchBg .navGroup a, .siteHeader.searchBg .navDropdownTrigger, .siteHeader.searchBg .iconBtn, .siteHeader.searchBg .brand { color: var(--ink); }
        .siteHeader.searchBg .brandWord { color: var(--gold); }

        .searchOverlay { position: relative; z-index: 60; background: #f4ead9; padding: 24px 0; }
        .searchOverlayForm { display: flex; align-items: center; background: #fff; border-radius: 2px; padding: 4px 4px 4px 24px; }
        .searchOverlayInput { flex: 1; border: 0; outline: none; background: transparent; font-family: var(--font-montserrat), sans-serif; font-size: 16px; color: var(--ink); padding: 16px 12px; }
        .searchOverlayInput::placeholder { color: #8a8a82; }
        .searchOverlaySubmit { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border: 0; background: transparent; color: var(--gold, #b08d57); cursor: pointer; }
        .searchOverlaySubmit:hover { opacity: .8; }

        .treatmentsOverlay { position: fixed; inset: 0; z-index: 40; background: #f7f6f0; padding-top: 120px; overflow-y: auto; }
        .treatmentsOverlayList { list-style: none; margin: 0; padding: 0 0 0 6.5%; max-width: 900px; }
        .treatmentsOverlayList li { border-bottom: 1px solid var(--line); }
        .treatmentsOverlayList li:first-child { border-top: 1px solid var(--line); }
        .treatmentsOverlayList a { display: flex; align-items: center; padding: 22px 40px 22px 0; max-width: 820px; color: var(--ink); font-size: 20px; font-weight: 600; }
        .treatmentsOverlayList a:hover { color: var(--gold); }
        @media (max-width: 900px) {
          .siteHeader { padding-top: 18px; }
          .nav { grid-template-columns: 1fr auto; gap: 18px; }
          .navGroup.left { display: none; }
          .brand { justify-self: start; }
          .navGroup.right { display: flex; justify-content: flex-end; gap: 18px; }
        }
        @media (max-width: 560px) {
          .nav { width: calc(100% - 28px); gap: 12px; }
          .brandWord { font-size: 16px; }
          .brand small { font-size: 6px; }
          .navGroup.right { gap: 12px; }
          .iconBtn { font-size: 11px; gap: 5px; }
          .iconBtn svg { width: 19px; height: 19px; }
          .searchOverlay { padding: 16px 0; }
          .treatmentsOverlay { padding-top: 90px; }
          .treatmentsOverlayList { padding-left: 24px; }
          .treatmentsOverlayList a { padding: 16px 20px 16px 0; font-size: 16px; }
          .searchOverlayForm { padding-left: 16px; }
          .searchOverlayInput { font-size: 15px; padding: 13px 8px; }
        }

        .menuPanelOverlay { position: fixed; inset: 0; z-index: 100; display: flex; justify-content: flex-end; }
        .menuPanelBackdrop { position: absolute; inset: 0; background: rgba(30, 28, 24, 0.45); border: 0; cursor: pointer; padding: 0; }
        .menuPanel { position: relative; z-index: 1; width: 55%; max-width: 780px; min-width: 320px; height: 100%; background: #f7f6f0; display: flex; flex-direction: column; }
        .menuPanelClose { position: absolute; top: 28px; right: 40px; background: none; border: 0; color: var(--ink); cursor: pointer; padding: 4px; line-height: 0; z-index: 2; }
        .menuPanelClose:hover { opacity: .7; }
        .menuPanelScroll { flex: 1; overflow-y: auto; padding: 90px 64px 30px; }
        .menuPanelList { display: flex; flex-direction: column; }
        .menuPanelLink { display: flex; align-items: center; justify-content: space-between; width: 100%; background: none; border: 0; border-bottom: 1px solid var(--line); color: var(--ink); text-align: left; font-family: var(--font-montserrat), sans-serif; font-size: 26px; font-weight: 500; padding: 22px 4px; cursor: pointer; text-decoration: none; }
        .menuPanelLink:first-child { border-top: 1px solid var(--line); }
        .menuPanelLink:hover { color: var(--gold); }
        .menuPanelExpandable svg { opacity: .6; flex-shrink: 0; transition: transform .2s ease; }
        .menuPanelExpandable svg.rotated { transform: rotate(90deg); }
        .menuPanelSubList { list-style: none; margin: 0; padding: 6px 0 14px 16px; }
        .menuPanelSubList a { display: block; padding: 12px 4px; color: var(--ink); opacity: .8; font-size: 17px; text-decoration: none; }
        .menuPanelSubList a:hover { opacity: 1; color: var(--gold); }
        .menuPanelFooter { background: #f4ead9; min-height: 150px; padding: 52px 64px 54px; display: flex; flex-direction: column; gap: 14px; }
        .menuPanelFooterLink { color: var(--ink); font-family: var(--font-montserrat), sans-serif; font-size: 15px; text-decoration: none; width: fit-content; }
        .menuPanelFooterLinkActive { color: var(--gold); font-weight: 600; border-bottom: 1px solid var(--gold); padding-bottom: 3px; }
        @media (max-width: 900px) {
          .menuPanel { width: 100%; max-width: none; }
          .menuPanelScroll { padding: 80px 28px 24px; }
          .menuPanelFooter { min-height: 150px; padding: 52px 28px 54px; }
          .menuPanelClose { right: 24px; }
          .menuPanelLink { font-size: 21px; }
        }
      `}</style>
    </div>
  );
}