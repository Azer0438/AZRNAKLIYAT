import { siteMeta } from "./sharedSiteData.js";

const serviceUpdatedAt = siteMeta.contentUpdatedAt;

export const services = [
  {
    slug: "evden-eve-tasimacilik",
    title: "Evden Eve Taşımacılık",
    description: "Daire taşınmalarında oda bazlı hazırlık, paketleme ve yerleşim akışını tek planda toplarız.",
    summary: "Ev taşıma sürecinde hazırlık, yükleme ve yeni adreste yerleşimi daha görünür ve düzenli hale getiririz.",
    hero: "Kayseri'de daire taşımasını planlı bir saha operasyonuna çeviren ekip",
    included: ["Oda bazlı taşıma planı", "Koruyucu paketleme", "Mobilya demontaj ve montaj", "Yeni adreste yerleşim sırası"],
    highlights: [
      "Site, apartman ve rezidans düzenine uygun ekip planı",
      "Kırılacak ürünler için ayrı koruma akışı",
      "Taşınma öncesinde kat ve erişim detaylarının netleştirilmesi"
    ],
    faqs: [
      {
        question: "Ev taşıma öncesi ekspertiz yapılıyor mu?",
        answer: "Taşımanın kapsamına göre telefonda detaylı ön görüşme yapılır; gerekli durumlarda saha keşfi veya görüntülü değerlendirme planlanabilir."
      },
      {
        question: "Mobilya montajı dahil mi?",
        answer: "Talebe göre söküm ve kurulum desteği taşıma planına dahil edilir; hizmet kapsamı teklif aşamasında netleştirilir."
      }
    ],
    updatedAt: serviceUpdatedAt
  },
  {
    slug: "ofis-ve-is-yeri-tasima",
    title: "Ofis ve İş Yeri Taşıma",
    description: "Ofis taşınmalarında departman düzeni, elektronik ekipman güvenliği ve kurulum sırasını birlikte yönetiriz.",
    summary: "Kurumsal taşınmalarda iş akışını korumaya yardımcı olan etaplı ve etiketli bir operasyon kurarız.",
    hero: "İş düzenini bozmadan taşınmak isteyen ofisler için kontrollü planlama",
    included: ["Departman bazlı etiketleme", "Elektronik ekipman taşıma", "Arşiv akışının korunması", "Mesai dışı planlama seçeneği"],
    highlights: [
      "Ofis kapanış süresini azaltan aşamalı taşıma planı",
      "Elektronik ekipman ve arşiv için ayrı koruma yaklaşımı",
      "Yetkili kişiyle tek hat üzerinden ilerleyen operasyon takibi"
    ],
    faqs: [
      {
        question: "Ofis taşıma mesai dışında yapılabilir mi?",
        answer: "Evet, iş sürekliliğini korumak için hafta sonu veya mesai sonrası taşıma planı oluşturulabilir."
      },
      {
        question: "Elektronik ekipman için özel koruma sağlanıyor mu?",
        answer: "Bilgisayar, monitör, yazıcı ve hassas cihazlar için ayrı ambalaj ve taşıma sırası uygulanır."
      }
    ],
    updatedAt: serviceUpdatedAt
  },
  {
    slug: "sehirlerarasi-nakliyat",
    title: "Şehirlerarası Nakliyat",
    description: "Kayseri çıkışlı veya Kayseri varışlı uzun yol taşınmalarında rota, sabitleme ve teslim penceresini önceden kurarız.",
    summary: "Şehirlerarası taşımalarda zaman planı ve yük güvenliğini merkeze alan daha disiplinli bir akış oluştururuz.",
    hero: "Uzun yolda sürprizi azaltan planlı şehirlerarası taşıma modeli",
    included: ["Rota ve zaman planlama", "Teslim tarihi koordinasyonu", "Uzun yol koruma ambalajı", "Araç içi sabitleme disiplini"],
    highlights: [
      "Mesafeye uygun yük güvenliği ve sabitleme yöntemi",
      "Yola çıkmadan önce oluşturulan teslim penceresi",
      "Uzun yol boyunca düzenli bilgi paylaşımı"
    ],
    faqs: [
      {
        question: "Şehirlerarası teslim süresi nasıl belirlenir?",
        answer: "Mesafe, rota yoğunluğu, yükleme günü ve varış adresinin erişim durumuna göre teslim penceresi belirlenir."
      },
      {
        question: "Eşyalar araç içinde nasıl korunuyor?",
        answer: "Uzun yol operasyonlarında sabitleme, koruyucu sarım ve yük gruplandırması birlikte uygulanır."
      }
    ],
    updatedAt: serviceUpdatedAt
  },
  {
    slug: "asansorlu-tasima",
    title: "Asansörlü Taşıma",
    description: "Yüksek katlı ve dar erişimli binalarda cephe üzerinden çalışarak süreyi ve bina içi riski azaltırız.",
    summary: "Asansörlü sistem, uygun binalarda yükleme hızını artırırken sürtünme ve manevra kaynaklı riski düşürür.",
    hero: "Yüksek katlarda bina içi karmaşayı azaltan asansörlü taşıma desteği",
    included: ["Cepheye uygun kurulum", "Kat ve bina analizi", "Hızlı yükleme", "Darbe riskini azaltan akış"],
    highlights: [
      "Dar merdiven boşluklarında eşya sürtünmesini azaltır",
      "Yüksek katlı binalarda operasyon süresini kısaltır",
      "Bina içi trafik ve komşuluk yükünü daha kontrollü hale getirir"
    ],
    faqs: [
      {
        question: "Her binada asansörlü taşıma yapılabilir mi?",
        answer: "Kurulum alanı, cephe açıklığı, araç yaklaşımı ve güvenlik şartları uygunsa asansörlü sistem uygulanabilir."
      },
      {
        question: "Asansörlü taşıma fiyatı nasıl değişir?",
        answer: "Kat sayısı, kurulum alanı, operasyon süresi ve taşımanın genel kapsamı fiyatı etkiler."
      }
    ],
    updatedAt: serviceUpdatedAt
  },
  {
    slug: "paketleme-ve-montaj",
    title: "Paketleme ve Montaj",
    description: "Hassas, büyük hacimli veya demontaj gerektiren eşyalar için doğru ambalaj ve kurulum sırası belirleriz.",
    summary: "Paketleme ve montaj hizmetiyle taşıma günü hem korumayı hem de yeni adresteki toparlanma hızını güçlendiririz.",
    hero: "Taşımanın kalitesini belirleyen paketleme ve montaj disiplini",
    included: ["Kırılacak eşya koruması", "Mobilya söküm", "Kurulum ve yerleşim", "Kategori bazlı koli düzeni"],
    highlights: [
      "Hassas eşyalar için çok katmanlı koruma kullanımı",
      "Kurulum sırasında düzenli parça ve aparat takibi",
      "Yeni evde toparlanmayı hızlandıran yerleşim sıralaması"
    ],
    faqs: [
      {
        question: "Sadece paketleme hizmeti alınabilir mi?",
        answer: "Evet, yalnızca ambalajlama ve hazırlık desteği içeren ayrı bir hizmet planı oluşturulabilir."
      },
      {
        question: "Kurulum hizmeti hangi eşyaları kapsar?",
        answer: "Gardırop, yatak, masa ve uygun modüler ürünlerde söküm ile yeniden kurulum desteği sağlanabilir."
      }
    ],
    updatedAt: serviceUpdatedAt
  },
  {
    slug: "esya-depolama",
    title: "Eşya Depolama",
    description: "Tadilat, anahtar teslim gecikmesi veya geçici bekleme dönemlerinde eşyaları kontrollü şekilde ara depolamaya alırız.",
    summary: "Depolama hizmetini yalnızca bekletme olarak değil, paketleme ve yeniden teslim planıyla birlikte ele alırız.",
    hero: "Taşınma arası boşluklarda düzeni koruyan eşya depolama hizmeti",
    included: ["Kısa ve orta vadeli depolama", "Listeleme", "Koruyucu ambalaj", "Yeniden teslim planı"],
    highlights: [
      "Tadilat ve teslim gecikmelerinde ara çözüm üretir",
      "Etiketleme ile yeniden teslim sürecini kolaylaştırır",
      "Depolama öncesinde koruyucu paketleme standardı uygular"
    ],
    faqs: [
      {
        question: "Depolama süresi esnek mi?",
        answer: "İhtiyaca göre kısa, orta veya daha uzun süreli depolama planı oluşturulabilir."
      },
      {
        question: "Depolama öncesi paketleme gerekli mi?",
        answer: "Eşyaların daha güvenli korunması için depolama öncesi uygun ambalaj yapılması önerilir ve hizmete dahil edilebilir."
      }
    ],
    updatedAt: serviceUpdatedAt
  }
];

