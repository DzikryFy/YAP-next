'use client';

import React, { useState, useEffect, useRef } from 'react';

import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { SectionDivider } from '../components/SectionDivider';
import { WhyUs } from '../components/WhyUs';
import { CoreValues } from '../components/CoreValues';
import { EducationalUnits } from '../components/EducationalUnits';
import { Testimonials } from '../components/Testimonials';
import { NewsEvents } from '../components/NewsEvents';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { Modals } from '../components/Modals';
import { EDUCATIONAL_UNITS, UnitItem, NewsItem, CoreValueItem, FeatureItem } from '../data/content';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ppdbOpen, setPpdbOpen] = useState(false);
  const [defaultPpdbUnit, setDefaultPpdbUnit] = useState('mi');
  const [visitOpen, setVisitOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedValue, setSelectedValue] = useState<CoreValueItem | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Prevent duplicate login requests in React 18 Strict Mode
  const loginAttempted = useRef(false);

  useEffect(() => {
    if (loginAttempted.current) return;
    loginAttempted.current = true;

    const handleAutoLogin = async () => {
      try {
        const response = await fetch('/api/login', { method: 'POST' });
        const data = await response.json();

        setIsLoggedIn(Boolean(data?.success || data?.Status === 200));
      } catch (err) {
        console.warn('Auto-login failed; CMS requests will remain disabled:', err);
        setIsLoggedIn(false);
      }
    };

    handleAutoLogin();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: Record<string, string> = {
      'hero': 'hero-section',
      'why-us': 'why-us-section',
      'core-values': 'core-values-section',
      'units': 'units-section',
      'testimonials': 'testimonials-section',
      'news': 'news-section',
      'footer': 'footer-section',
    };

    const targetId = sectionMap[sectionId];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleOpenPPDB = (unitId?: string) => {
    if (unitId) setDefaultPpdbUnit(unitId);
    setPpdbOpen(true);
  };

  const handleSelectUnitById = (unitId: string) => {
    const unit = EDUCATIONAL_UNITS.find((u) => u.id === unitId);
    if (unit) {
      setSelectedUnit(unit);
    } else {
      scrollToSection('units');
    }
  };

  return (
    <div id="yayasan-asih-putera-app" className="min-h-screen flex flex-col bg-[#f4f8f5] selection:bg-[#075B3A] selection:text-white">
      <TopBar 
        onOpenSearch={() => setSearchOpen(true)}
        onSelectNav={(item) => {
          if (item === 'Donasi') alert('Informasi Rekening Donasi & Wakaf Yayasan Asih Putera: BSI 7001234567 a.n. Yayasan Asih Putera');
          else if (item === 'Karier') alert('Informasi Rekrutmen & Karier Guru/Karyawan Yayasan Asih Putera.');
          else if (item === 'Orang Tua') alert('Portal Akademik & Komunikasi Orang Tua Siswa Asih Putera.');
          else if (item === 'Alumni') alert('Ikatan Alumni Asih Putera (IKAP) Lintas Angkatan.');
        }}
      />

      <Header
        onOpenPPDB={() => handleOpenPPDB()}
        onNavigate={scrollToSection}
        onSelectUnit={handleSelectUnitById}
      />

      <main className="flex-1">
        <Hero
          onOpenPPDB={() => handleOpenPPDB()}
          onExplorePrograms={() => scrollToSection('units')}
          isLoggedIn={isLoggedIn}
        />

        <SectionDivider />

        <WhyUs onCardClick={(feature) => setSelectedFeature(feature)} isLoggedIn={isLoggedIn} />

        <SectionDivider />

        <CoreValues onSelectValue={(val) => setSelectedValue(val)} />

        <SectionDivider />

        <EducationalUnits onSelectUnit={(unit) => setSelectedUnit(unit)} isLoggedIn={isLoggedIn} />

        <SectionDivider />

        <Testimonials isLoggedIn={isLoggedIn} />

        <SectionDivider />

        <NewsEvents onSelectNews={(news) => setSelectedNews(news)} isLoggedIn={isLoggedIn} />

        <SectionDivider />

        <CtaSection
          onOpenPPDB={() => handleOpenPPDB()}
          onScheduleVisit={() => setVisitOpen(true)}
        />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectUnit={handleSelectUnitById}
        onOpenPPDB={() => handleOpenPPDB()}
      />

      <Modals
        ppdbOpen={ppdbOpen}
        onClosePPDB={() => setPpdbOpen(false)}
        defaultUnit={defaultPpdbUnit}
        visitOpen={visitOpen}
        onCloseVisit={() => setVisitOpen(false)}
        selectedUnit={selectedUnit}
        onCloseUnit={() => setSelectedUnit(null)}
        selectedNews={selectedNews}
        onCloseNews={() => setSelectedNews(null)}
        selectedValue={selectedValue}
        onCloseValue={() => setSelectedValue(null)}
        selectedFeature={selectedFeature}
        onCloseFeature={() => setSelectedFeature(null)}
        searchOpen={searchOpen}
        onCloseSearch={() => setSearchOpen(false)}
        onSelectUnitFromSearch={(unitId) => handleSelectUnitById(unitId)}
      />
    </div>
  );
}