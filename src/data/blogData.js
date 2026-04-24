import { siteMeta } from "./sharedSiteData.js";

const blogUpdatedAt = siteMeta.contentUpdatedAt;

export const blogPosts = [
  {
    slug: "tasinma-oncesi-kontrol-listesi",
    title: "Taşınmadan 72 Saat Önce Tamamlanması Gerekenler",
    category: "Planlama",
    cover: {
      label: "Planlama Rehberi",
      gradient: "linear-gradient(135deg, #0f2f36, #0f7b78 58%, #d79a4a)"
    },
    date: "25 Mart 2026",
    publishedAt: "2026-03-25",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Taşınma gününe son üç gün kala tamamlanacak doğru hazırlıklar, gün içindeki karmaşayı ciddi biçimde azaltır.",
    sections: [
      {
        heading: "İlk olarak erişim bilgisini netleştirin",
        text: "Apartman giriş çıkış saatleri, bina asansörü kullanımı, kamyon park alanı ve kat bilgisi son güne bırakılmazsa taşıma daha rahat ilerler."
      },
      {
        heading: "Acil ihtiyaç kolisini ayrı tutun",
        text: "İlk gün lazım olacak mutfak eşyaları, kişisel bakım ürünleri, şarj cihazları ve temel kıyafetleri ayrı toplamak yeni eve geçişi kolaylaştırır."
      },
      {
        heading: "Taşıma detaylarını tek listede toplayın",
        text: "Adresler, telefonlar, tarih, kat bilgisi ve özel notların tek bir belgede olması hem sizin hem taşıma ekibinin işini kolaylaştırır."
      }
    ]
  },
  {
    slug: "asansorlu-tasima-ne-zaman-gerekli",
    title: "Asansörlü Taşıma Hangi Binalarda Gerçekten Avantaj Sağlar?",
    category: "Hizmet Rehberi",
    cover: {
      label: "Asansörlü Sistem",
      gradient: "linear-gradient(135deg, #163542, #3b6f81 60%, #d79a4a)"
    },
    date: "20 Mart 2026",
    publishedAt: "2026-03-20",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Her taşınmada şart değil; ama bazı binalarda asansörlü sistem hem süreyi hem darbe riskini ciddi biçimde azaltır.",
    sections: [
      {
        heading: "Yüksek katlı yapılarda zaman kazandırır",
        text: "Çok katlı binalarda eşyanın merdiven boşluğundan taşınması yerine cepheden indirilmesi toplam operasyon süresini belirgin şekilde kısaltabilir."
      },
      {
        heading: "Dar merdivenli binalarda riski düşürür",
        text: "Manevrası zor merdivenlerde eşyanın duvarlara, korkuluklara veya dönüş noktalarına sürtünme ihtimali arttığından asansörlü sistem daha güvenli hale gelir."
      },
      {
        heading: "Uygunluk kararı bina özelinde verilir",
        text: "Cephe açıklığı, yol yaklaşımı, elektrik hattı durumu ve güvenli kurulum alanı incelenmeden asansörlü taşımanın uygun olup olmadığı söylenemez."
      }
    ]
  },
  {
    slug: "sehirlerarasi-nakliyatta-en-sik-hatalar",
    title: "Şehirlerarası Taşınmada Zaman Kaybettiren 3 Yaygın Hata",
    category: "Uzman Görüşü",
    cover: {
      label: "Uzun Yol Rehberi",
      gradient: "linear-gradient(135deg, #15242b, #29444d 58%, #0f7b78)"
    },
    date: "14 Mart 2026",
    publishedAt: "2026-03-14",
    updatedAt: blogUpdatedAt,
    readTime: "5 dk",
    excerpt: "Uzun yol taşımalarında çoğu aksaklık aynı birkaç noktadan doğuyor; bu üç hata önceden görülürse süreç çok daha rahat yönetiliyor.",
    sections: [
      {
        heading: "Adres ve kat bilgisini eksik vermek",
        text: "Başlangıç ve varış noktasındaki kat yapısı, bina erişimi ve asansör durumu net değilse teslim günü planı gereksiz şekilde uzar."
      },
      {
        heading: "Uzun yol için standart paketlemeyle yetinmek",
        text: "Şehir içi taşımaya uygun görünen bazı ambalaj yöntemleri uzun yolda yeterli olmayabilir; özellikle beyaz eşya ve kırılacak ürünlerde ekstra koruma gerekir."
      },
      {
        heading: "Teslim penceresini son güne bırakmak",
        text: "Varış adresinde anahtar teslimi, apartman girişi, bina asansörü ve araç yaklaşımı önceden konuşulmazsa uzun yolun sonunda ek bekleme yaşanabilir."
      }
    ]
  },
  {
    slug: "ofis-tasima-surecinde-kesinti-nasil-azaltilir",
    title: "Ofis Taşırken İş Akışı Nasıl Daha Az Etkilenir?",
    category: "Kurumsal Taşıma",
    cover: {
      label: "Kurumsal Taşıma",
      gradient: "linear-gradient(135deg, #24392f, #4a7868 58%, #d79a4a)"
    },
    date: "10 Mart 2026",
    publishedAt: "2026-03-10",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Kurumsal taşınmalarda asıl mesele yalnızca eşyayı taşımak değil, işin durma süresini mümkün olduğunca kısaltmaktır.",
    sections: [
      {
        heading: "Departman bazlı listeleme yapın",
        text: "Her masanın, dolabın ve ekipmanın hangi departmana ait olduğu önceden işaretlenirse yeni ofiste kurulum çok daha hızlı tamamlanır."
      },
      {
        heading: "Elektronikleri ayrı akışta yönetin",
        text: "Bilgisayar, monitör, yazıcı ve ağ cihazlarını genel kolilerle değil, hassas ekipman yaklaşımıyla taşımak kurulumda zaman kazandırır."
      },
      {
        heading: "Kesin görev sırası oluşturun",
        text: "Hangi bölümün ne zaman söküleceği, taşınacağı ve yeniden kurulacağı net olursa iş kaybı ve iletişim dağınıklığı azalır."
      }
    ]
  },
  {
    slug: "paketleme-kalitesi-neden-onemli",
    title: "Doğru Paketleme Taşınmanın Sonucunu Neden Değiştirir?",
    category: "Ambalajlama",
    cover: {
      label: "Koruyucu Paketleme",
      gradient: "linear-gradient(135deg, #8a6537, #d79a4a 52%, #fbf6ee)"
    },
    date: "6 Mart 2026",
    publishedAt: "2026-03-06",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Taşımanın sorunsuz geçmesinde farkı çoğu zaman kamyon değil, yüklemeden önce yapılan ambalaj kalitesi yaratır.",
    sections: [
      {
        heading: "Hasar riski yüklemeden önce başlar",
        text: "Köşe koruması, battaniye, streç ve koli düzeni doğru seçilmezse araç içi sabitleme iyi olsa bile darbe riski artar."
      },
      {
        heading: "Her eşya aynı malzemeyle korunmaz",
        text: "Cam ürün, beyaz eşya, tekstil ve büyük mobilyalar için aynı ambalajı kullanmak pratik görünse de koruma kalitesini düşürür."
      },
      {
        heading: "Yeni evde yerleşimi de hızlandırır",
        text: "Etiketli ve oda bazlı paketleme yalnızca koruma sağlamaz; yeni adreste açma ve yerleştirme süresini de kısaltır."
      }
    ]
  },
  {
    slug: "nakliyat-teklifinde-mutlaka-sorulmasi-gerekenler",
    title: "Nakliyat Teklifi Almadan Önce Netleştirmeniz Gereken Başlıklar",
    category: "Teklif Rehberi",
    cover: {
      label: "Teklif Rehberi",
      gradient: "linear-gradient(135deg, #47223c, #8b3f73 58%, #f8f2e7)"
    },
    date: "2 Mart 2026",
    publishedAt: "2026-03-02",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Doğru teklif, doğru sorularla başlar. İlk görüşmede netleşmesi gereken temel başlıkları kısa bir çerçevede topladık.",
    sections: [
      {
        heading: "Kat ve erişim bilgisi",
        text: "Binanın kat yapısı, bina asansörü kullanımı ve kamyonun yaklaşım mesafesi teklif kalemlerini doğrudan değiştirir."
      },
      {
        heading: "Eşya yoğunluğu",
        text: "Sadece oda sayısı söylemek yeterli olmaz; büyük mobilyalar, beyaz eşyalar ve kırılacak ürünler ayrıca belirtilmelidir."
      },
      {
        heading: "Ek hizmet kapsamı",
        text: "Montaj, depolama, ek paketleme veya asansörlü taşıma gerekip gerekmediği ilk görüşmede konuşulursa teklif daha gerçekçi olur."
      }
    ]
  },
  {
    slug: "yeni-eve-yerlesirken-oncelik-sirasi",
    title: "Yeni Eve Geçince Önce Hangi Eşyalar Yerleşmeli?",
    category: "Yerleşim",
    cover: {
      label: "Yerleşim Düzeni",
      gradient: "linear-gradient(135deg, #754c24, #b67c3b 58%, #f8f2e7)"
    },
    date: "28 Şubat 2026",
    publishedAt: "2026-02-28",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Yeni evde ilk saatleri daha rahat geçirmek için yerleşim sırasını doğru belirlemek büyük fark yaratır.",
    sections: [
      {
        heading: "İlk gün ihtiyaçlarını öne alın",
        text: "Mutfak temel seti, kişisel bakım ürünleri, çocuk eşyaları ve günlük kıyafetler ilk açılacak koliler arasında olmalıdır."
      },
      {
        heading: "Ana mobilyaları önce konumlandırın",
        text: "Yatak, koltuk, gardırop ve beyaz eşyalar yerleşmeden küçük kolileri açmak alanı daraltır ve gereksiz karmaşa yaratır."
      },
      {
        heading: "Oda oda ilerleyin",
        text: "Tüm kolileri aynı anda açmak yerine mutfak, yatak odası ve salon sırasıyla ilerlemek yerleşimi daha yönetilebilir hale getirir."
      }
    ]
  },
  {
    slug: "tasinma-gununde-apartman-yonetimiyle-neler-konusulmali",
    title: "Taşınma Öncesi Apartman Yönetimiyle Hangi Konular Netleşmeli?",
    category: "Apartman Süreci",
    cover: {
      label: "Apartman Süreci",
      gradient: "linear-gradient(135deg, #163542, #3b6f81 58%, #d79a4a)"
    },
    date: "24 Şubat 2026",
    publishedAt: "2026-02-24",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Site ve apartman taşınmalarında kısa bir ön görüşme, gün içindeki beklemelerin ve komşuluk kaynaklı sorunların büyük bölümünü önler.",
    sections: [
      {
        heading: "Saat aralığını netleştirin",
        text: "Giriş çıkış saatleri, sessizlik kuralları ve taşınmaya izin verilen zaman aralığı operasyon planını doğrudan etkiler."
      },
      {
        heading: "Asansör kullanımını önceden sorun",
        text: "Bina asansörü kullanılacaksa rezervasyon, koruma uygulaması ve yük limiti bilgisi önceden öğrenilmelidir."
      },
      {
        heading: "Araç yaklaşımını teyit edin",
        text: "Kamyonun veya dış asansörün bina önüne ne kadar yaklaşabileceği önceden netleşirse yükleme günü daha hızlı ilerler."
      }
    ]
  },
  {
    slug: "beyaz-esya-tasirken-dikkat-edilmesi-gerekenler",
    title: "Beyaz Eşya Taşınırken En Sık Atlanan Detaylar",
    category: "Eşya Koruma",
    cover: {
      label: "Eşya Koruma",
      gradient: "linear-gradient(135deg, #3a3f48, #6a7484 58%, #f8f2e7)"
    },
    date: "19 Şubat 2026",
    publishedAt: "2026-02-19",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Beyaz eşya taşımasında gözden kaçan küçük ayrıntılar, yeni adreste kullanım güvenliğini ve performansı doğrudan etkileyebilir.",
    sections: [
      {
        heading: "Ön hazırlık şarttır",
        text: "Fiş çekme, iç boşaltma, raf sabitleme ve bağlantı parçalarının düzenlenmesi taşıma öncesinde tamamlanmalıdır."
      },
      {
        heading: "Taşıma pozisyonu önemlidir",
        text: "Özellikle buzdolabı ve çamaşır makinesi gibi cihazlarda uygun taşıma pozisyonuna dikkat edilmesi güvenlik açısından kritiktir."
      },
      {
        heading: "Kurulum ve bekleme süresi planlanmalı",
        text: "Yeni adreste cihazın nereye yerleşeceği ve kullanım öncesinde ne kadar bekletileceği önceden bilinmelidir."
      }
    ]
  },
  {
    slug: "sehirlerarasi-tasinmada-teslim-gunu-nasil-planlanir",
    title: "Şehirlerarası Taşınmada Teslim Günü Nasıl Daha Kontrollü Geçer?",
    category: "Uzun Yol",
    cover: {
      label: "Teslim Planı",
      gradient: "linear-gradient(135deg, #20424b, #0f7b78 58%, #d79a4a)"
    },
    date: "15 Şubat 2026",
    publishedAt: "2026-02-15",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Uzun yol taşımalarda asıl rahatlık, teslim günü başlamadan önce yapılan hazırlıktan gelir.",
    sections: [
      {
        heading: "Varış adresini yeniden teyit edin",
        text: "Bina erişimi, kat bilgisi, anahtar teslim detayı ve araç park alanı en az bir gün önce yeniden netleştirilmelidir."
      },
      {
        heading: "Saat penceresi belirleyin",
        text: "Dakik saat yerine gerçekçi bir teslim aralığı belirlemek hem ekip hem alıcı taraf için daha doğru bir beklenti oluşturur."
      },
      {
        heading: "İndirme sırasını planlayın",
        text: "Teslim sonrası önce hangi eşyaların indirileceği önceden belirlenirse yerleşim çok daha hızlı ve düzenli ilerler."
      }
    ]
  },
  {
    slug: "parca-esya-tasimada-maliyet-nasil-dengelenir",
    title: "Parça Eşya Taşımada Maliyeti Dengelerken Neye Bakılmalı?",
    category: "Parça Eşya",
    cover: {
      label: "Parça Eşya",
      gradient: "linear-gradient(135deg, #27423c, #4f8b7b 58%, #f8f2e7)"
    },
    date: "11 Şubat 2026",
    publishedAt: "2026-02-11",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Az hacimli taşımalarda hem güvenliği hem maliyeti dengelemek için birkaç temel noktaya dikkat etmek yeterlidir.",
    sections: [
      {
        heading: "Hacmi doğru tarif edin",
        text: "Taşınacak ürünlerin ölçüsü, adedi ve hassasiyet seviyesi net paylaşıldığında doğru plan daha kolay oluşturulur."
      },
      {
        heading: "Teslim esnekliği avantaj sağlar",
        text: "Takvimi daha geniş planlanabilen taşımalarda maliyet ve araç organizasyonu daha dengeli kurulabilir."
      },
      {
        heading: "Paketleme seviyesini doğru seçin",
        text: "Her ürün için aynı koruma düzeyi gerekmeyebilir; eşyanın niteliğine göre doğru ambalaj seçmek bütçeyi dengeler."
      }
    ]
  },
  {
    slug: "tadilat-surecinde-esya-depolama-ne-zaman-mantikli",
    title: "Tadilat Döneminde Eşya Depolama Hangi Durumlarda Gerçekten İşe Yarar?",
    category: "Depolama",
    cover: {
      label: "Depolama Rehberi",
      gradient: "linear-gradient(135deg, #203443, #45697d 58%, #d79a4a)"
    },
    date: "7 Şubat 2026",
    publishedAt: "2026-02-07",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Her tadilatta gerekli olmayabilir; ama bazı durumlarda eşya depolama hem iş hızını hem korumayı ciddi biçimde iyileştirir.",
    sections: [
      {
        heading: "Çalışma alanını açar",
        text: "Büyük mobilyalar ve beyaz eşyalar ustaların hareket alanını daraltıyorsa geçici depolama tadilat hızını belirgin şekilde artırır."
      },
      {
        heading: "Toz ve darbeyi azaltır",
        text: "Özellikle kırma, boya veya zemin yenileme yapılacak işlerde eşyaların ortamda kalması daha fazla risk yaratabilir."
      },
      {
        heading: "Yerleşim takvimini rahatlatır",
        text: "Yeni yerleşim tarihi kaydığında veya tadilat uzadığında depolama hizmeti pratik bir ara çözüm sunar."
      }
    ]
  },
  {
    slug: "nakliyat-firmasi-secerken-ilk-5-kriter",
    title: "Nakliyat Firması Seçerken İlk Bakılması Gereken 5 Nokta",
    category: "Seçim Rehberi",
    cover: {
      label: "Firma Seçimi",
      gradient: "linear-gradient(135deg, #50321c, #9e6530 58%, #f8f2e7)"
    },
    date: "3 Şubat 2026",
    publishedAt: "2026-02-03",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Taşınmanın rahat geçmesinde firma seçimi belirleyicidir. İlk görüşmede bakılması gereken temel noktaları özetledik.",
    sections: [
      {
        heading: "İletişim netliği",
        text: "Süreç açık anlatılıyor, soru sorulduğunda net cevap veriliyorsa operasyon günü sürpriz yaşama ihtimali azalır."
      },
      {
        heading: "Hizmet kapsamı",
        text: "Paketleme, montaj, depolama ve asansörlü sistem gibi ihtiyaçlara cevap verebilmesi firmanın planlama gücünü gösterir."
      },
      {
        heading: "Planlama yaklaşımı",
        text: "Sadece fiyat vermek yerine operasyon sırası ve saha koşullarını konuşan firmalar genelde daha güven verici olur."
      }
    ]
  },
  {
    slug: "tasinma-stresini-azaltan-pratik-rutinler",
    title: "Taşınma Stresini Azaltan Küçük Ama İşe Yarayan Rutinler",
    category: "Pratik Bilgiler",
    cover: {
      label: "Pratik Rutinler",
      gradient: "linear-gradient(135deg, #193847, #3d7287 58%, #d79a4a)"
    },
    date: "30 Ocak 2026",
    publishedAt: "2026-01-30",
    updatedAt: blogUpdatedAt,
    readTime: "3 dk",
    excerpt: "Büyük değişimi daha rahat yönetmek için küçük günlük rutinler beklenenden daha fazla fark yaratabilir.",
    sections: [
      {
        heading: "Günlük küçük hazırlıklar yapın",
        text: "Her gün yalnızca bir oda veya tek bir görev tamamlamak, tüm hazırlığın son güne yığılmasını önler."
      },
      {
        heading: "Karar sayısını azaltın",
        text: "Taşınma günü için öncelikleri önceden belirlemek, gün içinde sürekli karar vermenin getirdiği yorgunluğu azaltır."
      },
      {
        heading: "Kısa bir iletişim notu hazırlayın",
        text: "Adres, telefon, tarih ve kritik notları tek bir yerde toplamak hem aile içinde hem taşıma ekibiyle iletişimi kolaylaştırır."
      }
    ]
  },
  {
    slug: "ofis-tasimada-ekipman-envanteri-neden-gerekli",
    title: "Ofis Taşımada Ekipman Envanteri Neden Bu Kadar Önemli?",
    category: "Kurumsal Taşıma",
    cover: {
      label: "Ekipman Envanteri",
      gradient: "linear-gradient(135deg, #1b1b1b, #474747 58%, #f8f2e7)"
    },
    date: "26 Ocak 2026",
    publishedAt: "2026-01-26",
    updatedAt: blogUpdatedAt,
    readTime: "4 dk",
    excerpt: "Kurumsal taşınmalarda envanter listesi yalnızca sayım için değil, kurulum hızını ve düzenini korumak için de kritik rol oynar.",
    sections: [
      {
        heading: "Kurulum sırasını kolaylaştırır",
        text: "Hangi ekipmanın hangi departmana ait olduğu net olduğunda yeni ofiste toparlanma ve kurulum akışı çok daha hızlı ilerler."
      },
      {
        heading: "Karışıklık riskini azaltır",
        text: "Listeleme ile etiketleme birlikte yapıldığında teslim sırasında kutuların ve ekipmanların karışma ihtimali belirgin şekilde düşer."
      },
      {
        heading: "Sorumluluk takibini sadeleştirir",
        text: "Operasyon boyunca hangi ekipmanın hangi alandan çıktığı ve nereye yerleşeceği çok daha kolay takip edilir."
      }
    ]
  }
];
