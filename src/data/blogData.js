import { siteMeta } from "./sharedSiteData.js";

const blogUpdatedAt = siteMeta.contentUpdatedAt;

const baseBlogPosts = [
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
  },
  {
    slug: "kayseri-evden-eve-nakliyat-fiyatlari-neye-gore-degisir",
    title: "Kayseri Evden Eve Nakliyat Fiyatları Neye Göre Değişir?",
    category: "Fiyat Rehberi",
    cover: {
      label: "Kayseri Fiyat Rehberi",
      gradient: "linear-gradient(135deg, #17343a, #0f7b78 58%, #d79a4a)"
    },
    date: "26 Nisan 2026",
    publishedAt: "2026-04-26",
    updatedAt: blogUpdatedAt,
    readTime: "6 dk",
    excerpt: "Kayseri evden eve nakliyat fiyatı; eşya yoğunluğu, kat bilgisi, asansör ihtiyacı, paketleme kapsamı ve mesafeye göre değişir.",
    sections: [
      {
        heading: "Oda sayısı tek başına yeterli değildir",
        text: "Kayseri evden eve nakliyat fiyatı konuşulurken yalnızca 2+1 veya 3+1 bilgisi doğru teklif için yeterli olmaz. Büyük mobilyalar, beyaz eşyalar, kırılacak ürünler, kitap kolileri ve sökülecek mobilyalar operasyon süresini doğrudan etkiler."
      },
      {
        heading: "Kat, asansör ve araç yaklaşımı fiyatı etkiler",
        text: "Talas, Melikgazi veya Kocasinan gibi bölgelerde bina yapısı ve araç park alanı farklılık gösterir. Yüksek kat, dar merdiven, bina asansörü kullanımı veya dış asansör ihtiyacı hem ekip planını hem süreyi değiştirir."
      },
      {
        heading: "Paketleme kapsamı netleşmelidir",
        text: "Sadece taşıma hizmetiyle tam paketleme hizmeti aynı fiyat aralığında değerlendirilmez. Koli, streç, battaniye, kırılacak eşya koruması ve mobilya demontajı teklifin kapsamını belirleyen ana kalemlerdir."
      },
      {
        heading: "Şehir içi ve şehirlerarası taşıma ayrı planlanır",
        text: "Kayseri içi taşımalarda mesafe daha kısa olsa da bina erişimi önemli olur. Şehirlerarası nakliyatta ise rota, yakıt, teslim tarihi, araç içi sabitleme ve uzun yol koruması fiyat üzerinde daha belirleyici hale gelir."
      },
      {
        heading: "Net teklif için hangi bilgiler gerekir?",
        text: "Başlangıç ve varış adresi, kat bilgisi, oda sayısı, eşya yoğunluğu, tarih aralığı, asansör durumu ve ek paketleme ihtiyacı paylaşıldığında daha gerçekçi bir nakliyat teklifi hazırlanabilir."
      }
    ]
  },
  {
    slug: "talas-ev-tasirken-site-yonetimiyle-neler-konusulmali",
    title: "Talas'ta Ev Taşırken Site Yönetimiyle Neler Konuşulmalı?",
    category: "Talas Rehberi",
    cover: {
      label: "Talas Site Taşıması",
      gradient: "linear-gradient(135deg, #203443, #45697d 58%, #d79a4a)"
    },
    date: "26 Nisan 2026",
    publishedAt: "2026-04-26",
    updatedAt: blogUpdatedAt,
    readTime: "5 dk",
    excerpt: "Talas'ta site içi taşınmalarda saat aralığı, asansör kullanımı, araç park alanı ve yönetim kuralları önceden netleşmelidir.",
    sections: [
      {
        heading: "Taşınma saat aralığını öğrenin",
        text: "Talas bölgesindeki birçok sitede taşınma için belirli saat aralıkları uygulanabilir. Yönetimden izin alınmadan kamyonun siteye girmesi veya eşya indirme-bindirme yapılması beklemeye neden olabilir."
      },
      {
        heading: "Bina asansörü ve dış asansör uygunluğunu sorun",
        text: "Bina asansörü kullanılacaksa koruma uygulaması, yük limiti ve rezervasyon bilgisi önceden öğrenilmelidir. Dış asansör gerekiyorsa cephe yaklaşımı, zemin durumu ve araç kurulum alanı ayrıca kontrol edilmelidir."
      },
      {
        heading: "Araç park alanını önceden belirleyin",
        text: "Kamyonun bina girişine yakın durması taşıma süresini ciddi şekilde etkiler. Talas'taki site yoğun yapılarda araç giriş kapısı, güvenlik noktası ve blok önü yaklaşımı taşınma gününden önce konuşulmalıdır."
      },
      {
        heading: "Komşuluk ve ortak alan kurallarını dikkate alın",
        text: "Ortak koridor, merdiven, zemin kaplaması ve kapı girişlerinin korunması hem site yönetimi hem komşular açısından önemlidir. Taşınma planı bu kurallara uygun kurulursa süreç daha sakin ilerler."
      }
    ]
  },
  {
    slug: "melikgazi-ofis-tasima-sureci-nasil-planlanir",
    title: "Melikgazi Ofis Taşıma Süreci Nasıl Planlanır?",
    category: "Melikgazi Ofis",
    cover: {
      label: "Ofis Taşıma Planı",
      gradient: "linear-gradient(135deg, #24392f, #4a7868 58%, #d79a4a)"
    },
    date: "26 Nisan 2026",
    publishedAt: "2026-04-26",
    updatedAt: blogUpdatedAt,
    readTime: "6 dk",
    excerpt: "Melikgazi ofis taşıma sürecinde departman sırası, elektronik ekipman güvenliği, arşiv düzeni ve kurulum planı birlikte hazırlanmalıdır.",
    sections: [
      {
        heading: "Departman bazlı taşıma sırası çıkarın",
        text: "Ofis taşımasında masa, sandalye, dolap ve arşivler rastgele taşınırsa yeni adreste kurulum uzar. Melikgazi'deki iş yerlerinde departman sırası ve yerleşim planı önceden hazırlanmalıdır."
      },
      {
        heading: "Elektronik ekipmanları ayrı yönetin",
        text: "Bilgisayar, monitör, yazıcı, modem ve ağ cihazları hassas ekipman olarak ele alınmalıdır. Kablo, adaptör ve ekipman etiketleri doğru tutulursa yeni ofiste kurulum daha hızlı tamamlanır."
      },
      {
        heading: "Arşiv ve evrak düzenini bozmayın",
        text: "Klasörlerin departman, tarih veya dolap sırasına göre etiketlenmesi ofis taşıma sonrası iş akışını korur. Evrak kolilerinin genel eşya kolileriyle karışmaması özellikle önemlidir."
      },
      {
        heading: "Mesai dışı taşıma seçeneğini değerlendirin",
        text: "İş kaybını azaltmak için taşıma hafta sonu veya mesai sonrası planlanabilir. Bu tercih bina erişimi, güvenlik görevlisi, asansör kullanımı ve ekip müsaitliğiyle birlikte değerlendirilmelidir."
      }
    ]
  },
  {
    slug: "kocasinan-asansorlu-tasima-hangi-binalarda-avantajli",
    title: "Kocasinan Asansörlü Taşıma Hangi Binalarda Avantajlı?",
    category: "Kocasinan Rehberi",
    cover: {
      label: "Asansörlü Taşıma",
      gradient: "linear-gradient(135deg, #163542, #3b6f81 60%, #d79a4a)"
    },
    date: "26 Nisan 2026",
    publishedAt: "2026-04-26",
    updatedAt: blogUpdatedAt,
    readTime: "5 dk",
    excerpt: "Kocasinan'da yüksek kat, dar merdiven, büyük mobilya ve yoğun bina trafiği olan taşınmalarda asansörlü taşıma avantaj sağlayabilir.",
    sections: [
      {
        heading: "Yüksek katlarda süreyi kısaltır",
        text: "Kocasinan bölgesindeki çok katlı yapılarda eşyayı merdivenden taşımak hem zaman alır hem de bina içi trafiği artırır. Dış asansör uygun cephede kurulabiliyorsa taşıma daha hızlı ilerler."
      },
      {
        heading: "Dar merdivenli binalarda hasar riskini azaltır",
        text: "Büyük koltuk, gardırop veya beyaz eşyanın dar dönüşlerden geçirilmesi hem eşya hem bina için risk oluşturur. Asansörlü sistem bu temas noktalarını azaltarak daha kontrollü bir taşıma sağlar."
      },
      {
        heading: "Kurulum alanı mutlaka kontrol edilmelidir",
        text: "Her binada dış asansör kurulumu mümkün olmayabilir. Cephe açıklığı, yol yaklaşımı, elektrik hattı, kaldırım ve güvenli çalışma mesafesi önceden değerlendirilmelidir."
      },
      {
        heading: "Fiyatı etkileyen ana detaylar",
        text: "Kat sayısı, kurulum süresi, eşya yoğunluğu, bina konumu ve taşımanın toplam kapsamı asansörlü taşıma fiyatını etkiler. Bu yüzden ön bilgi ne kadar net olursa teklif de o kadar gerçekçi olur."
      }
    ]
  },
  {
    slug: "kayseri-sehirlerarasi-nakliyatta-esya-guvenligi-nasil-saglanir",
    title: "Kayseri Şehirlerarası Nakliyatta Eşya Güvenliği Nasıl Sağlanır?",
    category: "Şehirlerarası Rehber",
    cover: {
      label: "Eşya Güvenliği",
      gradient: "linear-gradient(135deg, #15242b, #29444d 58%, #0f7b78)"
    },
    date: "26 Nisan 2026",
    publishedAt: "2026-04-26",
    updatedAt: blogUpdatedAt,
    readTime: "6 dk",
    excerpt: "Kayseri çıkışlı şehirlerarası nakliyatta eşya güvenliği; doğru paketleme, araç içi sabitleme, yük sırası ve teslim planıyla sağlanır.",
    sections: [
      {
        heading: "Uzun yol için paketleme seviyesi artırılmalıdır",
        text: "Şehir içi taşımalarda yeterli olan bazı paketleme yöntemleri uzun yolda zayıf kalabilir. Beyaz eşya, cam ürün, mobilya köşeleri ve elektronikler için daha dikkatli koruma gerekir."
      },
      {
        heading: "Araç içi sabitleme taşımanın kalbidir",
        text: "Kayseri'den başka şehre giden araçta eşyaların hareket etmemesi gerekir. Yük sırası, ağırlık dağılımı, sabitleme noktaları ve koruyucu ayırıcılar eşya güvenliği açısından önemlidir."
      },
      {
        heading: "Teslim günü planı önceden kurulmalıdır",
        text: "Varış adresindeki kat bilgisi, araç park alanı, bina giriş saati ve anahtar teslimi önceden konuşulursa yol sonrası bekleme azalır. Bu da hem ekip hem müşteri için daha rahat bir teslim sağlar."
      },
      {
        heading: "Bilgi akışı güven duygusunu artırır",
        text: "Yükleme, çıkış, yol ve teslim aşamalarında düzenli iletişim kurulması şehirlerarası nakliyat sürecini daha öngörülebilir hale getirir. Müşteri ne zaman ne olacağını bildiğinde süreç daha güvenli hissedilir."
      }
    ]
  }
];

