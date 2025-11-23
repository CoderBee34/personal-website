import type { Translation } from '../types';

export const tr: Translation = {
  nav: {
    about: 'Hakkımda',
    experience: 'Deneyim',
    projects: 'Projeler',
    skills: 'Yetenekler',
    contactMe: 'İletişim',
  },
  hero: {
    availableBadge: 'İletişime geçmekten çekinmeyin',
    title: 'Akıllı web çözümleri ',
    titleHighlight: 'geliştiriyorum.',
    description:
      'Ben Ali, Yapay Zeka alanında uzmanlaşmış son sınıf Bilgisayar Mühendisliği öğrencisi ve Full-Stack Geliştiriciyim. .NET Core, Java Spring ve React kullanarak ölçeklenebilir mikroservisler, kullanıcı dostu arayüzler ve akıllı sistemler geliştiriyorum.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-posta',
  },
  about: {
    title: 'Hakkımda',
    paragraph1:
      "Özyeğin Üniversitesi'nde Yapay Zeka alanında uzmanlaşmış, 3.78/4.00 CGPA ile Son Sınıf Bilgisayar Mühendisliği öğrencisiyim.",
    paragraph2:
      'Şu anda Full-Stack Developer olarak çalışıyor, karmaşık backend mimarileri ile kullancı dostu arayüzler geliştiriyorum. Deneyimim .NET\'te mikroservisleri optimize etmekten modern React ön yüzler oluşturmaya kadar her şeyi içeriyor.',
    paragraph3:
      'Kodlama yapmadığım zamanlarda, beni Salzburg Kulübü ile futbol sahasında veya İşletme ve Ekonomi Kulübü faaliyetlerine katılırken bulabilirsiniz.',
    education: 'Eğitim',
    university: 'Özyeğin Üniversitesi',
    degree: 'Lisans, Bilgisayar Bilimleri',
    specialization: 'Yapay Zeka Uzmanlığı',
    cgpa: 'CGPA: 3.78/4.00',
    honors: 'Onurlar: Tam Burs (Ulusal İlk 2000), Yüksek Onur Öğrencisi',
    date: 'Eyl 2021 - Devam Ediyor',
  },
  experience: {
    title: 'Deneyim',
    partTime: 'Yarı Zamanlı',
    internship: 'Staj',
    academic: 'Akademik',
    experiences: [
      {
        role: 'Yarı Zamanlı Full-Stack Geliştirici',
        company: 'Gelecek Varlık Yönetimi',
        location: 'İstanbul, Türkiye',
        type: 'Yarı Zamanlı',
        date: 'Eki 2025 - Devam Ediyor',
        description: [
          'Kıdemli mühendisler tarafından atanan çeşitli Backend ve Frontend geliştirme görevlerini yerine getirdim.',
          'Mevcut mikroservisleri bakım ve optimize ettim.',
          'Platform kararlılığını sağlamak için çeşitli karmaşık Frontend hatalarını çözdüm.',
        ],
      },
      {
        role: 'Full-Stack Geliştirici Stajyeri',
        company: 'Gelecek Varlık Yönetimi',
        location: 'İstanbul, Türkiye',
        type: 'Staj',
        date: 'Tem 2025 - Şub 2025',
        description: [
          '.NET Core (N-Tier mimarisi) kullanarak JWT token kimlik doğrulama ve SQL Server ile bir Backend mikroservisi geliştirdim.',
          'Material UI ve Tanstack Query gibi modern kütüphaneler kullanarak React ve TypeScript ile Frontend oluşturdum.',
        ],
      },
      {
        role: 'Yazılım Mühendisliği Stajyeri',
        company: 'Cumhurbaşkanlığı Dijital Dönüşüm Ofisi',
        location: 'Ankara, Türkiye',
        type: 'Staj',
        date: 'Tem 2024 - Ağu 2024',
        description: [
          'Kullanıcı kaydına ve veri kalıcılığına izin veren bir ASP.NET Core web uygulaması geliştirdim.',
          'Fatura verilerini (tarih, harcama tutarı) doğrudan veritabanına okumak ve kaydetmek için web kamerası tabanlı bir QR kod tarayıcı uyguladım.',
        ],
      },
      {
        role: 'Lisans Matematik Asistanı',
        company: 'Özyeğin Üniversitesi',
        location: 'İstanbul, Türkiye',
        type: 'Akademik',
        date: 'Tem 2023 - Eyl 2024',
        description: [
          'Lisans öğrencilerine matematik problemlerini çözmede ve ders kavramlarını anlamada yardımcı oldum.',
        ],
      },
    ],
  },
  projects: {
    title: 'Öne Çıkan Projeler',
    viewOnGithub: "GitHub'da Görüntüle",
    items: [
      {
        title: 'Spring Ders Projesi',
        tech: ['Java', 'Spring Boot', 'REST API'],
        description:
          'Spring framework kullanarak temel geliştirme ilkelerini gösteren kapsamlı bir backend projesi. Sağlam veri işleme ile bir araba kiralama API\'si uygulandı.',
      },
      {
        title: 'VeloCar-React',
        tech: ['React', 'Web Geliştirme', 'İşbirliği'],
        description:
          'Web Programlama seçmeli dersi için geliştirilen işbirlikçi grup projesi. Araç yönetimi için modern bir frontend arayüzü içeriyor.',
      },
      {
        title: 'QR Kod Tarayıcı Uygulaması',
        tech: ['ASP.NET Core', 'Webcam API', 'Veritabanı'],
        description:
          'Web kamerası aracılığıyla QR kodlarını tarayarak tarih ve harcama tutarı gibi fatura verilerini kalıcı bir veritabanına otomatik olarak kaydetme yeteneğine sahip web uygulaması.',
      },
    ],
  },
  skills: {
    title: 'Teknik Yetenekler',
    categories: {
      languages: 'Programlama Dilleri',
      frameworks: 'Frameworkler ve Kütüphaneler',
      databases: 'Veritabanları ve Araçlar',
    },
  },
  footer: {
    copyright: 'Ali İlan. React & Tailwind ile geliştirildi.',
  },
};