const serviceParagraphTemplates = [
  ({ title }) =>
    `${title} hizmetinde bizim için asıl fark, taşıma gününe başlamadan önce saha şartlarını görünür hale getirmektir. Kat bilgisi, bina erişimi, araç yaklaşımı ve ek hizmetler önceden netleştiğinde operasyon çok daha dengeli ilerler.`,
  ({ included }) =>
    `Bu hizmette yalnızca yükleme değil; ${included.slice(0, 2).join(" ve ").toLowerCase()} gibi ayrıntılar da planın parçasıdır. Böylece ekip sahaya çıktığında neyin hangi sırayla yapılacağı bellidir.`,
  ({ summary }) =>
    `${summary} Sürecin her adımında iletişimi sade tutar, müşterinin hangi aşamada ne olacağını kolayca takip edebilmesini hedefleriz.`
];

const serviceFaqVariants = [
  ({ title }) => ({
    question: `${title} için teklif isterken hangi bilgiler paylaşılmalı?`,
    answer: "Başlangıç ve varış adresi, kat bilgisi, eşya yoğunluğu, tarih aralığı ve ek hizmet talepleri teklif hazırlamak için yeterli temel bilgileri oluşturur."
  }),
  ({ title }) => ({
    question: `${title} sürecinde ek paketleme alınabilir mi?`,
    answer: "Evet, ihtiyaç halinde koruyucu ambalaj, söküm, kurulum veya depolama desteği ayrı bir başlık olarak plana eklenebilir."
  }),
  ({ title }) => ({
    question: `${title} ne kadar önceden planlanmalı?`,
    answer: "Yoğun sezonlarda daha erken rezervasyon avantaj sağlar; standart dönemlerde ise temel bilgiler netleştiğinde hızlıca planlama yapılabilir."
  })
];

const serviceCtaTemplates = [
  ({ title }) => ({
    title: `${title} için taşıma planını netleştirin`,
    text: `${title} sürecini ihtiyaçlarınıza göre kuralım. WhatsApp üzerinden detayları paylaşın ya da teklif formundan ön planlama başlatın.`,
    primaryLabel: "WhatsApp'tan bilgi al"
  }),
  ({ title }) => ({
    title: `${title} için uygun ekip yapısını oluşturalım`,
    text: "Adres, tarih, kat bilgisi ve eşya hacmini paylaşın; size uygun taşıma modelini birlikte çıkaralım.",
    primaryLabel: "Ön teklif iste"
  })
];

export const enrichedServices = services.map((service, index) => ({
  ...service,
  paragraphs: serviceParagraphTemplates.map((template) => template(service)),
  faqs: [...service.faqs, serviceFaqVariants[index % serviceFaqVariants.length](service)],
  cta: serviceCtaTemplates[index % serviceCtaTemplates.length](service),
  metaTitle: `${service.title} | AZR Evden Eve Nakliyat`,
  metaDescription: `${service.summary} Kayseri merkezli AZR ekibiyle ${service.title.toLowerCase()} hizmeti için hızlı ön planlama ve teklif alın.`
}));