const seoTitleOverrides = {
  "tasinma-oncesi-kontrol-listesi": "Kayseri'de Taşınmadan 72 Saat Önce Tamamlanması Gerekenler",
  "asansorlu-tasima-ne-zaman-gerekli": "Kayseri'de Asansörlü Taşıma Hangi Binalarda Avantaj Sağlar?",
  "sehirlerarasi-nakliyatta-en-sik-hatalar": "Kayseri Şehirlerarası Nakliyatta Zaman Kaybettiren 3 Hata",
  "ofis-tasima-surecinde-kesinti-nasil-azaltilir": "Kayseri Ofis Taşıma Sürecinde İş Akışı Nasıl Korunur?",
  "paketleme-kalitesi-neden-onemli": "Kayseri Ev Taşıma Sürecinde Doğru Paketleme Neden Önemli?",
  "nakliyat-teklifinde-mutlaka-sorulmasi-gerekenler": "Kayseri Nakliyat Teklifi Almadan Önce Sorulması Gerekenler",
  "yeni-eve-yerlesirken-oncelik-sirasi": "Kayseri'de Yeni Eve Geçince Önce Hangi Eşyalar Yerleşmeli?",
  "tasinma-gununde-apartman-yonetimiyle-neler-konusulmali": "Kayseri'de Taşınma Öncesi Apartman Yönetimiyle Konuşulacaklar",
  "beyaz-esya-tasirken-dikkat-edilmesi-gerekenler": "Kayseri Evden Eve Nakliyatta Beyaz Eşya Taşırken Dikkat Edilecekler",
  "sehirlerarasi-tasinmada-teslim-gunu-nasil-planlanir": "Kayseri Şehirlerarası Taşınmada Teslim Günü Nasıl Planlanır?",
  "parca-esya-tasimada-maliyet-nasil-dengelenir": "Kayseri Parça Eşya Taşımada Maliyet Nasıl Dengelenir?",
  "tadilat-surecinde-esya-depolama-ne-zaman-mantikli": "Kayseri'de Tadilat Sürecinde Eşya Depolama Ne Zaman Mantıklı?",
  "nakliyat-firmasi-secerken-ilk-5-kriter": "Kayseri Nakliyat Firması Seçerken Bakılması Gereken 5 Kriter",
  "tasinma-stresini-azaltan-pratik-rutinler": "Kayseri'de Taşınma Stresini Azaltan Pratik Rutinler",
  "ofis-tasimada-ekipman-envanteri-neden-gerekli": "Kayseri Ofis Taşımada Ekipman Envanteri Neden Gerekli?"
};

const relatedServiceBySlug = {
  "asansorlu-tasima-ne-zaman-gerekli": "asansörlü taşıma",
  "kocasinan-asansorlu-tasima-hangi-binalarda-avantajli": "asansörlü taşıma",
  "ofis-tasima-surecinde-kesinti-nasil-azaltilir": "ofis taşıma",
  "melikgazi-ofis-tasima-sureci-nasil-planlanir": "ofis taşıma",
  "tadilat-surecinde-esya-depolama-ne-zaman-mantikli": "eşya depolama",
  "sehirlerarasi-nakliyatta-en-sik-hatalar": "şehirlerarası nakliyat",
  "sehirlerarasi-tasinmada-teslim-gunu-nasil-planlanir": "şehirlerarası nakliyat",
  "kayseri-sehirlerarasi-nakliyatta-esya-guvenligi-nasil-saglanir": "şehirlerarası nakliyat",
  "paketleme-kalitesi-neden-onemli": "paketleme ve montaj",
  "beyaz-esya-tasirken-dikkat-edilmesi-gerekenler": "paketleme ve montaj"
};

function createBlogSeoSections(post) {
  const service = relatedServiceBySlug[post.slug] || "evden eve nakliyat";

  return [
    {
      heading: "Kayseri'de yerel planlama neden önemlidir?",
      text: `${post.title} konusu Kayseri'de yalnızca genel bir taşınma tavsiyesi olarak düşünülmemelidir. İlçe, bina tipi, kat bilgisi, araç yaklaşımı ve site kuralları her taşınmada farklı sonuç verir. Talas'taki site düzeni, Melikgazi'deki iş yeri trafiği veya Kocasinan'daki yüksek katlı yapı koşulları aynı operasyon planıyla yönetilemez. Bu yüzden ${service} sürecinde yerel saha bilgisi, doğru fiyat ve sorunsuz taşıma için belirleyici hale gelir.`
    },
    {
      heading: "Doğru teklif için bilgileri net paylaşın",
      text: `${service} teklifi isterken başlangıç ve varış adresi, oda sayısı, kat durumu, bina asansörü, dış asansör ihtimali, paketleme kapsamı ve taşınma tarihi açık paylaşılmalıdır. Bu bilgiler net olduğunda hem fiyat daha gerçekçi hazırlanır hem de taşıma günü beklenmeyen ek süre, ek personel veya farklı araç ihtiyacı azalır. Kayseri nakliyat taleplerinde en sağlıklı teklif, bu detayların en başta konuşulduğu teklif olur.`
    },
    {
      heading: "Taşıma günü için küçük kontrol listesi",
      text: "Taşınma sabahı önemli belgeler, kişisel eşyalar, ilk gün kullanılacak mutfak malzemeleri ve şarj cihazları ayrı tutulmalıdır. Kırılacak ürünler, beyaz eşyalar ve sökülecek mobilyalar önceden işaretlenirse ekip daha hızlı hareket eder. Bu hazırlık, Kayseri içi taşımada zamanı kısaltır; şehirlerarası nakliyatta ise teslim gününün daha kontrollü geçmesine yardımcı olur."
    },
    {
      heading: "Sık yapılan hata: sadece en düşük fiyata bakmak",
      text: `${post.category} başlığında karar verirken yalnızca en düşük fiyatı seçmek çoğu zaman yeterli olmaz. Paketleme kalitesi, ekip deneyimi, araç uygunluğu, asansörlü taşıma seçeneği, montaj desteği ve iletişim disiplini toplam sonucu etkiler. Ucuz görünen bir teklif, kapsamı belirsizse taşıma günü ek maliyet veya zaman kaybı doğurabilir.`
    },
    {
      heading: "AZR Evden Eve Nakliyat bu süreci nasıl ele alır?",
      text: `AZR Evden Eve Nakliyat, Kayseri merkezli çalıştığı için ${service} taleplerinde önce saha şartlarını anlamaya odaklanır. Kat, oda, bina erişimi, paketleme ve teslim sırası netleştiğinde taşıma günü daha öngörülebilir hale gelir. Amaç yalnızca eşya taşımak değil; müşterinin taşınma öncesi, taşıma günü ve teslim sonrasında ne olacağını daha net görmesini sağlamaktır.`
    },
    {
      heading: "Blogdan sonra hangi adım atılmalı?",
      text: `${post.title} hakkında temel fikri edindikten sonra en doğru adım, kendi adres ve eşya durumunuzu netleştirmektir. Fotoğraf, oda bilgisi, kat durumu ve tarih aralığı paylaşıldığında Kayseri nakliyat ihtiyacınız için daha isabetli yönlendirme yapılabilir.`
    }
  ];
}

function createBlogFaqs(post) {
  const service = relatedServiceBySlug[post.slug] || "evden eve nakliyat";

  return [
    {
      question: "Kayseri'de taşınma planı kaç gün önce yapılmalı?",
      answer:
        "Yoğun dönemlerde en az birkaç gün önceden iletişime geçmek daha doğru olur. Kat bilgisi, eşya yoğunluğu ve tarih aralığı erken netleşirse uygun ekip ve araç planı daha rahat yapılır."
    },
    {
      question: `${service} için teklif alırken hangi bilgiler gerekir?`,
      answer:
        "Başlangıç ve varış adresi, oda sayısı, kat bilgisi, asansör durumu, paketleme ihtiyacı, tarih aralığı ve varsa montaj veya depolama talebi teklif hazırlamak için temel bilgilerdir."
    },
    {
      question: "Kayseri içi taşıma ile şehirlerarası nakliyat aynı şekilde mi planlanır?",
      answer:
        "Hayır. Kayseri içi taşımalarda bina erişimi ve günlük saat planı öne çıkarken, şehirlerarası nakliyatta rota, teslim penceresi, araç içi sabitleme ve uzun yol paketleme seviyesi daha kritik hale gelir."
    }
  ];
}

export const blogPosts = baseBlogPosts.map((post) => ({
  ...post,
  title: seoTitleOverrides[post.slug] || post.title,
  readTime: post.readTime === "3 dk" || post.readTime === "4 dk" ? "6 dk" : post.readTime,
  sections: [...post.sections, ...createBlogSeoSections(post)],
  faqs: post.faqs || createBlogFaqs(post)
}));
